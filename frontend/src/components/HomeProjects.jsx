import { useState } from "react";
import {projects} from '../data/Projects'
//import { useNavigate } from "react-router";
export default function HomeProjects() {
  const [active, setActive] = useState(0);

 
  const totalItems = 3;
  const renderMobileCard = () => {
  if (active === 0)
    return <PreviewCard project={projects[0]} className="" />;

  if (active === 1)
    return <PreviewCard project={projects[1]} className="" />;

  return <ViewMoreCard onClick={handleViewmoreClick} className="" />;
};

  const prev = () => setActive((i) => Math.max(i - 1, 0));
  const next = () => setActive((i) => Math.min(i + 1, totalItems - 1));
  //const navigate = useNavigate()
  const visible = [];
  
 
  if (active === 0) {
    visible.push(null); // No left card
    visible.push({ type: "project", data: projects[0], position: "center" });
    visible.push({ type: "project", data: projects[1], position: "right" });
  } else if (active === 1) {
    visible.push({ type: "project", data: projects[0], position: "left" });
    visible.push({ type: "project", data: projects[1], position: "center" });
    visible.push({ type: "viewmore", position: "right" });
  } else if (active === 2) {
    visible.push({ type: "project", data: projects[1], position: "left" });
    visible.push({ type: "viewmore", position: "center" });
    visible.push(null); // No right card
  }

  function handleViewmoreClick() {
    console.log("navigate to projects")
  // navigate('/projects')
  }

  return (
    <section className="bg-black text-white py-24 px-6 sm:px-14 overflow-hidden">
      {/* Header */}
      <div className="mb-14">
        <h2 className="text-4xl sm:text-5xl tracking-[0.25em] opacity-40">
          PROJECTS
        </h2>
        <p className="text-gray-400 mt-4">
          A glimpse of what our team has been building
        </p>
      </div>

{/* Carousel */}
<div className="relative flex items-center justify-center">

  {/* Shared positioning container */}
  <div className="relative w-full max-w-[800px] h-[420px] flex items-center justify-center">

    {/* LEFT ARROW */}
    <button
      onClick={prev}
      disabled={active === 0}
      className="
        absolute left-2 sm:-left-14
        top-1/2 -translate-y-1/2
        z-30
        w-11 h-11
        rounded-full
        bg-white/10 backdrop-blur-md
        border border-white/20
        flex items-center justify-center
        text-xl
        hover:bg-white/20 hover:scale-110
        transition-all duration-300
        disabled:opacity-30 disabled:cursor-not-allowed
      "
    >
      &#8249;
    </button>

    {/* CARDS */}
    <div className="relative w-full h-full">

      {/* Mobile */}
      <div className="sm:hidden flex items-center justify-center h-full">
        {renderMobileCard()}
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex absolute inset-0 items-center justify-center">
        {visible.map((item, i) => {
          if (!item) return null;

          const positionClass =
            item.position === "left"
              ? "-translate-x-[360px] scale-90 opacity-50 z-10"
              : item.position === "center"
              ? "translate-x-0 scale-100 opacity-100 z-20"
              : "translate-x-[360px] scale-90 opacity-50 z-10";

          return item.type === "viewmore" ? (
            <ViewMoreCard
              key={`view-more-${i}`}
              className={positionClass}
              onClick={handleViewmoreClick}
            />
          ) : (
            <PreviewCard
              key={item.data.id}
              project={item.data}
              className={positionClass}
            />
          );
        })}
      </div>
    </div>

    {/* RIGHT ARROW */}
    <button
      onClick={next}
      disabled={active === totalItems - 1}
      className="
        absolute right-2 sm:-right-14
        top-1/2 -translate-y-1/2
        z-30
        w-11 h-11
        rounded-full
        bg-white/10 backdrop-blur-md
        border border-white/20
        flex items-center justify-center
        text-xl
        hover:bg-white/20 hover:scale-110
        transition-all duration-300
        disabled:opacity-30 disabled:cursor-not-allowed
      "
    >
      &#8250;
    </button>

  </div>
</div>

    </section>
  );
}

/*  Cards  */

function PreviewCard({ project, className }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        w-[340px] h-[350px]
        rounded-2xl
        bg-white/5 backdrop-blur-md
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        transition-all duration-700 ease-out
        cursor-pointer
        block
        hover:shadow-[0_30px_90px_rgba(124,58,237,0.25)]
        ${className}
      `}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-t-2xl h-[280px] group">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full h-full object-cover
            opacity-60 scale-105
            group-hover:opacity-100
            group-hover:scale-110
            transition-all duration-700
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
          <h3
            className="
              text-white text-xl tracking-widest text-center px-4
              transition-all duration-500
              group-hover:-translate-y-4
            "
          >
            {project.title}
          </h3>
        </div>
      </div>

      {/* Tags Section */}
      <div
        className="
          flex flex-wrap gap-3
          px-4 pb-5 pt-4
          text-orange-400 text-xs tracking-wide
        "
      >
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
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
    </a>
  );
}

function ViewMoreCard({ onClick, className }) {
  return (
    <div
      onClick={onClick}
      className={`
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        w-[340px] h-[360px]
        rounded-2xl cursor-pointer
        bg-gradient-to-br from-purple-600/30 to-pink-600/30
        border border-white/20
        backdrop-blur-md
        flex items-center justify-center
        transition-all duration-700 ease-out
        hover:scale-95
        ${className}
      `}
    >
      <span className="text-xl tracking-widest">VIEW MORE →</span>
    </div>
  );
}