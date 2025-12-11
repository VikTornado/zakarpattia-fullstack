import { useState, useContext } from "react";
import allProjects from "../data/projectsData";
import { LanguageContext } from "../LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const projectCategories = [
  "Investment",
  "Economic",
  "Social",
  "Security",
  "Innovation",
  "Medical",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const { language } = useContext(LanguageContext);

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-white dark:bg-gray-900 min-h-screen py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Projects / Проєкти
      </h1>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-2 rounded-full border text-sm font-medium ${
            selectedCategory === "All"
              ? "bg-black text-white"
              : "bg-white text-black dark:bg-gray-800 dark:text-white"
          }`}
        >
          All / Всі
        </button>
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-medium ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-white text-black dark:bg-gray-800 dark:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {language === "uk" ? project.title_uk : project.title_en}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {language === "uk"
                ? project.description_uk
                : project.description_en}
            </p>
          </div>
        ))}
      </div>

      {/* МОДАЛЬНЕ ВІКНО */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-2xl w-full relative shadow-lg"
            >
              <button
                className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-2xl"
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {language === "uk"
                  ? selectedProject.title_uk
                  : selectedProject.title_en}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
                {language === "uk"
                  ? selectedProject.description_uk
                  : selectedProject.description_en}
              </p>

              {selectedProject.location && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  <strong>{language === "uk" ? "Локація" : "Location"}:</strong>{" "}
                  {selectedProject.location}
                </p>
              )}

              {selectedProject.pdf_link && (
                <a
                  href={selectedProject.pdf_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  {language === "uk" ? "Переглянути PDF" : "View PDF"}
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
