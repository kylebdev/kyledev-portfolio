import { useState } from "react";

export default function Notebook() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div
        className="relative h-80 w-64 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute inset-0 origin-left rounded-r-lg bg-blue-500 shadow-lg transition-transform duration-1000 ${
            isHovered ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="backface-hidden absolute inset-0 p-4">
            <img
              src="/aboutme.png"
              className="absolute bottom-0 h-full bg-cover"
            ></img>
          </div>
          <div className="backface-hidden rotate-y-180 absolute inset-0 bg-blue-400" />
        </div>
        <div
          className="absolute inset-0 rounded-r-lg bg-white shadow-inner"
          style={{
            background:
              "repeating-linear-gradient(transparent, transparent 20px, #e5e7eb 20px, #fff 21px)",
          }}
        />
        <div className="h-full rounded-r-lg bg-gray-500">
          asdasdasdadsas;d a;sd as dlads
        </div>
      </div>
      <style>{`
        .rotate-y-180 {
          transform: rotateY(-180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
