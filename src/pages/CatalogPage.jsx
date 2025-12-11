import { useState } from "react";
import allItems from "../data/allItems";
import ProductCard from "../components/ProductCard";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function CatalogPage() {
  const [filtered] = useState(allItems);

  return (
    <div className="bg-gray-300 w-full relative">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          Catalog / Каталог
        </h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Кнопка прокрутки вгору */}
      <ScrollToTopButton />
    </div>
  );
}
