import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SearchHeader } from "@/components/search-header";
import { FilterBar } from "@/components/filter-bar";
import { DoctorCard } from "@/components/doctor-card";

export default function DoctorSearch() {
  const doctors = Array(3).fill({
    name: "Dr. Prerna Narang",
    specialization: "Male-Female Infertility",
    experience: "7 years of Experience",
    languages: "English, Hindi, Marathi",
    rating: 4.5,
    videoPrice: "800",
    chatPrice: "Free",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#FDF9F3]">
        <div className="flex items-center gap-8">
          <Image
            src="/logo.png"
            alt="Amrutam Logo"
            width={120}
            height={40}
            className="object-contain"
          />
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              Find Doctors
            </a>
            <a href="#" className="text-gray-600">
              About Us
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">Login</Button>
          <Button className="bg-[#446A46] hover:bg-[#385839]">Sign-up</Button>
        </div>
      </header>

      <SearchHeader />
      <FilterBar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, i) => (
            <DoctorCard key={i} {...doctor} />
          ))}
        </div>
      </main>
    </div>
  );
}
