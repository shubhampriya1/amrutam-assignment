import { Card, CardContent } from "@/components/ui/card"

export function FeaturesGrid() {
  const features = [
    {
      title: "Precise Diagnosis",
      description: "Our experts carefully analyze your health patterns through detailed consultation.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Zero side-effects",
      description: "Natural treatments that work in harmony with your body's healing mechanisms.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Individual Treatment",
      description: "Personalized care plans based on your unique health patterns.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-[#446A46]">
          What sets Ayurvedic consultations apart?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="p-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

