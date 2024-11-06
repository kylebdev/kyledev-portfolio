import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

import {
  FacebookOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  PlayCircle,
  ElectricBolt,
  LocationOn,
} from "@mui/icons-material";

export default function Home({ ContentRef }: any) {
  const animateRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section id="home" className="py-20 md:py-0">
      <div className="relative m-auto h-full max-h-[800px] md:container 2xl:h-[calc(100vh-2rem)]">
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center py-6 md:py-24 2xl:flex-row">
            <div
              ref={animateRef}
              className={` ${isVisible ? "animate-slidein300" : "opacity-0"} opacity-0`}
            >
              {/* profile photo */}

              <img
                ref={ContentRef}
                src={`${process.env.PUBLIC_URL}/myimg/home-img.png`}
                alt="Hi! I'm Kyle Burdeos Portfolio, Welcome to my Portfolio"
                className="w-[270px] rounded-full border-4 border-white/30 shadow-inner shadow-white md:w-[300px] lg:w-[330px] 2xl:w-[400px]"
                draggable="false"
              />
            </div>
            <div className="ml-0 mt-8 2xl:ml-16">
              {/* name  */}
              <div
                className={` ${isVisible ? "animate-slidein500" : "opacity-0"} opacity-0`}
              >
                <div className="text-center text-4xl font-extrabold text-white md:text-5xl 2xl:text-6xl">
                  Kyle R. Burdeos
                </div>
                <div className="text-center text-base font-semibold tracking-tighter text-white md:text-lg">
                  Software Engineer
                </div>
              </div>
              {/* icons */}
              <div
                className={` ${isVisible ? "animate-slidein700" : "opacity-0"} opacity-0`}
              >
                {/* <div className="mb-4 mt-8 flex justify-center">
                  <div className="relative">
                    <button className="bg-transparent duration-75 ease-in-out hover:scale-110">
                      <span className="absolute left-10 right-0 w-max text-sm text-white md:text-sm lg:text-base 2xl:text-sm">
                        Available now
                      </span>
                      <ElectricBolt
                        sx={{
                          fontSize: {
                            xl: 40,
                            lg: 60,
                            md: 55,
                            sm: 55,
                            xs: 50,
                          },
                          color: "#0a0a0a",
                        }}
                      />
                    </button>
                  </div>
                </div> */}

                <div className="flex items-center justify-center pb-12 pt-8">
                  <div className="flex flex-col items-center space-y-4 text-black">
                    <div className="flex items-center space-x-2">
                      <LocationOn
                        sx={{
                          fontSize: 18,
                        }}
                        className="text-white/20"
                      />
                      <h2 className="text-sm font-extrabold tracking-wider text-white/20 lg:text-base">
                        Davao City, Philippines
                      </h2>
                    </div>
                    <div className="rounded-2xl border border-dashed border-amber-500 bg-amber-700 px-3 py-1.5">
                      <div className="flex animate-pulse items-center space-x-2">
                        <ElectricBolt
                          sx={{
                            fontSize: 15,
                            color: "white",
                          }}
                        />
                        <h2 className="text-xs font-normal tracking-wider text-white lg:text-sm">
                          Available Now
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b">
                  <Marquee direction="right" speed={50}>
                    <p className="text-xs font-extralight -tracking-tighter text-white">
                      LET'S CONNECT ●
                    </p>
                  </Marquee>
                </div>

                <div className="flex w-full justify-center border-t-amber-50 p-3">
                  <a
                    href="https://www.facebook.com/kaelmotivated/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 rounded-full border-2 border-dashed border-neutral-500 p-[2px] duration-75 ease-in hover:scale-125"
                  >
                    <FacebookOutlined
                      sx={{
                        fontSize: { xl: 40, lg: 40, md: 35, sm: 35, xs: 35 },
                        color: "white",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/kyleburdeos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 rounded-full border-2 border-dashed border-neutral-500 p-[2px] duration-75 ease-in hover:scale-125"
                  >
                    <Instagram
                      sx={{
                        fontSize: { xl: 40, lg: 40, md: 35, sm: 35, xs: 35 },
                        color: "white",
                      }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kyle-burdeos-541a11248"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 rounded-full border-2 border-dashed border-neutral-500 p-[2px] duration-75 ease-in hover:scale-125"
                  >
                    <LinkedIn
                      sx={{
                        fontSize: { xl: 40, lg: 40, md: 35, sm: 35, xs: 35 },
                        color: "white",
                      }}
                    />
                  </a>
                  <a
                    href="https://github.com/kylebdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2 rounded-full border-2 border-dashed border-neutral-500 p-[2px] duration-75 ease-in hover:scale-125"
                  >
                    <GitHub
                      sx={{
                        fontSize: { xl: 40, lg: 40, md: 35, sm: 35, xs: 35 },
                        color: "white",
                      }}
                    />
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
