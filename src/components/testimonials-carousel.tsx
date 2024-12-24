"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sophie Moore",
      date: "12/08/24",
      rating: 5,
      title: "One of a kind service!",
      review:
        "Amazing experience with the consultation. The doctor was very knowledgeable and patient with all my queries.",
    },
    {
      name: "Sophie Moore",
      date: "11/08/24",
      rating: 5,
      title: "One of a kind service!",
      review:
        "Amazing experience with the consultation. The doctor was very knowledgeable and patient with all my queries.",
    },
    {
      name: "Sophie Moore",
      date: "10/08/24",
      rating: 5,
      title: "One of a kind service!",
      review:
        "Amazing experience with the consultation. The doctor was very knowledgeable and patient with all my queries.",
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-[#446A46]">
          Stories from our valued customers!
        </h2>
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`flex-shrink-0 w-full md:w-1/3 transition-transform duration-300 transform ${
                  index === currentSlide ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-700" />
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-yellow-400">
                        {star}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold mb-2">{testimonial.title}</h3>
                  <p className="text-gray-600">{testimonial.review}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
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
                prev === 0 ? testimonials.length - 1 : prev - 1
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
                prev === testimonials.length - 1 ? 0 : prev + 1
              )
            }
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
