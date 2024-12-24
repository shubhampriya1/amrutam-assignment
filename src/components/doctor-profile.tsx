"use client";

import {
  Calendar,
  CheckCircle2,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "./ui/separator";

export default function DoctorProfile() {
  const [selectedDate, setSelectedDate] = useState("Mon, 10 Oct");

  return (
    <div className="min-h-screen bg-[#FDF9F3]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white">
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

      {/* Hero Banner */}
      <div className="h-40 bg-[#E1EBE1]" />

      <main className="max-w-7xl mx-auto px-4 -mt-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <Image
                    src="/doctor-image.png"
                    alt="Doctor Profile"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h1 className="text-xl font-semibold">
                        Dr. Bruce Willis
                      </h1>
                      <CheckCircle2 />
                    </div>
                    <p className="text-gray-600">Gynecologist</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-sm font-medium">4.2</span>
                      {"★★★★☆".split("").map((star, i) => (
                        <span key={i} className="text-yellow-400">
                          {star}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6 mt-4">
                      <div>
                        <div className="font-semibold">850</div>
                        <div className="text-sm text-gray-600">Followers</div>
                      </div>
                      <div>
                        <div className="font-semibold">18K</div>
                        <div className="text-sm text-gray-600">Following</div>
                      </div>
                      <div>
                        <div className="font-semibold">250</div>
                        <div className="text-sm text-gray-600">Posts</div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-[#446A46] hover:bg-[#385839]">
                    Book an Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* About Section */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">A Little About me</h2>
                  <Button variant="outline" size="default">
                    Follow +
                  </Button>
                </div>
                <p className="text-gray-600 mb-6">
                  Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni
                  Hospital Surat. love to work with all my hospital staff and
                  seniour doctors. Completed my graduation in Gynaecologist
                  Medicine from the...
                </p>
                <div className="flex items-center justify-center my-5">
                  <Separator className="flex-1" />
                  <Button variant="link">Read More</Button>
                </div>
                <div className="space-y-10">
                  <div className="flex items-center space-x-10">
                    <h3 className="font-medium mb-2">Language Spoken</h3>
                    <div className="flex gap-4">
                      <Button variant={"ghost"} className="text-gray-600">
                        English
                      </Button>
                      <Button variant={"ghost"} className="text-gray-600">
                        Hindi
                      </Button>
                      <Button variant={"ghost"} className="text-gray-600">
                        Telugu
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Facebook className="w-7 border-[0.5px] border-[#446A46] rounded-full border-spacing-3.5 cursor-pointer text-[#446A46]" />
                    <Instagram className="w-7 border-[0.5px] border-[#446A46] rounded-full border-spacing-3.5 cursor-pointer text-[#446A46]" />
                    <Youtube className="w-7 border-[0.5px] border-[#446A46] rounded-full border-spacing-3.5 cursor-pointer text-[#446A46]" />
                    <Twitter className="w-7 border-[0.5px] border-[#446A46] rounded-full border-spacing-3.5 cursor-pointer text-[#446A46]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-6">I Specialize In</h2>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { icon: "🫁", label: "Women's Health" },
                    { icon: "👩", label: "Skin Care" },
                    { icon: "🛡️", label: "Immunity" },
                    { icon: "💆‍♀️", label: "Hair Care" },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col items-center gap-2 p-4 bg-[#F8FAF8] rounded-lg"
                    >
                      <span className="text-2xl">{spec.icon}</span>
                      <span className="text-sm text-center">{spec.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* The Concerns I Treat */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-6">
                  The Concerns I Treat
                </h2>
                <div className="flex flex-wrap gap-6">
                  <Badge
                    variant="secondary"
                    className="bg-[#F8FAF8] hover:bg-[#F8FAF8] p-3"
                  >
                    Skin Treatment
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-[#F8FAF8] hover:bg-[#F8FAF8] p-3"
                  >
                    Pregnancy
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-[#F8FAF8] hover:bg-[#F8FAF8] p-3"
                  >
                    Period Doubts
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-[#F8FAF8] hover:bg-[#F8FAF8] p-3"
                  >
                    Endometriosis
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-[#F8FAF8] hover:bg-[#F8FAF8] p-3"
                  >
                    Pelvic Pain
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-[#F8FAF8] hover:bg-[#F8FAF8] p-3"
                  >
                    Ovarian Cysts
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-[#F8FAF8] hover:bg-[#F8FAF8] p-3"
                  >
                    + 5 More
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-6">
                  My Work Experience
                </h2>
                <div className="text-sm text-gray-600 mb-4">
                  I HAVE BEEN IN PRACTICE FOR : 7+ YEARS
                </div>
                <div className="space-y-6">
                  {[
                    { period: "2016-PRESENT", role: "Senior doctor" },
                    { period: "2010-2015", role: "Senior doctor" },
                  ].map((exp, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#F8FAF8] flex items-center justify-center">
                        🏥
                      </div>
                      <div>
                        <div className="font-medium">
                          Midtown Medical Clinic
                        </div>
                        <div className="text-sm text-gray-600">{exp.role}</div>
                        <div className="text-sm text-gray-400">
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Reviews */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-6">
                  Featured Reviews (102)
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      name: "Alicent Hightower",
                      date: "20 January 2023",
                      consultation: "Skin care",
                      rating: 5,
                      review:
                        "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods.",
                    },
                    {
                      name: "Alicent Hightower",
                      date: "20 January 2023",
                      consultation: "Pregnancy",
                      rating: 5,
                      review:
                        "Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods.",
                    },
                  ].map((review, i) => (
                    <div key={i} className="p-4 bg-[#F8FAF8] rounded-lg">
                      <div className="flex items-start gap-4">
                        <Image
                          src="/feedback.png"
                          alt={review.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{review.name}</h3>
                            <span className="text-sm text-gray-500">
                              {review.date}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">
                            Consulted for {review.consultation}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            {"★"
                              .repeat(review.rating)
                              .split("")
                              .map((star, i) => (
                                <span key={i} className="text-yellow-400">
                                  {star}
                                </span>
                              ))}
                          </div>
                          <p className="mt-2 text-gray-600">{review.review}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking Panel */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-medium">Appointment Fee</h2>
                  <span className="text-[#446A46] font-semibold">₹699.00</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-4">
                      Select your mode of session
                    </h3>
                    <Tabs defaultValue="video" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="clinic">
                          In-Clinic
                          <span className="text-xs ml-1">45 Mins</span>
                        </TabsTrigger>
                        <TabsTrigger value="video">
                          Video
                          <span className="text-xs ml-1">45 Mins</span>
                        </TabsTrigger>
                        <TabsTrigger value="chat">
                          Chat
                          <span className="text-xs ml-1">10 Mins</span>
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <h3 className="text-sm font-medium">Pick a time slot</h3>
                      <Separator className="flex-1" />
                      <Calendar className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex flex-wrap gap-2">
                        {[
                          {
                            label: "Thu, 13 Oct",
                            slot: 10,
                          },
                          {
                            label: "Fri, 14 Oct",
                            slot: 5,
                          },
                          {
                            label: "Sat, 15 Oct",
                            slot: 3,
                          },
                        ].map((slot) => (
                          <Button
                            key={slot.label}
                            variant={
                              selectedDate === slot.label
                                ? "default"
                                : "outline"
                            }
                            className="p-5"
                            onClick={() => setSelectedDate(slot.label)}
                          >
                            <div className="px-5 py-3 rounded-xl">
                              <div className="text-sm">{slot.label}</div>
                              <div className="text-xs text-gray-500">
                                {slot.slot} Slots
                              </div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Morning</h4>
                        <div className="grid grid-cols-4 gap-2">
                          {[
                            "09:00 AM",
                            "09:30 AM",
                            "10:00 AM",
                            "10:15 AM",
                            "10:45 AM",
                            "11:00 AM",
                          ].map((time) => (
                            <Button
                              key={time}
                              variant="outline"
                              size="sm"
                              className="p-8 rounded-2xl hover:bg-[#446A46] hover:text-white"
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2">Evening</h4>
                        <div className="grid grid-cols-4 gap-2">
                          {[
                            "04:00 PM",
                            "04:15 PM",
                            "04:30 PM",
                            "04:45 PM",
                            "05:15 PM",
                          ].map((time) => (
                            <Button
                              key={time}
                              variant="outline"
                              size="sm"
                              className="p-8 rounded-2xl hover:bg-[#446A46] hover:text-white"
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-[#446A46] hover:bg-[#385839]">
                    Make An Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
