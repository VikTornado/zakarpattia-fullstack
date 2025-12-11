import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const data = [
  { name: "Mechanical engineering", value: 32.8 },
  { name: "Textile production", value: 8.9 },
  { name: "Production of food, beverages", value: 8.9 },
  { name: "Wood product manufacturing", value: 4.9 },
  { name: "Chemicals production", value: 3.3 },
  { name: "Rubber and plastic products", value: 1.9 },
  { name: "Finished metal products", value: 1.1 },
];

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#8dd1e1",
  "#a4de6c",
  "#d0ed57",
];

function Industry() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen pt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Industry in Zakarpattia Region (2024)
      </h1>

      <p className="mb-4 text-lg text-center max-w-3xl mx-auto">
        The industrial sector in Zakarpattia plays a significant role in the
        regional economy. In 2024, the total volume of industrial products sold
        in the region amounted to <strong>40.2 billion UAH</strong>. The
        following chart illustrates the structure of industrial production by
        main categories.
      </p>

      <div className="flex flex-col items-center justify-center mt-12 mb-12 p-8">
        <PieChart width={420} height={420}>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={140}
            label={({ name }) => name}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default Industry;
