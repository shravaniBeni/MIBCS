
import ProjectCard from "../components/ProjectCard";
import {projects} from "../data/Projects"

export default function Projects() {
  return (
    <section
      className="
        min-h-screen bg-black text-white
        px-4 sm:px-10 lg:px-16
        py-16 sm:py-20
        flex flex-col
      "
    >
      {/* Header */}
      <div className="mb-10 sm:mb-16">
        <h1
          className="
            text-4xl sm:text-6xl md:text-7xl
            tracking-[0.25em] opacity-40
          "
        >
          PROJECTS
        </h1>
        <p className="max-w-xl mt-4 sm:mt-6 text-gray-400 text-sm sm:text-base">
          Our projects are a showcase of our passion and expertise.
        </p>
      </div>

      {/* Grid */}
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 w-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
