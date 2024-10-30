"use client";

import React, { useRef, useEffect, useState } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
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
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default function FadeEffect() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl space-y-24">
        <FadeInSection>
          <h1 className="mb-4 text-center text-4xl font-bold">
            Fade In and Out Demo
          </h1>
          <p className="text-center text-lg text-gray-600">
            Scroll down to see elements fade in and out as they enter or leave
            the viewport.
          </p>
        </FadeInSection>

        {[1, 2, 3, 4, 5].map((index) => (
          <FadeInSection key={index}>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-2 text-2xl font-semibold">Section {index}</h2>
              <p className="text-gray-600">
                This section will fade in when it enters the viewport and fade
                out when it leaves. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}
