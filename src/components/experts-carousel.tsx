"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ExpertsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const experts = [
    {
      name: "Dr. Vishesh Sharma",
      specialization: "Senior Ayurvedic Expert",
      experience: "7+ Years Experience",
    },
    {
      name: "Dr. Vishesh Sharma",
      specialization: "Senior Ayurvedic Expert",
      experience: "7+ Years Experience",
    },
    {
      name: "Dr. Vishesh Sharma",
      specialization: "Senior Ayurvedic Expert",
      experience: "7+ Years Experience",
    },
  ];

  return (
    <div className="py-24 bg-[#FDF9F3]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-[#446A46]">
          Meet Our Ayurveda Experts
        </h2>
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {experts.map((expert, index) => (
              <Card
                key={index}
                className={`flex-shrink-0 w-full md:w-1/3 transition-transform duration-300 transform ${
                  index === currentSlide ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <img
                    src="/doctor-v2.png"
                    alt={expert.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-xl mb-2">{expert.name}</h3>
                  <p className="text-gray-600 mb-1">{expert.specialization}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    {expert.experience}
                  </p>
                  <Button className="bg-[#446A46] hover:bg-[#385839] w-full">
                    Book Session
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {experts.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide ? "bg-[#446A46]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 transform -translate-y-1/2"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? experts.length - 1 : prev - 1
              )
            }
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === experts.length - 1 ? 0 : prev + 1
              )
            }
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-center mt-8">
          <Button variant="link" className="text-[#446A46]">
            Find more experts →
          </Button>
        </div>
      </div>
    </div>
  );
}
