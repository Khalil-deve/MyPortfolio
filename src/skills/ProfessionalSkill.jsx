export default function ProfessionalSkill() {
    const skills = [
        { name: 'Problem Solving', percentage: 80 },
        { name: 'Teamwork', percentage: 85 },
        { name: 'Communication', percentage: 80 },
        { name: 'Project Management', percentage: 75 }
    ];

    const SkillArray = Array.from({length: 4}).map((element, index) =>{
        return (
            <div key={index}>
                <div className="flex justify-between mb-1">
                    <span>{skills[index].name}</span>
                    <span>{skills[index].percentage}%</span>
                </div>
                <div className="skill-bar">
                    <div className="skill-progress" style={{width: `${skills[index].percentage}%`}}></div>
                </div>
            </div>
        )
    })
    // Professional skills section
    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">Professional Skills</h3>
            <div className="space-y-4">
                {SkillArray}
            </div>
        </div>
    )
}