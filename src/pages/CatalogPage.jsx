import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE } from "../config";

function getMediaUrl(path) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  // API_BASE can be "" in dev if you rely on CRA proxy
  return `${API_BASE || ""}${path}`;
}

export default function CatalogPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryIn, setRetryIn] = useState(null);
  const retryTimerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const clearRetryTimer = () => {
      if (retryTimerRef.current) {
        clearInterval(retryTimerRef.current);
        retryTimerRef.current = null;
      }
    };

    const run = async () => {
      try {
        setLoading(true);
        setError(null);
        setRetryIn(null);
        clearRetryTimer();

        const res = await fetch(`${API_BASE}/api/catalog/catalog-items/`);

        // Handle DRF throttling gracefully (429)
        if (res.status === 429) {
          const retryAfterHeader = res.headers.get("Retry-After");
          const retryAfter = retryAfterHeader ? parseInt(retryAfterHeader, 10) : null;

          // Try to parse DRF message too (it often contains seconds)
          let bodyText = "";
          try {
            bodyText = await res.text();
          } catch {
            bodyText = "";
          }

          const match = bodyText.match(/Expected available in\s+(\d+)\s+seconds/i);
          const seconds = Number.isFinite(retryAfter) ? retryAfter : match ? parseInt(match[1], 10) : 30;

          if (!cancelled) {
            setError(`Занадто багато запитів. Спробуй ще раз через ${seconds} сек.`);
            setRetryIn(seconds);
          }

          // Countdown + auto retry once
          let left = seconds;
          retryTimerRef.current = setInterval(() => {
            left -= 1;
            if (cancelled) return;
            setRetryIn(left);
            if (left <= 0) {
              clearRetryTimer();
              run();
            }
          }, 1000);

          return; // IMPORTANT: do not wipe items
        }

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();
        if (!cancelled) {
          setItems(Array.isArray(data) ? data : []);
        }
      } catch (e) {
        console.error("Catalog fetch failed", e);
        // IMPORTANT: don't clear existing items on transient errors
        if (!cancelled) {
          setError("Не вдалося завантажити каталог. Перевір бекенд або спробуй пізніше.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    run();

    return () => {
      cancelled = true;
      if (retryTimerRef.current) {
        clearInterval(retryTimerRef.current);
        retryTimerRef.current = null;
      }
    };
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Каталог</h1>
        <button
          onClick={() => window.location.reload()}
          className="text-sm px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
          title="Refresh"
        >
          Оновити
        </button>
      </div>

      {error && (
        <div className="mb-6 rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-900">
          {error}
          {retryIn !== null && retryIn > 0 && (
            <span className="ml-2 text-yellow-700">(повтор через {retryIn} сек)</span>
          )}
        </div>
      )}

      {items.length === 0 ? (
        <div className="text-gray-600">Поки немає елементів каталогу.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              to={`/catalog/${item.slug}`}
              className="rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition"
            >
              {item.cover_image_url && (
                <img
                  src={getMediaUrl(item.cover_image_url)}
                  alt={item.title_uk || item.title_en || "Catalog item"}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
              )}
              <div className="p-4">
                <div className="font-semibold text-lg">{item.title_uk || item.title_en}</div>
                {item.short_description_uk && (
                  <div className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {item.short_description_uk}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}