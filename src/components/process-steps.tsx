export function ProcessSteps() {
  const steps = [
    {
      number: "1",
      title: "Make Appointment",
      description: "Schedule your consultation instantly to begin your wellness journey",
    },
    {
      number: "2",
      title: "Consultation",
      description: "Detailed consultation with our Ayurvedic experts",
    },
    {
      number: "3",
      title: "Treatment Planning",
      description: "Receive a personalized treatment plan for you",
    },
    {
      number: "4",
      title: "Follow-up",
      description: "Regular follow-ups to track your progress",
    },
  ]

  return (
    <div className="py-24 bg-[#FDF9F3]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#446A46]">
          Our Ayurvedic Approach
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          At Amrutam we follow a unique and personalized approach to healing. Our experts
          work closely with you to understand your health concerns and create customized
          treatment plans that align with natural healing principles.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#446A46] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

