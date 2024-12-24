import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="bg-[#FDF9F3] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Amrutam Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-700 hover:text-[#446A46]">
                Home
              </Link>
              <Link
                href="/find-doctors"
                className="text-gray-700 hover:text-[#446A46]"
              >
                Find Doctors
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#446A46]"
              >
                About Us
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="font-medium">
              Login
            </Button>
            <Button className="bg-[#446A46] hover:bg-[#385839] font-medium">
              Sign-up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
