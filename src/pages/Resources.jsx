import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export default function Resources() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('access_tier', 'free')
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (error) throw error
      setArticles(data || [])
    } catch (error) {
      console.error('Error fetching articles:', error)
      setArticles([])
    } finally {
      setLoading(false)
    }
  }

  const playlists = [
    { title: 'Morning Meditations', id: 'PLxxx1' },
    { title: 'Astrology Deep Dives', id: 'PLxxx2' },
    { title: 'Feng Shui Mastery', id: 'PLxxx3' },
    { title: 'Tarot Readings', id: 'PLxxx4' },
    { title: 'Abundance Affirmations', id: 'PLxxx5' },
    { title: 'Spiritual Rituals', id: 'PLxxx6' }
  ]

  // Placeholder articles if none from DB
  const placeholderArticles = [
    { id: 1, title: 'Understanding Your Birth Chart', category: 'Astrology', summary: 'Discover the cosmic influences guiding your life path.' },
    { id: 2, title: 'Feng Shui for Home Harmony', category: 'Feng Shui', summary: 'Transform your space into a sanctuary of positive energy.' },
    { id: 3, title: 'The Sacred Tarot Journey', category: 'Tarot', summary: 'Explore the wisdom hidden within the cards.' },
    { id: 4, title: 'Abundance Mindset Mastery', category: 'Abundance', summary: 'Reprogram your beliefs for unlimited prosperity.' },
    { id: 5, title: 'Love & Soul Connection', category: 'Love', summary: 'Align with authentic love on all levels.' },
    { id: 6, title: 'Chakra Healing Essentials', category: 'Energy', summary: 'Balance your energy centers for optimal wellbeing.' }
  ]

  const displayArticles = articles.length > 0 ? articles : placeholderArticles

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="hero-section bg-gradient-to-b from-brand-purple to-brand-purple-dark text-white">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Sacred Resources</h1>
          <p className="text-xl font-light text-gray-100">
            Free wisdom to illuminate your spiritual path
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-brand-purple">Latest Articles</h2>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-gold mx-auto"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {displayArticles.map((article) => (
                <div key={article.id} className="card-cream p-8 flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-purple bg-brand-cream border border-brand-purple border-opacity-20 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-light text-brand-purple mb-3">{article.title}</h3>
                  <p className="text-gray-700 font-light mb-6 flex-grow">{article.summary}</p>
                  <button className="text-brand-gold font-medium hover:underline text-sm">
                    Read Article →
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Playlists Section */}
      <section className="py-20 bg-brand-cream">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-brand-purple">YouTube Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playlists.map((playlist, idx) => (
              <a
                key={idx}
                href={`https://youtube.com/@SoulResonances844`}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-white p-8 hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-brand-gold bg-opacity-10 rounded-lg mb-4 group-hover:bg-opacity-20 transition-colors flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-light text-brand-purple">{playlist.title}</h3>
                <p className="text-sm text-brand-gold font-medium mt-2">Watch on YouTube →</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
