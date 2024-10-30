import React, { useRef, useEffect, useState } from "react";
import Morphism from "./reusable-components/morphism";
import Marquee from "react-fast-marquee";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const animateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    if (animateRef.current) {
      observer.observe(animateRef.current);
    }

    return () => {
      if (animateRef.current) {
        observer.unobserve(animateRef.current);
      }
    };
  }, []);

  return (
    <section id="skills">
      <div
        ref={animateRef}
        className={` ${isVisible ? "opacity-100" : "opacity-0"} flex h-[calc(100vh-2rem)] max-h-[600px] flex-col items-center justify-center transition-all duration-700 ease-in`}
      >
        <div className="relative w-full flex-col items-center justify-center">
          <div
            className={`${isVisible ? "sm:shadow-lg" : "sm:shadow-none"} container m-auto w-full rounded-none shadow-none transition-all duration-1000 ease-in-out sm:rounded-md sm:shadow-white md:w-11/12 xl:w-3/4`}
          >
            <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform">
              <h1 className="text-5xl font-semibold tracking-[0.5em] text-white/20 blur-sm md:text-7xl lg:text-8xl xl:text-9xl">
                SKILLS
              </h1>
            </div>
            <div>
              <Marquee
                autoFill
                className="overflow-hidden py-6"
                direction="right"
                speed={30}
              >
                <Morphism imgSrc="/svg/html5.svg" imgTitle="HTML" />
                <Morphism imgSrc="/svg/css3.svg" imgTitle="CSS" />
                <Morphism imgSrc="/svg/javascript.svg" imgTitle="JAVASCRIPT" />
                <Morphism imgSrc="/svg/typescript.svg" imgTitle="TYPESCRIPT" />
                <Morphism imgSrc="/svg/react.svg" imgTitle="REACT" />
                <Morphism imgSrc="/svg/nextjs.svg" imgTitle="NEXT.JS" />
                <Morphism imgSrc="/svg/tailwind.svg" imgTitle="TAILWIND" />
              </Marquee>
            </div>
            <div>
              <Marquee
                autoFill
                className="overflow-hidden py-6"
                direction="left"
                speed={30}
              >
                <Morphism imgSrc="/svg/bootstrap.svg" imgTitle="BOOTSTRAP" />
                <Morphism imgSrc="/svg/materialui.svg" imgTitle="MATERIALUI" />
                <Morphism imgSrc="/svg/figma.svg" imgTitle="FIGMA" />
                <Morphism imgSrc="/svg/adobep.svg" imgTitle="PHOTOSHOP" />
                <Morphism imgSrc="/svg/canva.svg" imgTitle="CANVA" />
                <Morphism imgSrc="/svg/csharp.svg" imgTitle="C#" />
                <Morphism imgSrc="/svg/php.svg" imgTitle="PHP" />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
