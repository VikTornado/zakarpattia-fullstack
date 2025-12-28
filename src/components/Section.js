import React from "react";
import { API_BASE } from "../config";
import { Bar, Pie, Line } from "react-chartjs-2";
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from "lucide-react";
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

const Section = ({ section, isUk }) => {
  const title = isUk ? section.title_uk : section.title_en;
  const content = isUk ? section.content_uk : section.content_en;
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

      case "chart": {
        const chartType = section.chart_data?.type || 'bar';
        return (
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-8 text-center ring-1 ring-black/5">
            {title && <h2 className="text-2xl font-bold mb-8 text-gray-900 font-display">{title}</h2>}
            {section.chart_data ? (
              <div className="max-w-4xl mx-auto h-[450px] flex items-center justify-center p-4">
                {chartType === 'pie' ? (
                  <Pie 
                    data={section.chart_data} 
                    options={{ 
                      responsive: true, 
                      maintainAspectRatio: false,
                      plugins: { legend: { position: 'bottom' } } 
                    }} 
                  />
                ) : chartType === 'line' ? (
                  <Line 
                    data={section.chart_data} 
                    options={{ 
                      responsive: true, 
                      maintainAspectRatio: false,
                      plugins: { legend: { position: 'bottom' } } 
                    }} 
                  />
                ) : (
                  <Bar 
                    data={section.chart_data} 
                    options={{ 
                      responsive: true, 
                      maintainAspectRatio: false,
                      plugins: { legend: { position: 'bottom' } } 
                    }} 
                  />
                )}
              </div>
            ) : (
              <div className="p-12 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
                {isUk ? 'Дані графіку відсутні' : 'No chart data provided'}
              </div>
            )}
            {content && (
              <div
                className="prose max-w-none text-gray-600 mt-8 text-left border-t border-gray-100 pt-6"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );
      }

      case "stats": {
        const stats = section.chart_data?.stats || [];
        return (
          <div className="mb-12">
            {title && <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 font-display">{title}</h2>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.length > 0 ? (
                stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center group hover:shadow-md transition-all duration-300 ring-1 ring-black/5"
                  >
                    <div className="text-4xl font-extrabold text-blue-600 mb-2 font-display group-hover:scale-110 transition-transform">
                      {stat.prefix}{stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest leading-tight">
                      {isUk ? stat.label_uk : stat.label_en}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div
                  className="col-span-full prose max-w-none text-gray-700 bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </div>
          </div>
        );
      }

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

      case "grid":
        return (
          <div className="mb-16">
            {title && (
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 font-display">
                {title}
              </h2>
            )}
            {content && (
              <div
                className="prose prose-lg max-w-4xl mx-auto text-center text-gray-600 mb-12 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items && section.items.length > 0 ? (
                section.items.map((item, idx) => {
                  const itemTitle = isUk ? (item.title_uk || item.title_en) : (item.title_en || item.title_uk);
                  const itemDesc = isUk ? (item.description_uk || item.description_en) : (item.description_en || item.description_uk);
                  const itemFile = mediaUrl(item.file_url);
                  const itemImg = mediaUrl(item.image_url);

                  return (
                    <motion.div
                      key={item.id || idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={(e) => {
                        const target = itemFile || itemImg;
                        if (target) {
                          e.preventDefault();
                          window.open(target, "_blank");
                        }
                      }}
                      className={`group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col h-full ring-1 ring-black/5 ${ (itemFile || itemImg) ? 'cursor-pointer' : '' }`}
                    >
                      {itemImg && (
                        <div className="mb-6 overflow-hidden rounded-2xl aspect-video relative">
                          <img
                            src={itemImg}
                            alt={itemTitle}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300 flex items-center justify-center">
                            <ExternalLink size={40} className="text-white opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100" />
                          </div>
                        </div>
                      )}
                      
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            {item.file_url ? <FileText size={24} /> : <ExternalLink size={24} />}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 leading-tight">
                            {itemTitle}
                          </h3>
                        </div>
                        
                        {itemDesc && (
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {itemDesc}
                          </p>
                        )}
                      </div>

                      {item.file_url && (
                        <div className="mt-4 flex items-center justify-between px-6 py-4 bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white rounded-2xl font-bold transition-all duration-300 group/btn">
                          <span className="flex items-center gap-2">
                            <Download size={18} className="group-hover/btn:animate-bounce" />
                            {isUk ? 'Завантажити PDF' : 'Download PDF'}
                          </span>
                          <span className="text-[10px] opacity-40 uppercase tracking-widest font-black">
                            PDF
                          </span>
                        </div>
                      )}
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-full py-12 text-center text-gray-400 italic bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                  {isUk ? 'Елементи сітки відсутні' : 'No grid items found'}
                </div>
              )}
            </div>
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