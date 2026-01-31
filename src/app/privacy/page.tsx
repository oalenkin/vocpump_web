import Link from 'next/link'
import Footer from '@/components/Footer'
import { generateSEO } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata = generateSEO({
  title: 'Privacy Policy',
  description: 'Privacy policy for our language learning flashcard bot',
  path: '/privacy'
})

export default function PrivacyPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Link href="/" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
            ← Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">Privacy Policy</h1>

          <div className="bg-white rounded-lg p-8 shadow-sm prose prose-slate max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 26, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to {SITE_CONFIG.name}. We respect your privacy and are committed to protecting your personal data.
                This privacy policy explains how we collect, use, and safeguard your information when you use our Telegram bot.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you use our bot, we collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your Telegram user ID (for identification)</li>
                <li>Flashcard decks you create</li>
                <li>Words and phrases you add to your decks</li>
                <li>Your learning progress and statistics</li>
                <li>Usage data (when you study, which cards you review)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide the flashcard learning service</li>
                <li>Calculate optimal review times using spaced repetition</li>
                <li>Track your learning progress</li>
                <li>Send you reminders when it's time to study</li>
                <li>Improve our service and user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Data Storage and Security</h2>
              <p className="text-gray-700 leading-relaxed">
                Your data is stored securely on our servers. We implement appropriate technical and organizational
                measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal data. We may share your data only in these cases:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data</li>
                <li>Stop using our service at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Cookies and Analytics</h2>
              <p className="text-gray-700 leading-relaxed">
                This website uses Google Analytics and Yandex Metrika to analyze traffic and improve user experience.
                These services may use cookies to collect anonymous usage data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our service is available to users of all ages. We do not knowingly collect personal information
                from children under 13 without parental consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this privacy policy from time to time. We will notify users of any significant changes
                through our Telegram channel or bot notifications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this privacy policy or your data, please contact us through our{' '}
                <a href={SITE_CONFIG.channelLink} className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                  Telegram channel
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
