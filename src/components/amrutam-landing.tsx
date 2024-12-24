import { AppPromotion } from "@/components/app-promotion";
import { ExpertsCarousel } from "@/components/experts-carousel";
import { FeaturesGrid } from "@/components/features-grid";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProcessSteps } from "@/components/process-steps";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { BenefitsSection } from "./benefits-section";

export default function AmrutamLanding() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="min-h-screen bg-[#FDF9F3]">
        <BenefitsSection />
      </div>
      <FeaturesGrid />
      <div className="bg-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to restore harmony in your mind, body and spirit?
          </h2>
          <button className="bg-[#446A46] text-white px-8 py-3 rounded-lg hover:bg-[#385839]">
            Book a consultation
          </button>
        </div>
      </div>
      <ProcessSteps />
      <TestimonialsCarousel />
      <ExpertsCarousel />
      <AppPromotion />
      <footer className="bg-[#3A643B2E] flex flex-col items-center">
        <h6 className="text-[#3A643B] font-semibold mb-2 mt-24">Information</h6>

        <p className="font-light text-gray-500">About Us</p>
        <p className="font-light text-gray-500">Terms and Conditions</p>
        <p className="font-light text-gray-500">Privacy Policy</p>
        <p className="font-light text-gray-500">
          Privacy Policy for Mobile Apps
        </p>
        <p className="font-light text-gray-500">Shipping and Returns Policy</p>
        <p className="font-light text-gray-500">International Delivery</p>
        <p className="font-light text-gray-500">
          For Businesses, Hotels and Resorts
        </p>
        <p className="font-light text-gray-500 mb-24">Customer Service</p>
      </footer>
    </div>
  );
}
