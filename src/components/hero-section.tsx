import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative min-h-[600px] bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <p className="text-lg mb-4 text-gray-200">
            Namaste, Welcome to Amrutam
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Step into Holistic Healing with Ayurveda
            <span className="block mt-2">
              Book Consultation With Certified Experts.
            </span>
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Experience authentic Ayurvedic consultations from the comfort of
            your home. Our certified experts are here to guide you towards
            holistic wellness.
          </p>
          <Button
            size="lg"
            className="bg-[#446A46] hover:bg-[#385839] text-lg px-8"
          >
            Book an appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
