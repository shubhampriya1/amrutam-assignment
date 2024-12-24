"use client";

import {
  Heart,
  Shield,
  Flower2,
  Brain,
  Target,
  HandIcon as Hands,
} from "lucide-react";
import { MandalaPattern } from "./mandala-pattern";

const benefits = [
  {
    title: "Personalized Wellness",
    description:
      "Get treatments made just for you based on your individual doshas ( body type).",
    icon: Heart,
    position: "left",
  },
  {
    title: "Focus on prevention",
    description: "Stop problems even before they start.",
    icon: Target,
    position: "left-bottom",
  },
  {
    title: "Mind-Body Connection",
    description: "Keep your mind and body in sync for a happy life.",
    icon: Brain,
    position: "bottom-left",
  },
  {
    title: "Natural Remedies",
    description: "Using herbs and natural therapies for healing.",
    icon: Flower2,
    position: "right",
  },
  {
    title: "Boosting immunity",
    description: "Stay strong and healthy for life, not just for today.",
    icon: Shield,
    position: "bottom-right",
  },
  {
    title: "Holistic Healing",
    description: "Fix the root problem for long-lasting health.",
    icon: Hands,
    position: "top-right",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-[#FDF9F3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#446A46] relative inline-block">
            Discover Ayurveda&apos;s Magic With Us
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#446A46]" />
          </h2>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Ayurvedic treatment aims to balance your body and mind, bringing
            harmony and vitality. It&apos;s like a journey to better health
            using ancient wisdom, a totally effective approach for a better
            life.
          </p>
        </div>

        <div className="relative max-w-[800px] aspect-square mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full overflow-hidden z-10">
            <img
              src="/yoga.png"
              alt="Meditation"
              className="w-full h-full object-cover "
            />
          </div>
          <MandalaPattern />

          <div className="hidden lg:block">
            {benefits.map((benefit, index) => {
              const angle = index * 60 - 90;
              const radius = 350;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={benefit.title}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    width: "200px",
                  }}
                >
                  <div
                    className={`flex items-start gap-4 ${
                      index > 2
                        ? "flex-row-reverse text-right"
                        : "flex-row text-left"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full ${
                        index === 3
                          ? "bg-yellow-100"
                          : index === 4
                          ? "bg-green-100"
                          : "bg-white"
                      } shadow-lg flex items-center justify-center`}
                    >
                      <benefit.icon
                        className={`w-6 h-6 ${
                          index === 3
                            ? "text-yellow-600"
                            : index === 4
                            ? "text-green-600"
                            : "text-[#446A46]"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Benefits List - Only shown below lg breakpoint */}
          <div className="lg:hidden mt-8">
            <div className="grid grid-cols-2 gap-4 px-4">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="text-center">
                  <div
                    className={`w-12 h-12 rounded-full mx-auto ${
                      index === 3
                        ? "bg-yellow-100"
                        : index === 4
                        ? "bg-green-100"
                        : "bg-white"
                    } shadow-lg flex items-center justify-center mb-2`}
                  >
                    <benefit.icon
                      className={`w-6 h-6 ${
                        index === 3
                          ? "text-yellow-600"
                          : index === 4
                          ? "text-green-600"
                          : "text-[#446A46]"
                      }`}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {benefit.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
