import TechnologyUsed from "./TechnologyUsed";

export default function SkillSection() {
    return (
        <section id="skills" className="pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* <h2 className="text-3xl font-bold text-center mb-12">My <span className="text-indigo-600">Skills</span></h2> */}
                {/* <SkillContainer /> */}
                <TechnologyUsed />
            </div>
        </section>
    )
}