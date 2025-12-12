import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { motion } from "framer-motion";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);


const DynamicPage = ({ slug }) => {
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/content/${slug}/`);
        if (!response.ok) {
          throw new Error("Content not found");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div className="text-white text-center p-10">Loading...</div>;
  
  // If content is not found in Admin, shows a placeholder.
  if (error) {
    return (
      <div className="text-white text-center p-10">
        <h2 className="text-2xl font-bold mb-4">Content Not Initialized</h2>
        <p>Please create a page with slug <strong>"{slug}"</strong> in the Admin Panel.</p>
        <a 
          href="http://localhost:8000/admin/content/pagecontent/add/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline mt-4 block"
        >
          Go to Admin
        </a>
      </div>
    );
  }

  const title = language === "uk" ? data.title_uk : data.title_en;
  const content = language === "uk" ? data.content_uk : data.content_en;

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

        {data.image_url && (
          <div className="mb-6">
            <img 
              src={data.image_url} 
              alt={title} 
              className="w-full h-auto rounded shadow-lg object-cover max-h-[500px]" 
            />
          </div>
        )}

        <div className="prose prose-invert max-w-none text-lg leading-relaxed whitespace-pre-wrap mb-8">
          {content}
        </div>

        {/* Dynamic Table & Chart Section */}
        {data.chart_data && (
          <div className="mt-8 space-y-12">
            
            {/* Table */}
            {data.chart_data.columns && data.chart_data.rows && (
              <div className="overflow-x-auto bg-gray-800 p-4 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
                   {language === 'uk' ? 'Детальні дані' : 'Detailed Data'}
                </h3>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-700 text-gray-300">
                      {data.chart_data.columns.map((col, idx) => (
                        <th key={idx} className="p-3 border-b border-gray-600">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.chart_data.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-gray-750 border-b border-gray-700 last:border-0">
                         {/* If row is object with label/values */}
                         {row.label && (
                           <td className="p-3 font-medium">{row.label}</td>
                         )}
                         {/* Check if row.values exists, matches typical structure */}
                         {row.values && row.values.map((val, vIdx) => (
                           <td key={vIdx} className="p-3">{val}</td>
                         ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Chart */}
            {data.chart_data.rows && (
              <div className="bg-white p-6 rounded-lg shadow-lg text-gray-900">
                 <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                   {language === 'uk' ? 'Графік показників' : 'Indices Chart'}
                 </h3>
                 <Bar 
                   data={{
                     labels: data.chart_data.rows.map(r => r.label),
                     datasets: data.chart_data.columns.slice(1).map((col, cIdx) => ({
                       label: col,
                       data: data.chart_data.rows.map(r => r.values[cIdx]),
                       backgroundColor: cIdx === 0 ? "#60a5fa" : cIdx === 1 ? "#34d399" : "#fbbf24",
                     }))
                   }}
                   options={{ responsive: true }}
                 />
              </div>
            )}
          </div>
        )}

      </motion.div>
    </div>

  );
};

export default DynamicPage;
