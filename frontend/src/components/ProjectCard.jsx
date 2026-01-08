import { useEffect, useRef, useState } from "react";

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
      `}
    >
      {/* Card */}
      <div
        className="
          m-10
          group cursor-pointer
          rounded-2xl
          bg-white/5 backdrop-blur-md
          border border-white/10
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
          transition-all duration-500 ease-out
          hover:-translate-y-3
          hover:shadow-[0_30px_90px_rgba(124,58,237,0.25)]
        "
      >
        {/* Image */}
        <div
          className="
            relative overflow-hidden rounded-2xl 
            h-[260px] sm:h-[340px] lg:h-[350px]
           
          "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
              w-full h-full object-cover
              opacity-60 scale-105
              group-hover:opacity-100
              group-hover:scale-110
              transition-all duration-700 ease-out
            "
          />

          {/* Glow overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-tr
              from-purple-500/10 via-transparent to-pink-500/10
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-500
            "
          />

          {/* Title overlay */}
          <div
            className="
              absolute inset-0 flex items-center justify-center
              transition-all duration-500
              group-hover:opacity-0
            "
          >
            <h2
              className="
                text-white text-lg sm:text-xl lg:text-3xl
                tracking-widest text-center px-4
                transition-all duration-500
                group-hover:-translate-y-4
              "
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* Tags */}
        <div
          className="
            flex flex-wrap gap-3 sm:gap-5
            px-4 pb-5 pt-4
            text-orange-400 text-xs sm:text-sm tracking-wide
          "
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                flex items-center gap-1
                transition-transform duration-300
                hover:translate-x-1
              "
            >
              ✔ {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;