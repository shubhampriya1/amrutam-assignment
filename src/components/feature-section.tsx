import { Clock, Shield, User2, ClipboardList } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: Clock,
      title: "Convenient Online &",
      subtitle: "In-Clinic Consultations",
    },
    {
      icon: Shield,
      title: "Safe And Effective",
      subtitle: "Treatment",
    },
    {
      icon: User2,
      title: "Experienced Ayurvedic",
      subtitle: "Practitioners",
    },
    {
      icon: ClipboardList,
      title: "Personalized Treatment",
      subtitle: "Plans & Guidance",
    },
  ];

  return (
    <div className="bg-[#fdf6e9] py-8 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 items-center relative">
              <div className="w-12 h-12 rounded-full bg-[#2d5744]/10 flex items-center justify-center mb-3">
                <feature.icon className="w-10 h-10 text-[#2d5744]" />
              </div>

              <div className="text-center">
                <p className="font-bold  text-[#2d5744]">{feature.title}</p>
                <p className="font-bold  text-[#2d5744]">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
