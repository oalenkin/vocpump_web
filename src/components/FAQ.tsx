'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How does spaced repetition work?',
      answer:
        'Spaced repetition is a learning method where material is reviewed at increasing intervals. The bot automatically determines when you need to review each word to remember it long-term.',
    },
    {
      question: 'Which languages are supported?',
      answer:
        "Currently supported: English, Spanish, French, German, Italian, Russian, Portuguese, Chinese, Japanese, Korean, and more. We're constantly adding new languages.",
    },
    {
      question: 'Can I create my own decks?',
      answer:
        'Yes! You can build unlimited custom flashcard decks with any words or phrases. You can also pick from our library of ready-made decks or import an existing Anki (.apkg) file.',
    },
    {
      question: 'Is the bot free?',
      answer:
        'Yes, the basic functionality is completely free. We plan to add premium features in the future, but core learning will always remain free.',
    },
    {
      question: 'Do I need to install an app?',
      answer:
        'No, everything works right in Telegram. Just open the bot and start learning. No downloads, no extra apps.',
    },
    {
      question: 'How often should I study?',
      answer:
        'We recommend studying daily for at least 10–15 minutes. Consistency matters more than session length. The bot will remind you when it\'s time to review.',
    },
    {
      question: 'Can I import cards from Anki?',
      answer:
        'Yes! Upload your .apkg file directly in the bot and your existing Anki flashcard decks will be ready to study with spaced repetition.',
    },
    {
      question: 'Is there progress tracking?',
      answer:
        "Yes, the bot shows how many words you've learned, your streak (consecutive study days), daily statistics, and detailed progress over time.",
    },
    {
      question: 'What happens if I miss a day?',
      answer:
        "Don't worry! The algorithm adjusts to your schedule. Cards you missed will appear in your next session. Consistency is ideal, but life happens!",
    },
    {
      question: 'Can I study multiple languages at once?',
      answer:
        'Absolutely! You can create separate decks for different languages and switch between them anytime. Each deck has its own progress tracking.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-white py-20 px-4 sm:py-24">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-vp-dark sm:text-4xl">
          FAQ
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-slate-200/80 bg-white transition hover:border-vp-purple/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-slate-50/80"
              >
                <span className="pr-4 font-semibold text-vp-dark">{faq.question}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-vp-purple transition-transform ${
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
                <div className="border-t border-slate-100 bg-slate-50/50 px-6 py-4">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
