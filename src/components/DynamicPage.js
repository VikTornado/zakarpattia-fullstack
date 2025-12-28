import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import Section from './Section';
import { HeroSkeleton, SectionSkeleton } from './Skeleton';

const DynamicPage = ({ slug }) => {
  const { language } = useContext(LanguageContext);
  const isUk = language === 'uk';
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        console.error("[DynamicPage] fetch error:", err);
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

  const title = page ? (isUk ? page.title_uk : page.title_en) : '';
  const description = page ? (isUk ? page.description_uk : page.description_en) : '';

  useEffect(() => {
    if (title) {
      document.title = `${title} | Zakarpattia Invest Hub`;
    }
  }, [title]);

  if (loading) {
    return (
      <div className="pb-20">
        <HeroSkeleton />
        <SectionSkeleton />
        <SectionSkeleton />
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {isUk ? 'Сторінку не знайдено' : 'Page not found'}
        </h2>
        <p className="text-gray-600">
          {isUk 
            ? 'Вибачте, запитувана сторінка не існує або була видалена.' 
            : 'Sorry, the requested page does not exist or has been removed.'}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent">
      {/* Optional: Simple breadcrumbs or header if not hero section */}
      {!page.sections?.some(s => s.section_type === 'hero') && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Page Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-4">
          {page.sections && page.sections.length > 0 ? (
            page.sections.map((section) => (
              <Section
                key={section.id}
                section={section}
                isUk={isUk}
              />
            ))
          ) : (
            <div className="py-20 text-center text-gray-500 italic">
              {isUk ? 'Ця сторінка поки що порожня.' : 'This page is empty for now.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicPage;