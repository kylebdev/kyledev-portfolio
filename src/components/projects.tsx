import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive portfolio to showcase my projects and skills.",
    src: "/video/hlights-portfolio.mp4",
    tech: ["React-Typescript", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Dungeon Brains",
    description:
      "A game based mobile learning application for pupils using problem-posing strategy.",
    src: "",
    tech: ["Unity", "C#"],
    link: "#",
    github: "#",
  },
  // {
  //   id: 3,
  //   title: "Performance Monitoring System",
  //   description:
  //     "Is a web-based information system designed to improve the Schools Division of Davao City's progress through monthly monitoring of actual work performance.",
  //   src: "/profile.png",
  //   tech: ["Html", "Bootstrap CSS", "php"],
  //   link: "#",
  //   github: "#",
  // },
  // {
  //   id: 4,
  //   title: "Reusable Components",
  //   description:
  //     "An independent pieces of coude that can be reused throughout the pages to maintain consistency and save time and effort.",
  //   src: "/profile.png",
  //   tech: ["React", "Tailwind CSS"],
  //   link: "#",
  //   github: "https://github.com/yourgithub/portfolio",
  // },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const animateRef = useRef<HTMLDivElement>(null);

  // for transition
  useEffect(() => {
    const currentElement = animateRef.current; // Store the ref value in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // console.log("Intersecting:", entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section id="project">
      <div className="bg-black py-8 md:py-24">
        <div
          ref={animateRef}
          className={`${isVisible ? "opacity-100" : "opacity-0"} container m-auto px-6 transition-all duration-700 ease-in md:px-10`}
        >
          <div className="mb-10">
            <h1 className="text-center text-5xl font-semibold text-white md:text-5xl 2xl:text-6xl">
              PROJECTS
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`scale-100 rounded-lg border-2 border-neutral-900 bg-gradient-to-r from-black/30 to-white/30 transition duration-700 ease-out hover:scale-105 hover:shadow-lg hover:shadow-white`}
              >
                <video className="z-10 h-52 w-full" autoPlay controls>
                  <source
                    src={`${process.env.PUBLIC_URL}` + project.src}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div className="p-4">
                  <h1 className="text-start text-xl font-semibold tracking-tighter text-white/70">
                    {project.title}
                  </h1>
                  <div className="mt-2">
                    <p className="text-justify text-sm tracking-normal text-white/50">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap justify-start gap-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded border border-amber-500 bg-amber-700/10 px-2 py-1 text-xs font-medium text-white hover:bg-amber-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-thin tracking-tight text-white/70 hover:text-white/50"
                    >
                      Repository
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-thin tracking-tight text-white/70 hover:text-white/50"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
