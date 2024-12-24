import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience: string;
  languages: string;
  rating: number;
  videoPrice: string;
  chatPrice: string;
}

export function DoctorCard({
  name,
  specialization,
  experience,
  languages,
  rating,
  videoPrice,
  chatPrice,
}: DoctorCardProps) {
  return (
    <div className="bg-[#FDF9F3] rounded-lg p-6 flex flex-col items-center">
      <div className="relative">
        <Image
          src="/doctor-v2.png"
          alt={name}
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-2 py-0.5 rounded-full flex items-center gap-1">
          <span>{rating}</span>
          <Star className="h-3 w-3 fill-current" />
        </div>
      </div>
      <h3 className="mt-4 text-3xl font-semibold text-gray-700">{name}</h3>
      <div className="mt-4 space-y-2 w-full px-14">
        <div className="flex items-center gap-2">
          <span className="text-[#446A46]">⚕️</span>
          <span className="text-gray-600">{specialization}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#446A46]">⏳</span>
          <span className="text-gray-600">{experience}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#446A46]">🗣️</span>
          <span className="text-gray-600">Speaks: {languages}</span>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 w-full">
        <div className="text-center p-2 bg-white rounded border-[0.5px]">
          <div className="text-sm">Video Consultation</div>
          <div className="font-semibold">₹{videoPrice}</div>
        </div>
        <div className="text-center p-2 bg-white rounded border-[0.5px]">
          <div className="text-sm">Chat Consultation</div>
          <div className="font-semibold">{chatPrice}</div>
        </div>
      </div>
      <div className="mt-4 grid gap-2 w-full">
        <Button variant="outline" className="w-full">
          View Profile
        </Button>
        <Button className="w-full bg-[#446A46] hover:bg-[#385839]">
          Book a consultation
        </Button>
      </div>
    </div>
  );
}
