import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null)
  const location = useLocation()

  // Check auth status on mount
  useState(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null)
    })
  }, [])

  const isActive = (path) => location.pathname === path ? 'text-brand-gold' : 'text-gray-700 hover:text-brand-gold'

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="section-container py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-light tracking-wide">
            <span className="text-brand-purple">Soul</span>
            <span className="text-brand-gold ml-2">Resonances</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/membership" className={`text-sm font-medium transition-colors ${isActive('/membership')}`}>
            Membership
          </Link>
          <Link to="/resources" className={`text-sm font-medium transition-colors ${isActive('/resources')}`}>
            Resources
          </Link>
          <Link to="/services" className={`text-sm font-medium transition-colors ${isActive('/services')}`}>
            Services
          </Link>
          <Link to="/api" className={`text-sm font-medium transition-colors ${isActive('/api')}`}>
            Developer API
          </Link>
          {user ? (
            <div className="flex gap-4 items-center">
              <Link to="/dashboard" className="text-sm font-medium text-brand-purple hover:text-brand-gold transition-colors">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="text-sm font-medium text-gray-700 hover:text-brand-gold transition-colors">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-primary text-sm">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-purple"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden">
            <div className="flex flex-col gap-4 p-4 section-container">
              <Link to="/" className={`text-sm font-medium ${isActive('/')}`} onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/membership" className={`text-sm font-medium ${isActive('/membership')}`} onClick={() => setIsOpen(false)}>
                Membership
              </Link>
              <Link to="/resources" className={`text-sm font-medium ${isActive('/resources')}`} onClick={() => setIsOpen(false)}>
                Resources
              </Link>
              <Link to="/services" className={`text-sm font-medium ${isActive('/services')}`} onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/api" className={`text-sm font-medium ${isActive('/api')}`} onClick={() => setIsOpen(false)}>
                Developer API
              </Link>
              {user ? (
                <div className="flex flex-col gap-2">
                  <Link to="/dashboard" className="text-sm font-medium text-brand-purple" onClick={() => setIsOpen(false)}>
                    Dashboard
                  </Link>
                  <button onClick={() => { handleLogout(); setIsOpen(false); }} className="text-sm font-medium text-gray-700 text-left">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/login" className="btn-primary text-sm inline-block w-fit" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
