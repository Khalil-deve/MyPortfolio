export default function TechnicalSkill() {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 85 },
    { name: "React.js", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "Express.js", percentage: 70 },
    { name: "MongoDB", percentage: 75 },
    { name: "Git & GitHub", percentage: 85 },
    { name: "WordPress", percentage: 80 },
  ];
  const SkillArray = Array.from({ length: 5 }).map((element, index) => {
    return (
      <div key={index}>
        <div className="flex justify-between mb-1">
          <span>{skills[index].name}</span>
          <span>{skills[index].percentage}%</span>
        </div>
        <div className="skill-bar">
          <div
            className="skill-progress"
            style={{ width: `${skills[index].percentage}%` }}
          ></div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
      <div className="space-y-4">{SkillArray}</div>
    </div>
  );
}
