import React, { useRef, useEffect, useState } from "react";

export default function About() {
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
    <section
      id="about"
      className="bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    >
      <div className="m-auto flex h-full max-h-[800px] overflow-hidden lg:container xl:h-[calc(100vh-2rem)]">
        <div
          className={`${isVisible ? "opacity-100" : "opacity-0"} relative flex items-center justify-around transition-all duration-700 ease-in`}
          ref={animateRef}
        >
          {/* div 1 */}
          <div className="absolute flex h-full w-full items-start justify-start md:relative md:w-3/4 md:items-end md:justify-end lg:w-3/4 xl:w-1/2 2xl:w-1/2">
            <img
              src={`${process.env.PUBLIC_URL}/myimg/about-img.png`}
              alt="About Section of Kyle R. Burdeos, a passionate Software Developer specializing in Frontend Development"
              className={` ${isVisible ? "translate-x-0" : "-translate-x-10"} absolute bottom-0 -ml-16 h-[97%] w-auto drop-shadow-[-15px_0px_10px_rgba(0,0,0,0.5)] transition-all duration-700 ease-in-out sm:-ml-0 md:h-[97%]`}
            />
          </div>
          {/* div2 */}
          <div className="relative h-full w-full py-20 pr-4 sm:p-16 sm:pr-10 md:p-28 md:pb-20 md:pl-6 md:pr-16 lg:p-36 lg:pb-16 lg:pl-10 xl:p-36 xl:pl-10 2xl:py-28 2xl:pl-16 2xl:pr-72">
            <h1 className="mb-2 text-right text-5xl font-semibold tracking-tight text-neutral-700 md:text-5xl lg:text-5xl xl:text-6xl">
              About Me
            </h1>
            <div className="pl-24 sm:pl-40 md:pl-0">
              <p className="w-full text-right text-xs leading-6 tracking-normal text-neutral-700 sm:text-justify sm:text-sm md:text-sm lg:text-sm xl:text-lg">
                Hi, I'm{" "}
                <span className="text-md font-bold">Kyle R. Burdeos</span>, I’m
                a passionate software developer with a year of experience in
                building responsive and user-friendly websites. My expertise
                lies in front-end development, utilizing technologies such as
                HTML, CSS, and JavaScript to create seamless digital
                experiences. I hold a degree in Bachelor of Science in
                Information Technology (BSIT), which has provided me with a
                solid foundation in coding principles and modern development
                practices. I'm driven by a desire to continuously improve my
                skills and contribute to innovative projects in the tech
                industry. I’m eager to collaborate with teams or take on
                individual projects that challenge me to grow and expand my
                knowledge in web development and beyond.
              </p>
            </div>
            <div className="mt-6 lg:mt-10">
              <div className="flex items-center justify-end gap-3.5">
                <a
                  href={`${process.env.PUBLIC_URL}/pdf/my-cv.pdf`}
                  download="Kyle Burdeos CV 2024"
                  className="rounded-md border border-amber-500 bg-amber-700 p-2 text-xs font-medium text-white hover:bg-amber-800 md:text-xs lg:text-sm xl:text-base"
                >
                  Download CV
                </a>

                <a
                  href="#skills"
                  className="rounded-md border border-amber-500 bg-transparent p-2 text-xs font-medium text-amber-700 hover:bg-amber-800 hover:text-white md:text-xs lg:text-sm xl:text-base"
                >
                  MY SKILLS
                </a>
              </div>
            </div>

            <div className="mt-0 flex justify-end lg:mt-4 2xl:mt-2">
              <div className="flex flex-col items-center justify-center rounded-sm p-2">
                <img
                  alt="Kyle Burdeos Dev Logo"
                  src={`${process.env.PUBLIC_URL}/myimg/my-logo.png`}
                  draggable={false}
                  className="w-[120px] sm:w-[160px]"
                />
                <div className="relative">
                  <h1 className="text-end font-mono text-xs font-light italic tracking-wider md:text-sm lg:text-sm xl:text-base">
                    Kyle R. Burdeos
                  </h1>
                  <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-6">
                    <img
                      src={`${process.env.PUBLIC_URL}/myimg/about-signature.png`}
                      width={60}
                      alt="Kyle Burdeos Electronic Signature"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            {/* marquee */}
            {/* <div className="mt-6">
              <div className="grid">
                <Marquee gradient pauseOnHover gradientWidth={50} speed={25}>
                  {iconData.map((icon, index) => (
                    <div
                      className={`my-2 flex h-20 w-20 px-4 hover:scale-110`}
                      dangerouslySetInnerHTML={{ __html: icon.svg }}
                    />
                  ))}
                </Marquee>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
