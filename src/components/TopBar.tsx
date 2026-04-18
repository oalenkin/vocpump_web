'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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

  const handleBotClick = () => {
    trackEvent('click_telegram_bot', 'navbar')
  }

  const linkClass = (active: boolean) =>
    `text-sm font-medium transition-colors ${
      active ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
    }`

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

        {/* Nav */}
        <nav className="flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`rounded-md px-3 py-2 ${linkClass(
                href === '/' ? pathname === '/' : pathname?.startsWith(href.replace('/#', '/')) && !href.includes('#') || false
              )}`}
            >
              {label}
            </Link>
          ))}

          <a
            href={botUrlWithStart(BOT_START.siteNav)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBotClick}
            className="ml-3 inline-flex items-center gap-2 rounded-xl bg-vp-purple px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-vp-purple-hover focus:outline-none focus:ring-2 focus:ring-vp-purple focus:ring-offset-2"
          >
            Try Bot
          </a>
        </nav>
      </div>
    </header>
  )
}
