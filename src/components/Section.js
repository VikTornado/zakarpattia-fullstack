import React from "react";
import { API_BASE } from "../config";

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
      case "text":
      case "image": // навіть якщо хтось поставить image — все одно ок
      case "video":
        return (
          <div>
            {title && <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>}

            <MediaBlock />

            {content && (
              <div
                className="prose max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );

      case "embed":
        return (
          <div>
            {title && <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>}
            {section.embed_code && (
              <div className="embed-container" dangerouslySetInnerHTML={{ __html: section.embed_code }} />
            )}
            {content && (
              <div
                className="prose max-w-none text-gray-600 mt-4"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );

      case "gallery":
        return (
          <div>
            {title && <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>}
            <MediaBlock />
            {content && (
              <div
                className="prose max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );

      default:
        // на всяк випадок — покажемо медіа навіть для невідомого типу
        return (
          <div>
            {title && <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>}
            <MediaBlock />
            {content && (
              <div
                className="prose max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );
    }
  };

  return <div className="section mb-8">{renderSection()}</div>;
};

export default Section;