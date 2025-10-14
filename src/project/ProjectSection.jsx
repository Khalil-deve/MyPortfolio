import { useState } from "react";
import ProjectList from "./ProjectList";

export default function ProjectSection() {
  const [showAll, setShowAll] = useState(false);
  
  return (
    <section id="projects" className="pb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">My <span className="text-indigo-600">Projects</span></h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience in web development.
        </p>
        
        <ProjectList showAll={showAll} />
        
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition duration-300"
          >
            {showAll ? (
              <>
                Show Less <i className="fas fa-arrow-up ml-2"></i>
              </>
            ) : (
              <>
                View All Projects <i className="fas fa-arrow-down ml-2"></i>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}