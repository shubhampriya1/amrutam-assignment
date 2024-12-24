import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AppPromotion() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Amrutam Home App</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across
              The Globe
            </p>
            <p className="font-semibold mb-6">Get The App Now</p>
            <div className="flex gap-4">
              <a href="#" className="block w-44">
                <img
                  src="/google-play.png"
                  alt="Get it on Google Play"
                  className="w-full"
                />
              </a>
              <a href="#" className="block w-44">
                <img
                  src="/apple-store.png"
                  alt="Download on the App Store"
                  className="w-full"
                />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#E1EBE1] rounded-full" />
            <img
              src="/iphone.png"
              alt="Amrutam App Screenshot"
              className="relative mx-auto h-[300px] lg:h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
