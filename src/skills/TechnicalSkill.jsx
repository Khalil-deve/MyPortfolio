import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export const technicalSkills = [
  { name: "HTML", color: "#F1502F", percentage: 10 },
  { name: "CSS", color: "#264DE4", percentage: 10 },
  { name: "JavaScript", color: "#F7DF1E", percentage: 9 },
  { name: "TypeScript", color: "#007ACC", percentage: 8 },
  { name: "Tailwind CSS", color: "#38BDF8", percentage: 9 },
  { name: "Bootstrap", color: "#563D7C", percentage: 9 },
  { name: "React.js", color: "#61DBFB", percentage: 9 },
  { name: "Next.js", color: "#000000", percentage: 8 },
  { name: "Node.js", color: "#68A063", percentage: 9 },
  { name: "Express.js", color: "#333333", percentage: 8 },
  { name: "MongoDB", color: "#4DB33D", percentage: 6 },
  { name: "SQL", color: "#003B57", percentage: 6 },
  { name: "Git & GitHub", color: "#F05032", percentage: 8 },
  { name: "WordPress", color: "#21759B", percentage: 6 },
];

// Custom Tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-700 border border-gray-700 rounded-lg p-2 text-center shadow-lg">
        <p className="text-white font-semibold">{payload[0].name}</p>
        <p className="text-gray-300">{`${payload[0].value}/10`}</p>
      </div>
    );
  }
  return null;
};

export default function TechnicalSkill() {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-semibold">
        Technical Skills
      </h3>

      {/* Recharts Donut Chart */}
      <div className="w-full max-w-md h-51">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={technicalSkills}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={2}
              dataKey="percentage"
              nameKey="name"
            >
              {technicalSkills.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  stroke="none"
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4 text-sm">
        {technicalSkills.map((skill, i) => (
          <div key={i} className="flex md:items-center items-start space-x-2">
            <span
              className="w-4 h-4 rounded-full"
              style={{ background: skill.color }}
            ></span>
            <span className="text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}