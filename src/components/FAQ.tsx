'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How does spaced repetition work?',
      answer: 'Spaced repetition is a learning method where material is reviewed at increasing intervals. The bot automatically determines when you need to review each word to remember it long-term.'
    },
    {
      question: 'Which languages are supported?',
      answer: 'Currently supported: English, Spanish, French, German, Italian, Russian, Portuguese, Chinese, Japanese, Korean, and more. We\'re constantly adding new languages.'
    },
    {
      question: 'Can I create my own decks?',
      answer: 'Yes! You can create unlimited decks and add any words and phrases you want to learn. Organize them by topic, difficulty, or any way that works for you.'
    },
    {
      question: 'Is the bot free?',
      answer: 'Yes, the basic functionality is completely free. We plan to add premium features in the future, but core learning will always remain free.'
    },
    {
      question: 'Do I need to install an app?',
      answer: 'No, everything works right in Telegram. Just open the bot and start learning. No downloads, no extra apps.'
    },
    {
      question: 'How often should I study?',
      answer: 'We recommend studying daily for at least 10-15 minutes. Consistency matters more than session length. The bot will remind you when it\'s time to review.'
    },
    {
      question: 'Can I import cards from Anki?',
      answer: 'Not yet, but this feature is in development. Stay tuned for updates! You can join our Telegram channel for announcements.'
    },
    {
      question: 'Is there progress tracking?',
      answer: 'Yes, the bot shows how many words you\'ve learned, your streak (consecutive study days), daily statistics, and detailed progress over time.'
    },
    {
      question: 'What happens if I miss a day?',
      answer: 'Don\'t worry! The algorithm adjusts to your schedule. Cards you missed will appear in your next session. Consistency is ideal, but life happens!'
    },
    {
      question: 'Can I study multiple languages at once?',
      answer: 'Absolutely! You can create separate decks for different languages and switch between them anytime. Each deck has its own progress tracking.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about learning with flashcards
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
