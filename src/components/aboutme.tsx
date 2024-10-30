import React, { useRef, useEffect, useState } from "react";
import PsychologyIcon from "@mui/icons-material/Psychology";

export default function Aboutme() {
  return (
    <section
      className="bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:16px_16px]"
      id="about"
    >
      <div className="container m-auto w-full px-2 pt-2 sm:pt-20 md:px-6 lg:w-5/6 xl:w-4/6 2xl:w-3/6">
        <div className="flex min-h-[70vh] sm:min-h-[80vh]">
          {/* set */}
          <div className="relative h-auto w-full">
            <div className="absolute bottom-0 left-0 w-full sm:w-3/6">
              <img
                src="/aboutme.png"
                className="-ml-20 w-[200px] drop-shadow-[-15px_0px_10px_rgba(0,0,0,0.5)] sm:ml-0 md:w-[250px] xl:w-[280px]"
                draggable={false}
              />
              <div className="absolute bottom-0 right-0 opacity-60 sm:bottom-20 sm:opacity-100 md:-right-12 lg:bottom-20 xl:bottom-36">
                {/* logo, name and signature */}
                <div className="bg-whit mb-10 mt-0 rounded-lg sm:mb-0">
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

            <div className="absolute right-0 top-0 h-auto w-full sm:w-3/6">
              <div className="mb-4 md:mb-12">
                <h1 className="text-right text-5xl font-semibold tracking-tight text-neutral-700">
                  About Me
                </h1>
              </div>
              <div className="pl-24 sm:pl-0">
                <p className="text-right text-xs text-neutral-700 sm:text-sm md:text-base">
                  Hi, I'm <span className="font-bold">Kyle R. Burdeos</span>,
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
                <div className="flex items-center justify-end gap-3.5">
                  <a
                    href="cv/myresume.pdf"
                    download="Kyle Burdeos CV 2024"
                    className="rounded-md border border-amber-500 bg-amber-700 p-2 text-xs font-medium text-white hover:bg-amber-800 md:text-sm lg:text-sm xl:text-base 2xl:text-base"
                  >
                    Download CV
                  </a>

                  <a
                    href="#skills"
                    className="rounded-md border border-amber-500 bg-transparent p-2 text-xs font-medium text-amber-700 hover:bg-amber-800 hover:text-white md:text-sm lg:text-sm xl:text-base 2xl:text-base"
                  >
                    MY SKILLS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
