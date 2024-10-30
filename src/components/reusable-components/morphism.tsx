import { useState } from "react";

export default function Morphism({ imgSrc, imgTitle }: any) {
  const [hoverScale, setHoverScale] = useState(false);

  return (
    <div
      className="group relative mx-4 rounded-full md:mx-6 lg:mx-8"
      onMouseEnter={() => {
        setHoverScale(true);
      }}
      onMouseLeave={() => {
        setHoverScale(false);
      }}
    >
      <div
        className={`top-1/5 absolute left-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-0 rounded-lg transition-transform duration-75 ease-linear ${hoverScale ? "-translate-y-7 opacity-100" : "opacity-0"}`}
      >
        <h1 className="px-2 py-2 text-center text-[9px] text-xs font-semibold tracking-wider text-white text-opacity-100 lg:text-sm">
          {imgTitle}
        </h1>
      </div>
      {/* Background blur effect */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neutral-600 to-amber-700 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      {/* Glassmorphism card */}
      <div className="relative flex h-full w-full rounded-full bg-white/20 p-6 md:p-8">
        <span className="flex w-full items-center justify-center">
          <img
            draggable="false"
            src={imgSrc}
            className={`w-8 transition-transform duration-150 ease-in-out md:w-12 xl:w-14 ${hoverScale ? "scale-110 sm:scale-125" : "scale-100"}`}
          />
        </span>
      </div>
    </div>
  );
}
