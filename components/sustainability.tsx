export function Sustainability() {
  const initiatives = [
    { label: "Water Recycled", value: "1M+ ML/Year" },
    { label: "Energy Saved", value: "500+ MWh/Year" },
    { label: "Waste Recycled", value: "1000+ MT/Year" },
    { label: "ZLD Projects", value: "200+" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5 relative overflow-hidden">
      {/* Added background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/sustainability-water-treatment.jpg"
          alt="Sustainability Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Sustainability Commitments</h2>
        <p className="text-lg text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
          Aligned with UN Sustainable Development Goals for clean water, responsible consumption, and climate action
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {initiatives.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">{item.value}</div>
              <div className="text-foreground/70">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
