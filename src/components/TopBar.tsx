'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'
import { BOT_START, botUrlWithStart } from '@/lib/botLink'
import { SITE_CONFIG } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Blog', href: '/blog' },
]

export default function TopBar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleBotClick = () => {
    trackEvent('click_telegram_bot', 'navbar')
  }

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors ${
      active ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
    }`

  const isActive = (href: string) =>
    href === '/'
      ? pathname === '/'
      : !href.includes('#') && (pathname?.startsWith(href) ?? false)

  const ctaButton = (
    <a
      href={botUrlWithStart(BOT_START.siteNav)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleBotClick}
      className="inline-flex items-center gap-2 rounded-xl bg-vp-purple px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-vp-purple-hover focus:outline-none focus:ring-2 focus:ring-vp-purple focus:ring-offset-2"
    >
      Try Bot
    </a>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 no-underline"
          aria-label={`${SITE_CONFIG.name} — Home`}
        >
          <Image
            src="/favicon-96x96.png"
            alt={SITE_CONFIG.name}
            width={40}
            height={40}
            className="rounded-xl"
          />
          <span className="text-xl font-bold text-gray-900 tracking-tight">{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-md px-3 py-2 ${linkClass(isActive(href))}`}
            >
              {label}
            </Link>
          ))}
          <div className="ml-3">{ctaButton}</div>
        </nav>

        {/* Mobile: CTA + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          {ctaButton}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive(href) ? 'text-gray-900' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
