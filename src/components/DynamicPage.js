import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { API_BASE } from "../config";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const mediaUrl = (path) => {
  if (!path) return null;

  // Already absolute or special URL
  if (/^(https?:)?\/\//i.test(path)) return path;
  if (path.startsWith("data:")) return path;
  if (path.startsWith("blob:")) return path;

  // Normalize slashes between API_BASE and path
  const base = (API_BASE || "").replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
};

const getFilename = (path) => {
  if (!path) return "";
  const clean = path.split("?")[0];
  return clean.split("/").pop();
};

const DynamicPage = ({ slug }) => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/pages/${slug}/`);
        if (!response.ok) throw new Error("Page not found");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message || "Error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div className="text-white text-center p-10">Loading...</div>;

  if (error) {
    return (
      <div className="text-white text-center p-10">
        <h2 className="text-2xl font-bold mb-4">Content Not Initialized</h2>
        <p>
          Please create a page with slug <strong>"{slug}"</strong> in the Admin Panel.
        </p>
        <a
          href={`${API_BASE}/admin/`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-4 block"
        >
          Go to Admin
        </a>
      </div>
    );
  }

  const title = language === "uk" ? data?.title_uk : data?.title_en;
  const description = language === "uk" ? data?.description_uk : data?.description_en;
  const sections = Array.isArray(data?.sections) ? data.sections : [];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1440px] mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-4">
          {title}
        </h1>

        {/* Page description (from /api/pages/<slug>/) */}
        {!!description && (
          <div
            className="prose prose-invert max-w-none text-lg leading-relaxed mb-8 prose-headings:text-white prose-p:text-gray-200 prose-a:text-blue-400 prose-strong:text-white prose-ul:text-gray-200 prose-ol:text-gray-200"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {description}
          </div>
        )}

        {/* Sections */}
        {sections.length > 0 ? (
          <div className="space-y-10">
            {sections
              .slice()
              .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
              .map((s) => {
                const sectionTitle = language === "uk" ? s.title_uk : s.title_en;
                const sectionHtml = language === "uk" ? s.content_uk : s.content_en;

                const imgSrc = mediaUrl(s.image_url);
                const videoSrc = mediaUrl(s.video_url);

                return (
                  <div key={s.id} className="bg-gray-800/40 rounded-lg p-5 border border-gray-700">
                    {!!sectionTitle && (
                      <h2 className="text-2xl font-semibold mb-4">{sectionTitle}</h2>
                    )}

                    {/* IMAGE */}
                    {s.image_url && (
                      <div className="mb-4 space-y-2">
                        <img
                          src={imgSrc}
                          alt={sectionTitle || "section image"}
                          className="w-full h-auto rounded shadow-lg object-cover max-h-[520px]"
                        />

                        {/* DEBUG: шлях + resolved + filename */}
                        <div className="text-xs text-gray-400 break-all">
                          <div>image_url: {s.image_url}</div>
                          <div>resolved: {imgSrc}</div>
                          <div>filename: {getFilename(s.image_url)}</div>
                        </div>
                      </div>
                    )}

                    {/* VIDEO */}
                    {s.video_url && (
                      <div className="mb-4 space-y-2">
                        <video
                          controls
                          src={videoSrc}
                          className="w-full rounded shadow-lg"
                        />
                        <div className="text-xs text-gray-400 break-all">
                          <div>video_url: {s.video_url}</div>
                          <div>resolved: {videoSrc}</div>
                          <div>filename: {getFilename(s.video_url)}</div>
                        </div>
                      </div>
                    )}

                    {/* EMBED */}
                    {s.embed_code && (
                      <div
                        className="mb-4"
                        dangerouslySetInnerHTML={{ __html: s.embed_code }}
                      />
                    )}

                    {/* TEXT (CKEditor HTML) */}
                    {!!sectionHtml && (
                      <div
                        className="prose prose-invert max-w-none text-lg leading-relaxed prose-headings:text-white prose-p:text-gray-200 prose-a:text-blue-400 prose-strong:text-white prose-ul:text-gray-200 prose-ol:text-gray-200"
                        dangerouslySetInnerHTML={{ __html: sectionHtml }}
                      />
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="text-gray-300">No sections yet.</div>
        )}

        {/* Chart (якщо є) */}
        {data?.chart_data?.rows && data?.chart_data?.columns && (
          <div className="mt-10 space-y-12">
            {/* Table */}
            <div className="overflow-x-auto bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                {language === "uk" ? "Детальні дані" : "Detailed Data"}
              </h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-700 text-gray-300">
                    {data.chart_data.columns.map((col, idx) => (
                      <th key={idx} className="p-3 border-b border-gray-600">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.chart_data.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="hover:bg-gray-750 border-b border-gray-700 last:border-0"
                    >
                      {row.label && <td className="p-3 font-medium">{row.label}</td>}
                      {row.values &&
                        row.values.map((val, vIdx) => (
                          <td key={vIdx} className="p-3">
                            {val}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-gray-900">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                {language === "uk" ? "Графік показників" : "Indices Chart"}
              </h3>
              <Bar
                data={{
                  labels: data.chart_data.rows.map((r) => r.label),
                  datasets: data.chart_data.columns.slice(1).map((col, cIdx) => ({
                    label: col,
                    data: data.chart_data.rows.map((r) => r.values[cIdx]),
                  })),
                }}
                options={{ responsive: true }}
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default DynamicPage;