const technologies = [
  { name: "HTML5", iconClass: "fab fa-html5", color: "text-orange-500" },
  { name: "CSS3", iconClass: "fab fa-css3-alt", color: "text-blue-500" },
  { name: "JavaScript", iconClass: "fab fa-js", color: "text-yellow-500" },
  { name: "TypeScript", iconClass: "fas fa-code", color: "text-blue-600" }, 
  { name: "React", iconClass: "fab fa-react", color: "text-blue-400" },
  { name: "Next.js", iconClass: "fab fa-react", color: "text-black" }, 
  { name: "Tailwind CSS", iconClass: "fas fa-wind", color: "text-sky-400" }, 
  { name: "Node.js", iconClass: "fab fa-node-js", color: "text-green-500" },
  { name: "Express.js", iconClass: "fas fa-server", color: "text-gray-700" }, 
  { name: "MongoDB", iconClass: "fas fa-database", color: "text-green-600" },
  { name: "MySQL", iconClass: "fas fa-database", color: "text-blue-700" },
  { name: "Git", iconClass: "fab fa-git-alt", color: "text-orange-600" },
  { name: "Bootstrap", iconClass: "fab fa-bootstrap", color: "text-purple-500" },
];


export default function TechnologyUsed() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Technologies I Work With
        </h3>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Here are the tools and technologies I use to bring ideas to life.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition"
            >
              <div className={`${tech.color} text-5xl mb-4`}>
                <i className={tech.iconClass}></i>
              </div>
              <span className="text-sm font-medium text-gray-700 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}