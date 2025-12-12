import React from 'react';

const Section = ({ section, language }) => {
  const title = language === 'uk' ? section.title_uk : section.title_en;
  const content = language === 'uk' ? section.content_uk : section.content_en;

  const renderSection = () => {
    switch (section.section_type) {
      case 'text':
        return (
          <div className="section-text">
            {title && <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>}
            {content && (
              <div 
                className="prose max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );

      case 'image':
        return (
          <div className="section-image">
            {title && <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>}
            {section.image_url && (
              <img
                src={section.image_url}
                alt={title || 'Section image'}
                className="w-full rounded-lg shadow-md"
              />
            )}
            {content && (
              <div 
                className="prose max-w-none text-gray-600 mt-4"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );

      case 'video':
        return (
          <div className="section-video">
            {title && <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>}
            {section.video_url && (
              <video
                controls
                className="w-full rounded-lg shadow-md"
                preload="metadata"
              >
                <source src={section.video_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {content && (
              <div 
                className="prose max-w-none text-gray-600 mt-4"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );

      case 'gallery':
        return (
          <div className="section-gallery">
            {title && <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>}
            {/* Gallery implementation would go here */}
            {content && (
              <div 
                className="prose max-w-none text-gray-600"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );

      case 'embed':
        return (
          <div className="section-embed">
            {title && <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>}
            {section.embed_code && (
              <div 
                className="embed-container"
                dangerouslySetInnerHTML={{ __html: section.embed_code }}
              />
            )}
            {content && (
              <div 
                className="prose max-w-none text-gray-600 mt-4"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="section mb-8">
      {renderSection()}
    </div>
  );
};

export default Section;
