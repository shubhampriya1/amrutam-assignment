import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
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
      <div className="w-screen flex flex-col items-center justify-center gap-10 mt-20">
        <Link href="/doctor-profile">
          <Button className="font-bold bg-[#446A46]">Go to Task 1</Button>
        </Link>
        <Link href="/doctor-search">
          <Button className="font-bold bg-[#446A46]">Go to Task 2</Button>
        </Link>
        <Link href="/amrutam-landing">
          <Button className="font-bold bg-[#446A46]">Go to Task 3</Button>
        </Link>
      </div>
    </main>
  );
}
