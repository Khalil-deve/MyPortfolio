import ProfessionalSkill from "./ProfessionalSkill";
import TechnicalSkill from "./TechnicalSkill";

export default function SkillContainer () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <TechnicalSkill />
            <ProfessionalSkill />
        </div>
    )
}