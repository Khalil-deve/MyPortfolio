import ProjectCard from "./ProjectCard";
import ProjectData from "../ProjectData";

export default function ProjectList({ showAll }) {
  // Determine how many projects to show initially
  const initialProjectsCount = 3;
  const projectsToShow = showAll ? ProjectData : ProjectData.slice(0, initialProjectsCount);

  const projectCards = projectsToShow.map((project, index) => (
    <ProjectCard key={index} projectData={project} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectCards}
    </div>
  );
}