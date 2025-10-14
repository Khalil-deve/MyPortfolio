import ExtraTool from "./ExtraTool";
import TechnicalSkill from "./TechnicalSkill";

const professionalSkills = [
  { name: 'Problem Solving', percentage: 60 },
  { name: 'Teamwork', percentage: 85 },
  { name: 'Communication', percentage: 70 },
  { name: 'Project Management', percentage: 75 }
];

function PieChart({ percentage, size = 70, stroke = 12, color = '#667eea' }) {
  const radius = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={radius} stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} fill="none" />
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        fill="none"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize="14" fontWeight="600">
        {percentage}%
      </text>
    </svg>
  );
}

export default function TechnologyUsed() {
  return (
    <div className="py-12 md:px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">
          Technologies <span className="text-indigo-600">I Work With</span>
        </h3>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Here are the tools and technologies I use to bring ideas to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="p-6 bg-white/5 rounded-xl shadow-sm">
            <TechnicalSkill />
          </div>

          <div>
            <div className="p-6 bg-white/5 rounded-xl shadow-sm mb-6 md:mb-2 xl:mb-2">
              <h4 className="text-lg font-semibold mb-4">Professional Skills</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {professionalSkills.map((s, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <PieChart percentage={s.percentage} color={["#667eea", "#7c3aed", "#06b6d4", "#f97316"][i % 4]} />
                    <div>
                      <div className="font-medium text-white">{s.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-white/5 rounded-xl shadow-sm">
              <ExtraTool />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}