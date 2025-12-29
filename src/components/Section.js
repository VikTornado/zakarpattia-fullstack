import React, { useState } from "react";
import { API_BASE } from "../config";
import { Bar, Pie, Line } from "react-chartjs-2";
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, ExternalLink, ArrowLeft, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
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
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  const title = isUk ? section.title_uk : section.title_en;
  const content = isUk ? section.content_uk : section.content_en;
  const imgSrc = mediaUrl(section.image_url);
  const videoSrc = mediaUrl(section.video_url);

  const nextSlide = (images) => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (images) => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const MediaBlock = () => (
    <>
      {section.image_url && (
        <div className="mb-4 space-y-2">
          <img
            src={imgSrc}
            alt={title || "Section image"}
            className="w-full rounded-lg shadow-md object-cover max-h-[520px]"
          />
        </div>
      )}

      {section.video_url && (
        <div className="mb-4 space-y-2">
          <video controls className="w-full rounded-lg shadow-md" preload="metadata">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
          <div className="mb-20">
            {title && (
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight">
                  {title}
                </h2>
                {content && (
                   <div
                    className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                )}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {section.items && section.items.length > 0 ? (
                section.items.map((item, idx) => {
                  const itemTitle = isUk ? (item.title_uk || item.title_en) : (item.title_en || item.title_uk);
                  const itemDesc = isUk ? (item.description_uk || item.description_en) : (item.description_en || item.description_uk);
                  const itemImg = mediaUrl(item.image_url);
                  const btnText = isUk 
                    ? (item.button_text_uk || 'Детальніше') 
                    : (item.button_text_en || 'View Details');

                  // Dynamic icon based on item_type
                  const ItemIcon = item.item_type === 'document' ? FileText 
                                 : item.item_type === 'link' ? ExternalLink 
                                 : FileText; // default

                  return (
                    <motion.div
                      key={item.id || idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.5 }}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedItem(item);
                        setCurrentSlide(0);
                        setShowPdfPreview(false);
                      }}
                      className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer relative"
                    >
                      {/* Image first - style Catalog */}
                      {itemImg ? (
                        <div className="overflow-hidden aspect-[16/10] relative">
                          <img
                            src={itemImg}
                            alt={itemTitle}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          {item.item_type === 'document' && (
                            <div className="absolute top-4 left-4 p-2 bg-blue-600 text-white rounded-lg shadow-lg">
                               <FileText size={20} />
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="aspect-[16/10] bg-gray-50 flex items-center justify-center text-gray-300">
                           <ItemIcon size={48} strokeWidth={1} />
                        </div>
                      )}

                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-2">
                           {item.item_type !== 'card' && <ItemIcon size={16} className="text-blue-500" />}
                           <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {itemTitle}
                          </h3>
                        </div>
                        
                        {itemDesc && (
                          <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                            {itemDesc}
                          </p>
                        )}

                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                          <span className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                            {btnText}
                          </span>
                          <ArrowLeft className="rotate-180 text-blue-600 w-4 h-4 transition-all transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-full py-20 text-center text-gray-400 bg-gray-50/50 rounded-xl border-4 border-dashed border-gray-100">
                   <p className="text-xl font-bold opacity-30 tracking-tight">
                    {isUk ? 'Елементи ще не додані' : 'No items added yet'}
                   </p>
                </div>
              )}
            </div>

            {/* Modal Detail View */}
            <AnimatePresence>
              {selectedItem && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 pt-20 md:pt-24">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedItem(null)}
                    className="absolute inset-0 bg-black/70 backdrop-blur-md"
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    className="relative bg-white w-full max-w-7xl h-full overflow-hidden rounded-[2rem] shadow-2xl flex flex-col mb-4"
                  >
                    {/* Top Bar - adjusted for visibility */}
                    <div className="absolute top-6 right-6 z-20 flex gap-3 pointer-events-none">
                       <button
                        onClick={() => setSelectedItem(null)}
                        className="pointer-events-auto p-3 bg-white/20 hover:bg-white/40 backdrop-blur-lg rounded-full text-white transition-all shadow-lg"
                      >
                        <ArrowLeft size={20} />
                      </button>
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="pointer-events-auto p-3 bg-white/20 hover:bg-white/40 backdrop-blur-lg rounded-full text-white transition-all hover:rotate-90 shadow-lg"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="overflow-y-auto flex-grow custom-scrollbar">
                      {/* SLIDER / HERO - REDUCED HEIGHT */}
                      {(() => {
                        const allItemImages = [
                          ...(selectedItem.image_url ? [{ image_url: selectedItem.image_url }] : []),
                          ...(selectedItem.images || [])
                        ];
                        const hasMultiple = allItemImages.length > 1;

                        return (
                          <div className="relative h-[40vh] md:h-[45vh] w-full bg-black group">
                            <AnimatePresence mode="wait">
                              <motion.img
                                key={currentSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                src={mediaUrl(allItemImages[currentSlide]?.image_url)}
                                alt="Gallery"
                                className="w-full h-full object-contain bg-black/90"
                              />
                            </AnimatePresence>

                            {/* Slider Controls */}
                            {hasMultiple && (
                              <>
                                <button
                                  onClick={(e) => { e.stopPropagation(); prevSlide(allItemImages); }}
                                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-all z-30"
                                >
                                  <ChevronLeft size={32} />
                                </button>
                                <button
                                  onClick={(e) => { e.stopPropagation(); nextSlide(allItemImages); }}
                                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md transition-all z-30"
                                >
                                  <ChevronRight size={32} />
                                </button>
                                
                                {/* Dots */}
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                                  {allItemImages.map((_, i) => (
                                    <div 
                                      key={i}
                                      onClick={(e) => { e.stopPropagation(); setCurrentSlide(i); }}
                                      className={`h-2 transition-all rounded-full cursor-pointer shadow-lg ${i === currentSlide ? 'w-10 bg-white' : 'w-2 bg-white/50'}`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 md:p-16 pointer-events-none">
                              <div className="max-w-4xl">
                                <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-4 drop-shadow-2xl">
                                  {isUk ? (selectedItem.title_uk || selectedItem.title_en) : (selectedItem.title_en || selectedItem.title_uk)}
                                </h2>
                              </div>
                            </div>
                          </div>
                        );
                      })()}

                      <div className="p-8 md:p-16">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                          <div className="lg:col-span-8 space-y-12">
                             {/* Detailed Content */}
                             <div 
                                className="prose prose-xl prose-blue max-w-none text-gray-800 leading-relaxed font-medium pb-20"
                                dangerouslySetInnerHTML={{ __html: isUk ? (selectedItem.content_uk || selectedItem.content_en) : (selectedItem.content_en || selectedItem.content_uk) }}
                             />
                          </div>

                          {/* Sidebar */}
                          <div className="lg:col-span-4 space-y-8">
                            <div className="bg-gray-50/80 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                               <h4 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                  <FileText className="text-blue-600" />
                                  {isUk ? 'Документація' : 'Documents'}
                               </h4>
                               
                               {selectedItem.file_url ? (
                                 <div className="space-y-4">
                                   <button
                                     onClick={() => setShowPdfPreview(!showPdfPreview)}
                                     className="w-full flex items-center justify-between p-6 bg-white hover:bg-blue-50 text-blue-900 rounded-3xl font-black transition-all border-2 border-blue-100 group"
                                   >
                                     <span className="flex items-center gap-3">
                                       <Eye size={22} className="group-hover:scale-110 transition-transform" />
                                       {isUk ? 'Читати на сторінці' : 'Read Inline'}
                                     </span>
                                   </button>
                                   
                                   <a
                                     href={mediaUrl(selectedItem.file_url)}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     className="w-full flex items-center justify-between p-6 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-black transition-all shadow-xl shadow-blue-500/20 group translate-y-0 hover:-translate-y-1"
                                   >
                                     <span className="flex items-center gap-3">
                                       <Download size={22} className="group-hover:animate-bounce" />
                                       {isUk ? 'Завантажити PDF' : 'Download PDF'}
                                     </span>
                                     <span className="text-xs opacity-50 bg-white/20 px-3 py-1 rounded-full">PDF</span>
                                   </a>
                                 </div>
                               ) : (
                                 <p className="text-gray-400 font-bold italic">
                                   {isUk ? 'Файли відсутні' : 'No files attached'}
                                 </p>
                               )}

                               {(selectedItem.description_uk || selectedItem.description_en) && (
                                  <div className="mt-10 pt-10 border-t border-gray-200">
                                    <h5 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">
                                      {isUk ? 'Короткий огляд' : 'Quick Summary'}
                                    </h5>
                                    <p className="text-gray-600 font-bold leading-relaxed">
                                      {isUk ? (selectedItem.description_uk || selectedItem.description_en) : (selectedItem.description_en || selectedItem.description_uk)}
                                    </p>
                                  </div>
                               )}
                            </div>
                          </div>
                        </div>

                        {/* INLINE PDF PREVIEW */}
                        <AnimatePresence>
                          {showPdfPreview && selectedItem.file_url && (
                             <motion.div
                               initial={{ opacity: 0, height: 0 }}
                               animate={{ opacity: 1, height: 'auto' }}
                               exit={{ opacity: 0, height: 0 }}
                               className="mt-12 overflow-hidden rounded-[3rem] border-4 border-gray-100 shadow-2xl"
                             >
                                <iframe
                                  src={`${mediaUrl(selectedItem.file_url)}#toolbar=0`}
                                  className="w-full h-[80vh]"
                                  title="PDF Preview"
                                />
                             </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
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