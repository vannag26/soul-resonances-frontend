import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      // Get current user
      const { data: { user: authUser } } = await supabase.auth.getUser()
      setUser(authUser)

      if (authUser) {
        // Fetch profile
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', authUser.id)
          .single()

        setProfile(profileData)

        // Fetch articles based on access tier
        const tier = profileData?.subscription_tier || 'free'
        const { data: articlesData } = await supabase
          .from('articles')
          .select('*')
          .in('access_tier', ['free', tier])
          .eq('published', true)
          .order('created_at', { ascending: false })
          .limit(3)

        setArticles(articlesData || [])
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-gold"></div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-purple to-brand-purple-dark text-white py-16">
        <div className="section-container">
          <h1 className="text-4xl font-light mb-2">
            Welcome,
            <span className="text-brand-gold ml-3 font-light">
              {user?.email?.split('@')[0] || 'Seeker'}
            </span>
          </h1>
          <p className="text-gray-100 font-light">Your sacred journey continues here</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="section-container max-w-4xl">
          {/* Plan Card */}
          <div className="card-cream p-8 mb-12 border-l-4 border-brand-gold">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h2 className="text-2xl font-light text-brand-purple mb-2">Your Plan</h2>
                <p className="text-gray-700 font-light">
                  <span className="capitalize">
                    {profile?.subscription_tier || 'Free'} Member
                  </span>
                </p>
              </div>
              <div className="mt-6 md:mt-0 flex flex-col gap-3">
                <a
                  href="https://billing.stripe.com/p/login/dR61480D51mj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  Manage Subscription
                </a>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-brand-gold transition-colors font-light text-sm"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          <div>
            <h3 className="text-2xl font-light text-brand-purple mb-8">Your Latest Resources</h3>

            {articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <div key={article.id} className="card-cream p-8">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-brand-purple bg-brand-cream border border-brand-purple border-opacity-20 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-light text-brand-purple mb-3">{article.title}</h4>
                    <p className="text-gray-700 font-light text-sm mb-4">{article.summary}</p>
                    <button className="text-brand-gold font-medium hover:underline text-sm">
                      Read →
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-brand-cream rounded-lg p-12 text-center">
                <p className="text-gray-700 font-light mb-4">
                  No articles available yet.
                </p>
                <p className="text-gray-600 font-light text-sm">
                  Check back soon for exclusive content tailored to your membership tier.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Upgrade Section */}
      {profile?.subscription_tier === 'free' && (
        <section className="py-12 bg-brand-cream">
          <div className="section-container max-w-3xl text-center">
            <h2 className="text-3xl font-light text-brand-purple mb-4">Unlock More Wisdom</h2>
            <p className="text-gray-700 font-light mb-8">
              Upgrade to Awakened or Enlightened for exclusive readings, deeper guidance, and a thriving community.
            </p>
            <a href="/membership" className="btn-primary">
              Explore Memberships
            </a>
          </div>
        </section>
      )}
    </div>
  )
}
