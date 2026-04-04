import Link from 'next/link'
import { BOT_START, botUrlWithStart } from '@/lib/botLink'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-vp-dark py-12 px-4 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <a
            href={botUrlWithStart(BOT_START.siteFooter)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Open in Telegram
          </a>
        </div>
        <p className="text-center text-sm text-slate-500">
          © {currentYear} {SITE_CONFIG.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
