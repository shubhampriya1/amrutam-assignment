import { Card, CardContent } from "@/components/ui/card";

export default function AyurvedicSection() {
  return (
    <div className="bg-[#fdf6e9] px-6 py-12">
      <h2 className="text-center text-3xl font-semibold text-[#2d5744] mb-10">
        What sets Ayurvedic consultations apart?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="bg-white border-0 border-t-8 border-blue-600">
          <CardContent className="p-6">
            <div className="space-y-2 flex flex-col justify-between">
              <p className="text-4xl font-sanskrit text-[#2d5744] mb-5 ">
                स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।&quot;
              </p>
              <p className="text-sm text-gray-600 italic">
                [ Meaning: The Goal of Ayurveda is to maintain the health of a
                healthy person and to cure the disease of a diseased person. ]
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="relative h-full w-full rounded-lg overflow-hidden">
          <img
            src="/adv-1.png"
            alt="Ayurvedic consultation"
            className="object-cover w-full h-full"
          />
        </div>

        <Card className="bg-white border-0 border-t-8 border-blue-600">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-[#2d5744] mb-3">
              Precise Diagnosis
            </h3>
            <p className="text-gray-600">
              Ayurveda&apos;s core principles revolve around Vata, Pitta, and
              Kapha doshas, guiding you with precise diagnosis and treatment.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-0">
        <div className="lg:col-span-1 order-2 lg:order-none">
          <Card className="bg-white border-0 border-t-8 border-blue-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#2d5744] mb-3">
                Zero side-effects
              </h3>
              <p className="text-gray-600">
                Ayurvedic treatments are devoid of chemicals, and are based
                completely on natural herbs
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="relative h-full w-full rounded-lg overflow-hidden order-1 lg:order-none">
          <img
            src="/avd-2.png"
            alt="Ayurvedic herbs and products"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="lg:col-span-1 order-4 lg:order-none">
          <Card className="bg-white border-0 border-t-8 border-blue-600">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#2d5744] mb-3">
                Individual Treatment
              </h3>
              <p className="text-gray-600">
                All Treatments are personalized based on a person&apos;s unique
                constitution and health concerns.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="relative h-full w-full rounded-lg overflow-hidden order-3 lg:order-none">
          <img
            src="adv-3.png"
            alt="Wellness treatment"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
