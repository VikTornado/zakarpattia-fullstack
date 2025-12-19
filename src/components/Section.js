import React, { useMemo } from "react";
import { API_BASE } from "../config";
import { Bar, Pie, Line } from "react-chartjs-2";
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const mediaUrl = (path) => {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return `${API_BASE}${path}`;
};

const getFilename = (path) => {
  if (!path) return "";
  const clean = path.split("?")[0];
  return clean.split("/").pop();
};

const Section = ({ section, language }) => {
  const title = language === "uk" ? section.title_uk : section.title_en;
  const content = language === "uk" ? section.content_uk : section.content_en;

  const imgSrc = mediaUrl(section.image_url);
  const videoSrc = mediaUrl(section.video_url);

  // ✅ Картинку/відео рендеримо НЕ по section_type, а по наявності поля
  const MediaBlock = () => (
    <>
      {section.image_url && (
        <div className="mb-4 space-y-2">
          <img
            src={imgSrc}
            alt={title || "Section image"}
            className="w-full rounded-lg shadow-md object-cover max-h-[520px]"
          />

          {/* DEBUG */}
          <div className="text-xs text-gray-500 break-all">
            <div>image_url: {section.image_url}</div>
            <div>resolved: {imgSrc}</div>
            <div>filename: {getFilename(section.image_url)}</div>
          </div>
        </div>
      )}

      {section.video_url && (
        <div className="mb-4 space-y-2">
          <video controls className="w-full rounded-lg shadow-md" preload="metadata">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* DEBUG */}
          <div className="text-xs text-gray-500 break-all">
            <div>video_url: {section.video_url}</div>
            <div>resolved: {videoSrc}</div>
            <div>filename: {getFilename(section.video_url)}</div>
          </div>
        </div>
      )}
    </>
  );

  const renderSection = () => {
    switch (section.section_type) {
      case "hero":
        return (
          <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-xl mb-12">
            {section.video_url ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : section.image_url ? (
              <img
                src={imgSrc}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900" />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
              <div className="max-w-4xl">
                {title && (
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl">
                    {title}
                  </h1>
                )}
                {content && (
                  <div
                    className="text-xl md:text-2xl text-white/90 drop-shadow-md"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                )}
              </div>
            </div>
          </div>
        );

      case "text":
      case "image":
      case "video":
        return (
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
            {title && <h2 className="text-3xl font-bold mb-6 text-gray-900">{title}</h2>}
            <MediaBlock />
            {content && (
              <div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );

      case "chart":
        return (
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 mb-8 text-center">
            {title && <h2 className="text-2xl font-bold mb-8 text-gray-900">{title}</h2>}
            {section.chart_data ? (
              <div className="max-w-4xl mx-auto h-[400px] flex items-center justify-center">
                {/* Simple detection of chart type based on structure or fallback to Bar */}
                <Bar 
                  data={section.chart_data} 
                  options={{ 
                    responsive: true, 
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom' } } 
                  }} 
                />
              </div>
            ) : (
              <div className="p-12 text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
                No chart data provided
              </div>
            )}
            {content && (
              <div
                className="prose max-w-none text-gray-600 mt-8 text-left"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );

      case "stats":
        return (
          <div className="mb-12">
            {title && <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">{title}</h2>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {/* Extract stats from content or structured data - for now simple content rendering */}
               <div
                className="col-span-full prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        );

      case "embed":
        return (
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl mb-8">
            {title && <h3 className="text-2xl font-semibold mb-6 text-gray-800">{title}</h3>}
            {section.embed_code && (
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg bg-black" 
                   dangerouslySetInnerHTML={{ __html: section.embed_code }} />
            )}
            {content && (
              <div
                className="prose max-w-none text-gray-600 mt-6"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );

      case "gallery":
        return (
          <div className="mb-12">
            {title && <h3 className="text-3xl font-bold mb-8 text-gray-900">{title}</h3>}
            <MediaBlock />
            {content && (
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );

      case "custom":
        return (
          <div className="custom-section mb-12">
            <div dangerouslySetInnerHTML={{ __html: section.embed_code || content }} />
          </div>
        );

      default:
        return (
          <div className="p-6 border border-gray-200 rounded-lg mb-8">
            {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
            <MediaBlock />
            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="section mb-12 sm:mb-16"
    >
      {renderSection()}
    </motion.div>
  );
};

export default Section;