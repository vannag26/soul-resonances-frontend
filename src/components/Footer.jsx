import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-purple text-white mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-light mb-4">
              <span className="text-brand-gold">Soul</span> Resonances
            </h3>
            <p className="text-sm text-gray-300">
              Sacred wisdom for your abundance, love & alignment journey.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/membership" className="text-gray-300 hover:text-brand-gold transition-colors">Membership</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-brand-gold transition-colors">Resources</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-brand-gold transition-colors">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm">Developer</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/api" className="text-gray-300 hover:text-brand-gold transition-colors">API Documentation</Link></li>
              <li><a href="https://rapidapi.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-gold transition-colors">RapidAPI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://youtube.com/@SoulResonances844" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-gold transition-colors">YouTube @SoulResonances844</a></li>
              <li><a href="https://instagram.com/soulresonances" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-gold transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-purple-dark pt-8 text-center text-sm text-gray-300">
          <p>© 2026 Soul Resonances LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
