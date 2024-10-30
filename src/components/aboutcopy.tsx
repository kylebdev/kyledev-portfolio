import React, { useRef, useEffect, useState } from "react";
import PsychologyIcon from "@mui/icons-material/Psychology";

export default function AboutCopy() {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  // animation fade in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="about">
      <div className="relative flex min-h-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] sm:min-h-[80vh] 2xl:min-h-[90vh]">
        <div
          ref={ref}
          className={`flex w-full flex-col items-center justify-center transition-all duration-700 ease-in md:flex-row ${
            isVisible ? "translate-x-0 opacity-100" : "opacity-0"
          }`}
        >
          {/* page 1 */}
          <div className="block h-[100vh] w-[100%] rounded-lg border-r-8 border-none border-neutral-950 border-opacity-10 bg-opacity-0 shadow-none sm:h-[70vh] sm:rounded-s-3xl sm:border-dashed sm:bg-[#dedede] sm:bg-opacity-60 sm:shadow-2xl md:w-[48%] lg:w-[48%] xl:w-5/12 2xl:w-2/6">
            <div className="relative flex h-full w-full flex-row">
              {/* page 1- 1st width */}
              <div className="w-full md:w-[100%] lg:w-[50%] xl:w-[55%]">
                {/* about photo */}
                <div className="item-start relative flex h-full w-full justify-start lg:justify-end">
                  <img
                    src="/aboutme.png"
                    className="absolute bottom-0 -mx-24 h-[93%] w-auto drop-shadow-[-15px_0px_10px_rgba(0,0,0,0.5)] sm:-mx-0 md:h-[95%] lg:h-[95%] xl:h-[97%] 2xl:h-[100%]"
                    draggable={false}
                  ></img>
                </div>
                <img />
              </div>
              {/* page 1- 2nd width */}
              <div className="absolute h-full w-full sm:w-[50%] md:w-[100%] lg:relative lg:w-[50%] xl:w-[45%]">
                <div className="flex h-full flex-col items-end justify-end text-center sm:justify-center md:items-end lg:items-start 2xl:items-center">
                  {/* logo, name and signature */}
                  <div className="mb-10 mt-0 rounded-lg sm:mb-0 md:mt-32">
                    <img width={200} src="/mylogo.png" draggable={false}></img>
                    <div className="relative">
                      <h1 className="text-center font-mono text-base font-light italic tracking-wider">
                        Kyle R. Burdeos
                      </h1>
                      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-6">
                        <img src="/signature.png" width={60}></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* page 2 */}
          <div
            className={`absolute h-[100vh] w-[100%] sm:relative sm:h-[70vh] md:w-[48%] lg:w-[48%] xl:w-5/12 2xl:w-2/6`}
          >
            <div className="h-full w-full rounded-lg bg-opacity-0 bg-none p-4 shadow-none sm:rounded-r-3xl sm:bg-[#dedede] sm:bg-opacity-60 sm:shadow-2xl md:p-6 lg:p-10 2xl:p-16">
              <div className="mb-16 md:mb-12 lg:mb-8 xl:mb-10 2xl:mb-8">
                <h1 className="text-right text-5xl font-semibold tracking-tight text-neutral-950 sm:text-center md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
                  About Me
                </h1>
              </div>
              <div className="pl-32 sm:pl-0">
                <p className="text-right text-xs leading-6 tracking-normal text-inherit sm:text-justify sm:text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-lg">
                  Hi, I'm{" "}
                  <span className="text-md font-bold">Kyle R. Burdeos</span>,
                  I’m a passionate software developer with a year of experience
                  in building responsive and user-friendly websites. My
                  expertise lies in front-end development, utilizing
                  technologies such as HTML, CSS, and JavaScript to create
                  seamless digital experiences. I hold a degree in Bachelor of
                  Science in Information Technology (BSIT), which has provided
                  me with a solid foundation in coding principles and modern
                  development practices. I'm driven by a desire to continuously
                  improve my skills and contribute to innovative projects in the
                  tech industry. I’m eager to collaborate with teams or take on
                  individual projects that challenge me to grow and expand my
                  knowledge in web development and beyond.
                </p>
              </div>
              <div className="mt-6 md:mt-12 lg:mt-8 xl:mt-8 2xl:mt-12">
                <div className="flex items-center justify-evenly">
                  <a
                    href="cv/myresume.pdf"
                    download="Kyle Burdeos CV 2024"
                    className="rounded-md border border-amber-500 bg-amber-700 p-2 text-xs text-white duration-300 hover:bg-amber-800 md:text-sm lg:text-sm xl:text-base 2xl:text-base"
                  >
                    Download CV
                  </a>
                  <div className="relative ml-6">
                    <a href="#skills">
                      <PsychologyIcon
                        sx={{
                          fontSize: "45px",
                        }}
                        className="rounded-lg bg-black bg-opacity-10 text-amber-700 hover:bg-opacity-20"
                      />
                    </a>
                    <span className="absolute -top-1/3 left-0 font-mono text-xs font-extrabold tracking-wider text-amber-700 text-opacity-50 hover:text-opacity-100">
                      SKILLS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
