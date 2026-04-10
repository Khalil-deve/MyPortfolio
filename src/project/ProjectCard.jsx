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
    <div className="project-card bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full flex flex-col group backdrop-blur-sm">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={projectData.image}
          alt={projectData.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3 flex flex-wrap gap-2">
          {projectData.tags.map((tag, index) => {
            const color = (projectData.tagsColor && projectData.tagsColor[index]) || fallbackColors[index % fallbackColors.length];
            const textColor = readableTextColor(color);
            return (
              <span
                key={index}
                className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md font-bold shadow-sm"
                style={{ backgroundColor: color, color: textColor }}
              >
                {tag}
              </span>
            );
          })}
        </div>

        <h3 className="text-xl font-bold mb-3 text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors duration-300">
          {projectData.title}
        </h3>
        <p className="text-[var(--text-muted)] mb-6 flex-grow leading-relaxed line-clamp-3">
          {projectData.description}
        </p>


        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border-color)]">
          <a
            href={projectData.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-[var(--accent-light)] transition-all duration-300"
          >
            <span className="bg-[var(--accent)]/10 p-2 rounded-full">
              <i className="fas fa-external-link-alt text-xs"></i>
            </span>
            Live Demo
          </a>
          <a
            href={projectData.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-[var(--text-main)] hover:text-[var(--accent)] transition-all duration-300"
          >
            <span className="bg-[var(--text-muted)]/10 p-2 rounded-full">
              <i className="fab fa-github text-sm"></i>
            </span>
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
