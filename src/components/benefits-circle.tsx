"use client";

import { useEffect, useRef, useState } from "react";

export function BenefitsCircle() {
  const [circleSize, setCircleSize] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setCircleSize(Math.min(width, 600)); // Max size of 600px
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const benefits = [
    { icon: "💎", title: "Personalized Wellness" },
    { icon: "🎯", title: "Focus on prevention" },
    { icon: "🧘‍♀️", title: "Mind Body Connection" },
    { icon: "🌿", title: "Natural Remedies" },
    { icon: "🛡️", title: "Boosting Immunity" },
    { icon: "❤️", title: "Holistic Healing" },
  ];

  return (
    <div className="py-24 bg-[#FDF9F3]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-[#446A46]">
          Discover Ayurveda&apos;s Magic With Us
        </h2>
        <div
          ref={containerRef}
          className="relative mx-auto"
          style={{ width: circleSize, height: circleSize }}
        >
          {/* Decorative Circles */}
          <div className="absolute inset-0 border-2 border-[#446A46] rounded-full opacity-20" />
          <div className="absolute inset-[10%] border-2 border-[#446A46] rounded-full opacity-40" />
          <div className="absolute inset-[20%] border-2 border-[#446A46] rounded-full opacity-60" />

          {/* Center Image */}
          <div className="absolute inset-[25%] rounded-full overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Meditation"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Benefits */}
          {benefits.map((benefit, index) => {
            const angle = index * 60 - 90; // Start from top (-90 degrees) and distribute evenly (360/6 = 60 degrees)
            const radius = circleSize * 0.42; // Position items at 42% from center
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={benefit.title}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${circleSize / 2 + x}px`,
                  top: `${circleSize / 2 + y}px`,
                  width: "max-content",
                }}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl">
                    {benefit.icon}
                  </div>
                  <span className="font-medium text-center whitespace-nowrap bg-white/80 px-3 py-1 rounded-full">
                    {benefit.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
