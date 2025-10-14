export default function ProjectCard({ projectData }) {
  // fallback palette when tagsColor is missing or shorter than tags
  const fallbackColors = [
    '#61DBFB', '#68A063', '#4DB33D', '#F7DF1E', '#F1502F', '#FF6384', '#38BDF8', '#563D7C'
  ];

  function readableTextColor(hex) {
    if (!hex) return '#fff';
    const c = hex.replace('#', '');
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return luminance > 0.6 ? '#000' : '#fff';
  }

  return (
    <div className="project-card bg-gray-500 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] h-full flex flex-col">
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={projectData.image}
          alt={projectData.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content area that grows to fill remaining space */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-200">
          {projectData.title}
        </h3>
        <p className="text-gray-300 mb-4 flex-grow">
          {projectData.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {projectData.tags.map((tag, index) => {
            const color = (projectData.tagsColor && projectData.tagsColor[index]) || fallbackColors[index % fallbackColors.length];
            const textColor = readableTextColor(color);
            return (
              <span
                key={index}
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ backgroundColor: color, color: textColor }}
              >
                {tag}
              </span>
            );
          })}
        </div>


        <div className="flex space-x-4 mt-auto">
          {" "}
          {/* mt-auto pushes links to bottom */}
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
            className="text-white font-medium flex items-center gap-1 transition-colors"
          >
            <i className="fab fa-github"></i> Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
