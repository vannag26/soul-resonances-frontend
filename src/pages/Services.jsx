export default function Services() {
  const services = [
    {
      title: 'Spiritual Readings',
      description: 'Deep dive into tarot, oracle, and intuitive readings tailored to your unique journey. Receive personalized guidance on love, abundance, career, and spiritual growth.',
      icon: '🔮'
    },
    {
      title: 'Feng Shui Consultation',
      description: 'Transform your living or working space into a harmonious sanctuary. Our expert consultants analyze your environment and provide customized recommendations for optimal energy flow.',
      icon: '🏠'
    },
    {
      title: 'Astrology Reports',
      description: 'Understand your cosmic blueprint through detailed astrology analysis. Birth charts, transit reports, and compatibility readings to align with your destiny.',
      icon: '⭐'
    }
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="hero-section bg-gradient-to-b from-brand-purple to-brand-purple-dark text-white">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Sacred Services</h1>
          <p className="text-xl font-light text-gray-100">
            Personalized guidance from spiritual practitioners
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-light text-brand-purple mb-4">{service.title}</h3>
                <p className="text-gray-700 font-light mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="mailto:vg@soulresonances.com"
                  className="btn-secondary w-fit"
                >
                  Book a Session
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-cream">
        <div className="section-container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-brand-purple">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-lg font-light text-gray-700 mb-8">
            Each service is customized to your unique needs and spiritual goals. Contact us to discuss pricing and book your session.
          </p>
          <a
            href="mailto:vg@soulresonances.com"
            className="btn-primary"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
