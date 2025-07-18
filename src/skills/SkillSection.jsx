import SkillContainer from "./SkillContainer";
import TechnologyUsed from "./TechnologyUsed";

export default function SkillSection() {
    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">My <span className="text-indigo-600">Skills</span></h2>
                <SkillContainer />
                <TechnologyUsed />
            </div>
        </section>
    )
}