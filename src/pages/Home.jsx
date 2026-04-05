import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-b from-brand-purple to-brand-purple-dark text-white">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide">
            Soul
            <span className="text-brand-gold ml-4">Resonances</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 text-gray-100 max-w-3xl mx-auto">
            Sacred wisdom for your abundance, love & alignment journey.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/membership" className="btn-primary">
              Explore Memberships
            </Link>
            <Link to="/resources" className="btn-outline">
              Free Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-cream">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-brand-purple">
            Discover Our Sacred Offerings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Feng Shui Guidance',
                description: 'Harmonize your space and energy with ancient wisdom for modern living.'
              },
              {
                title: 'Astrology Readings',
                description: 'Understand your cosmic blueprint and align with celestial energies.'
              },
              {
                title: 'Spiritual Community',
                description: 'Connect with kindred souls on the same journey of transformation.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="card-cream p-8">
                <h3 className="text-xl font-light text-brand-purple mb-4">{feature.title}</h3>
                <p className="text-gray-700 font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-purple text-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
            Words from Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              '"Soul Resonances transformed my understanding of abundance. Truly sacred wisdom."',
              '"The guidance I received aligned me perfectly. I feel more authentically myself."',
              '"A beautiful sanctuary for spiritual growth. Highly recommend the membership."'
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-brand-purple-dark bg-opacity-50 p-8 rounded-lg backdrop-blur-sm border border-brand-gold border-opacity-20">
                <p className="text-lg font-light italic mb-4">{testimonial}</p>
                <p className="text-brand-gold font-light">— Beloved Community Member</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="py-12 bg-brand-cream">
        <div className="section-container text-center">
          <p className="text-gray-700 text-lg font-light mb-4">
            Deepen your spiritual practice
          </p>
          <a
            href="https://youtube.com/@SoulResonances844"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold font-medium hover:underline text-lg"
          >
            Watch on YouTube @SoulResonances844
          </a>
        </div>
      </section>
    </div>
  )
}
