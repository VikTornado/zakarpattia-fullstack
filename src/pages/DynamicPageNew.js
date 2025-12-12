import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';

const DynamicPageNew = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const language = i18n.language;

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/pages/${slug}/`);
        
        if (!response.ok) {
          throw new Error('Page not found');
        }
        
        const data = await response.json();
        setPage(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPage(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPage();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Page not found</div>
      </div>
    );
  }

  const title = language === 'uk' ? page.title_uk : page.title_en;
  const description = language === 'uk' ? page.description_uk : page.description_en;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl">
              {description}
            </p>
          )}
        </div>

        {/* Page Sections */}
        <div className="space-y-12">
          {page.sections && page.sections.length > 0 ? (
            page.sections.map((section) => (
              <Section
                key={section.id}
                section={section}
                language={language}
              />
            ))
          ) : (
            <p className="text-gray-500">No content available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicPageNew;
