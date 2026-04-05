import { useState } from 'react'

export default function Api() {
  const [activeTab, setActiveTab] = useState('daily-reading')
  const [demoResult, setDemoResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const demos = {
    'daily-reading': {
      label: 'Daily Reading',
      endpoint: 'POST /v1/spiritual/daily-reading',
      description: 'Get a spiritual message for today'
    },
    'three-card-spread': {
      label: '3-Card Spread',
      endpoint: 'POST /v1/spiritual/three-card-spread',
      description: 'Receive guidance through a three-card tarot spread'
    },
    'affirmation': {
      label: 'Affirmation',
      endpoint: 'POST /v1/spiritual/affirmation',
      description: 'Daily affirmation for abundance and alignment'
    }
  }

  const callDemoApi = async (type) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://soul-resonances-api.onrender.com/v1/spiritual/' + type, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer sr_demo_free_1',
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }

      const data = await response.json()
      setDemoResult(data)
    } catch (err) {
      setError(err.message || 'Failed to fetch from API')
      setDemoResult(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="hero-section bg-gradient-to-b from-brand-purple to-brand-purple-dark text-white">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Bring Sacred Guidance
            <br />
            <span className="text-brand-gold">to Your App</span>
          </h1>
          <p className="text-xl font-light text-gray-100 mb-8 max-w-2xl mx-auto">
            Integrate spiritual wisdom into your platform with our simple, powerful API
          </p>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-light text-brand-purple mb-12 text-center">Live API Demo</h2>

          <div className="bg-brand-cream rounded-lg p-8 mb-12">
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(demos).map(([key, demo]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === key
                      ? 'bg-brand-gold text-white'
                      : 'bg-white text-brand-purple border border-brand-purple border-opacity-20 hover:bg-white'
                  }`}
                >
                  {demo.label}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="font-medium text-brand-purple mb-2">{demos[activeTab].endpoint}</h3>
              <p className="text-gray-600 font-light text-sm">{demos[activeTab].description}</p>
            </div>

            <button
              onClick={() => callDemoApi(activeTab.replace('-', '-'))}
              disabled={loading}
              className="w-full btn-primary mb-6 disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Try API Call'}
            </button>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 font-light text-sm">
                Error: {error}
              </div>
            )}

            {demoResult && (
              <div className="bg-brand-purple bg-opacity-5 border border-brand-purple border-opacity-20 rounded-lg p-4 font-mono text-sm text-gray-800">
                <pre>{JSON.stringify(demoResult, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-brand-cream">
        <div className="section-container">
          <h2 className="text-3xl font-light text-brand-purple mb-12 text-center">API Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
              <h3 className="text-xl font-light text-brand-purple mb-2">Free Tier</h3>
              <p className="text-3xl font-light text-brand-gold mb-4">$0</p>
              <p className="text-sm text-gray-600 font-light mb-6">10 requests/day • Demo key: sr_demo_free_1</p>
              <button className="text-brand-gold font-medium hover:underline text-sm">Current Plan</button>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-brand-gold">
              <h3 className="text-xl font-light text-brand-purple mb-2">Basic</h3>
              <p className="text-3xl font-light text-brand-gold mb-4">$9<span className="text-lg text-gray-600">/mo</span></p>
              <p className="text-sm text-gray-600 font-light mb-6">1,000 requests/day • Webhook support</p>
              <a
                href="https://rapidapi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm w-full text-center"
              >
                Get API Key
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-gray-200">
              <h3 className="text-xl font-light text-brand-purple mb-2">Pro</h3>
              <p className="text-3xl font-light text-brand-gold mb-4">$29<span className="text-lg text-gray-600">/mo</span></p>
              <p className="text-sm text-gray-600 font-light mb-6">10,000 requests/day • Priority support</p>
              <a
                href="https://rapidapi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm w-full text-center"
              >
                Get API Key
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 bg-white">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-light text-brand-purple mb-12 text-center">API Documentation</h2>

          <div className="space-y-8">
            {[
              {
                endpoint: 'POST /v1/spiritual/daily-reading',
                request: '{\n  "user_id": "optional"\n}',
                response: '{\n  "message": "Sacred guidance for today",\n  "theme": "Abundance",\n  "affirmation": "I am worthy of all good things"\n}'
              },
              {
                endpoint: 'POST /v1/spiritual/three-card-spread',
                request: '{\n  "question": "optional query",\n  "spread_type": "past-present-future"\n}',
                response: '{\n  "cards": [\n    { "name": "The Magician", "meaning": "Manifestation" },\n    { "name": "The Lovers", "meaning": "Connection" },\n    { "name": "The Star", "meaning": "Hope" }\n  ]\n}'
              },
              {
                endpoint: 'POST /v1/spiritual/affirmation',
                request: '{\n  "theme": "abundance"\n}',
                response: '{\n  "affirmation": "I attract unlimited prosperity",\n  "theme": "Abundance",\n  "color": "#d97706"\n}'
              }
            ].map((doc, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-medium text-brand-purple mb-4 font-mono text-sm">{doc.endpoint}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">Request</p>
                    <pre className="bg-brand-cream p-3 rounded text-xs font-mono text-gray-700 overflow-x-auto">{doc.request}</pre>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-2 uppercase">Response</p>
                    <pre className="bg-brand-cream p-3 rounded text-xs font-mono text-gray-700 overflow-x-auto">{doc.response}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://rapidapi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get API Key on RapidAPI
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
