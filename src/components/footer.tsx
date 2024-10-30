import React from "react";

export default function Footer() {
  return (
    <footer className="rounded-t-2xl bg-white/30 py-6 shadow-inner shadow-white md:py-6">
      <div className="container relative mx-auto flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-around">
        {/*          */}
        {/* display when responsiveness min of 768px */}
        {/* Copyright Section */}
        <div className="block pt-6 lg:hidden lg:pt-0">
          <p className="text-xs tracking-widest text-neutral-950">
            &copy; All Rights Reserved By
            <a href="#home">
              <span className="font-semibold text-opacity-100">
                {" "}
                Kyle Burdeos{" "}
              </span>
            </a>
          </p>
        </div>

        {/* Logo and Tech Stack */}
        <div className="flex flex-col items-center justify-center">
          <img src="/mylogo.png" width={120} alt="Logo" draggable={false} />
          <p className="text-xs">
            Built with <span className="text-blue-400">React</span> and{" "}
            <span className="text-teal-400">Tailwind CSS</span>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="pb-0 lg:pb-0">
          <ul className="flex flex-row gap-4 text-base lg:text-base">
            <li>
              <a
                href="#home"
                className="text-neutral-950 hover:text-neutral-800"
              >
                Home
              </a>
            </li>
            <div className="h-4 w-1 rounded-full bg-amber-700" />
            <li>
              <a
                href="#about"
                className="text-neutral-950 hover:text-neutral-800"
              >
                About Me
              </a>
            </li>
            <div className="h-4 w-1 rounded-full bg-amber-700" />
            <li>
              <a
                href="#projects"
                className="text-neutral-950 hover:text-neutral-800"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="hidden lg:flex">
          <p className="text-xs tracking-widest text-neutral-950 lg:text-xs">
            &copy; All Rights Reserved By
            <a href="#home">
              <span className="font-semibold text-opacity-100">
                {" "}
                Kyle Burdeos{" "}
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
