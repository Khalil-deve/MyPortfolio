export default function ProjectCard({ projectData }) {
  return (
    <div className="project-card bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] h-full flex flex-col">
      <div className="h-48 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
        <img
          src={projectData.image}
          alt={projectData.title}
          className="w-auto h-auto object-cover"
        />
      </div>

      {/* Content area that grows to fill remaining space */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{projectData.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{projectData.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {projectData.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 mt-auto"> {/* mt-auto pushes links to bottom */}
          <a
            href={projectData.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 transition-colors"
          >
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
          <a
            href={projectData.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 font-medium flex items-center gap-1 transition-colors"
          >
            <i className="fab fa-github"></i> Source Code
          </a>
        </div>
      </div>
    </div>
  );
}