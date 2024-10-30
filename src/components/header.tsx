"use client";

import HomeContent from "./home";
import Skills from "./skills";
import About from "./about";
import Contact from "./contact";
import Project from "./projects";
import Footer from "./footer";

import { Menu } from "@mui/icons-material";

import { useEffect, useRef, useState } from "react";

export default function Header() {
  // mobile
  const [showNav, setShowNav] = useState(true);

  // State for active section and blur effect
  const [activeSection, setActiveSection] = useState("");
  const [isBlurred, setIsBlurred] = useState(false);

  // Refs for intersection observer and DOM elements
  const observer = useRef<IntersectionObserver | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);
  // const [isLink, setIsLink] = useState("home");

  useEffect(() => {
    // Set up Intersection Observer for scroll spy
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    const header = headerRef.current;
    const content = contentRef.current;

    // Handle scroll event for blur effect
    const handleScroll = () => {
      if (header && content) {
        const headerBottom = header.getBoundingClientRect().bottom;
        const contentTop = content.getBoundingClientRect().top;
        setIsBlurred(headerBottom >= contentTop);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    // Cleanup function
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [console.log(activeSection)]);

  return (
    <div>
      <header
        ref={headerRef}
        className={`fixed z-10 w-full transition-all duration-300 ${
          isBlurred ? "bg-black/20 backdrop-blur-sm" : "bg-none"
        }`}
      >
        <nav className="container m-auto flex w-full justify-around">
          {/* logo */}
          <div>
            <img src="/mylogo.png" alt="" width={170} />
          </div>

          {/* for mobile */}
          {/* <div className="content-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg text-sm text-white hover:text-white/70 lg:hidden"
              onClick={() => setShowNav((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>

              <Menu fontSize="large"></Menu>
            </button>
          </div> */}

          {/* links */}

          <div
            className={` ${showNav ? "translate-x-0" : "translate-x-32"} fixed right-0 top-0 z-50 content-center rounded-l-3xl bg-black/50 px-8 py-8 shadow-inner shadow-white transition-all duration-700 ease-in-out lg:relative lg:translate-x-0 lg:bg-transparent lg:py-0 lg:pl-0 lg:shadow-none`}
            onMouseLeave={() => {
              setShowNav(false);
            }}
            onMouseEnter={() => {
              setShowNav(true);
            }}
          >
            <ul className="flex flex-col items-center gap-2.5 text-center text-sm font-semibold text-white md:bg-transparent lg:flex-row lg:items-start lg:gap-12 lg:text-base">
              <li>
                <a href="#home" className="relative block">
                  <button
                    className="pt-2"
                    onClick={() => {
                      setShowNav(false);
                    }}
                  >
                    Home
                  </button>
                  <span
                    className={`${activeSection === "home" ? "w-full" : "w-0"} absolute bottom-0 left-0 h-0.5 bg-amber-700 transition-all duration-300 ease-in-out`}
                  />
                </a>
              </li>
              <li>
                <a href="#about" className="relative block">
                  <button
                    className="pt-2"
                    onClick={() => {
                      setShowNav(false);
                    }}
                  >
                    About Me
                  </button>
                  <span
                    className={`${activeSection === "about" || activeSection === "skills" ? "w-full" : "w-0"} absolute bottom-0 left-0 h-0.5 bg-amber-700 transition-all duration-300 ease-in-out`}
                  />
                </a>
              </li>
              <li>
                <a href="#project" className="relative block">
                  <button
                    className="pt-2"
                    onClick={() => {
                      setShowNav(false);
                    }}
                  >
                    Projects
                  </button>
                  <span
                    className={`${activeSection === "project" ? "w-full" : "w-0"} absolute bottom-0 left-0 h-0.5 bg-amber-700 transition-all duration-300 ease-in-out`}
                  />
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className={`${activeSection === "contact" ? "border border-amber-500" : "border-none"} block rounded-sm bg-amber-700 bg-none`}
                >
                  <button
                    className="p-2"
                    onClick={() => {
                      setShowNav(false);
                    }}
                  >
                    Contact
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <HomeContent ContentRef={contentRef} />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
