import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE } from "../config";

export default function Parks() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hint, setHint] = useState("");

  useEffect(() => {
    let alive = true;

    const run = async () => {
      try {
        setHint("");
        const res = await fetch(`${API_BASE}/api/catalog/catalog-items/`);

        if (res.status === 429) {
          if (alive) setHint("Забагато запитів. Спробуй ще раз через 30–40 секунд.");
          return; // ✅ НЕ обнуляємо items
        }

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        if (!alive) return;

        setItems(Array.isArray(data) ? data : []);
      } catch (e) {
        if (alive) setHint("Не вдалося завантажити дані каталогу.");
      } finally {
        if (alive) setLoading(false);
      }
    };

    run();
    return () => {
      alive = false;
    };
  }, []);

  if (loading) return <div className="p-8">Завантаження…</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Індустріальні парки</h1>
      {hint && <div className="mb-6 text-sm text-amber-600">{hint}</div>}

      {items.length === 0 ? (
        <div className="text-gray-500">Поки немає парків</div>
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
                  src={`${API_BASE}${item.cover_image_url}`}
                  alt={item.title_uk}
                  className="w-full h-44 object-cover"
                />
              )}

              <div className="p-4">
                <div className="font-semibold text-lg">{item.title_uk}</div>
                {!!item.short_description_uk && (
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