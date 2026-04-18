export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Open the Bot',
      description: 'Find VocPump in Telegram and press Start — no account, no downloads needed',
    },
    {
      number: '02',
      title: 'Choose Your Deck',
      description: 'Pick a ready-made vocabulary deck, upload your Anki file, or build your own from scratch',
    },
    {
      number: '03',
      title: 'Study Daily',
      description: 'The bot schedules each flashcard with spaced repetition — 10–15 minutes a day is enough',
    },
  ]

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-slate-50 to-white py-20 px-4 sm:py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-vp-dark sm:text-4xl">
          How It Works
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="h-full rounded-xl border border-slate-200/80 bg-white p-8 shadow-sm transition hover:border-vp-blue/30 hover:shadow-md">
                <div className="mb-4 text-4xl font-bold text-vp-blue/20">{step.number}</div>
                <h3 className="mb-3 text-xl font-semibold text-vp-dark">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 right-0 hidden translate-x-1/2 -translate-y-1/2 md:block">
                  <span className="text-slate-300">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
