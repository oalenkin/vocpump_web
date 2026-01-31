'use client'

import { trackEvent } from '@/lib/analytics'
import { SITE_CONFIG } from '@/lib/constants'

export default function Hero() {
  const handleBotClick = () => {
    trackEvent('click_telegram_bot', 'hero')
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Language Learning Flashcards in Telegram
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
            Master Vocabulary Faster with Spaced Repetition
          </p>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create custom decks, learn with spaced repetition, track your progress
          </p>
          <a
            href={SITE_CONFIG.botLink}
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            onClick={handleBotClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Bot in Telegram
          </a>
          <div className="mt-12 bg-white/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <p className="text-gray-700 text-lg">
              Join thousands of learners using our bot to master{' '}
              <span className="font-semibold text-blue-600">English, Spanish, French</span> and more languages
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
