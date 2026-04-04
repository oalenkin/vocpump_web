'use client'

import { trackEvent } from '@/lib/analytics'
import { BOT_START, botUrlWithStart } from '@/lib/botLink'
import { SITE_CONFIG } from '@/lib/constants'

export default function Hero() {
  const handleBotClick = () => {
    trackEvent('click_telegram_bot', 'hero')
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 px-4 sm:py-28 md:py-32">
      <div className="container relative mx-auto max-w-4xl text-center">
        <h1 className="mb-5 text-4xl font-bold tracking-tight text-vp-dark sm:text-5xl md:text-6xl">
          {SITE_CONFIG.name}
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-xl text-slate-600 sm:text-2xl">
          Language learning flashcards in Telegram
        </p>
        <p className="mx-auto mb-10 max-w-xl text-base text-slate-500 sm:text-lg">
          Create decks, learn with spaced repetition, track progress — all inside Telegram.
        </p>
        <a
          href={botUrlWithStart(BOT_START.siteHero)}
          className="inline-flex items-center gap-2 rounded-xl bg-vp-blue px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-vp-blue/25 transition hover:bg-vp-blue-hover hover:shadow-vp-blue/30 focus:outline-none focus:ring-2 focus:ring-vp-blue focus:ring-offset-2"
          onClick={handleBotClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Telegram
          <span aria-hidden>→</span>
        </a>
        <p className="mt-10 text-sm text-slate-400">
          English · Spanish · French · German · and more
        </p>
      </div>
    </section>
  )
}
