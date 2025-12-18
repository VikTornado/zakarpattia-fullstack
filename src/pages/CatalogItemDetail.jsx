import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_BASE } from "../config";

export default function CatalogItemDetail() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/catalog/catalog-items/${slug}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch(() => {
        setItem(null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="p-8">Loading…</div>;
  if (!item) return <div className="p-8 text-red-600">Item not found</div>;

  const coverUrl = item.cover_image_url ? `${API_BASE}${item.cover_image_url}` : null;
  const pdfUrl = item.pdf_url ? `${API_BASE}${item.pdf_url}` : null;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* top bar */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <Link
          to="/catalog"
          className="text-sm text-blue-600 hover:text-blue-700 underline"
        >
          ← Повернутись до каталогу
        </Link>

        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition text-sm"
          >
            📄 Відкрити PDF / презентацію
          </a>
        )}
      </div>

      <h1 className="text-3xl font-bold mb-4">
        {item.title_uk || item.title_en}
      </h1>

      {coverUrl && (
        <img
          src={coverUrl}
          alt={item.title_uk || item.title_en}
          className="w-full max-h-[420px] object-cover rounded mb-6"
        />
      )}

      <p className="text-gray-700 whitespace-pre-line mb-6">
        {item.content_uk || item.content_en}
      </p>

      {/* gallery (поки порожня, але блок готовий) */}
      {item.gallery?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Галерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {item.gallery.map((g) => (
              <div key={g.id} className="rounded overflow-hidden bg-white shadow">
                <img
                  src={`${API_BASE}${g.image_url}`}
                  alt={g.caption_uk || g.caption_en || "photo"}
                  className="w-full h-44 object-cover"
                />
                {(g.caption_uk || g.caption_en) && (
                  <div className="p-2 text-sm text-gray-700">
                    {g.caption_uk || g.caption_en}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}