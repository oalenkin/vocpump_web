import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="font-bold text-lg mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-gray-400 leading-relaxed">
              Telegram bot for effective language learning through flashcards and spaced repetition
            </p>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.botLink}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Bot
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href={SITE_CONFIG.channelLink}
                className="text-gray-400 hover:text-white transition-colors block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram Channel
              </a>
              <a
                href={SITE_CONFIG.botLink}
                className="text-gray-400 hover:text-white transition-colors block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Learning
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
