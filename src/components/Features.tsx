export default function Features() {
  const features = [
    {
      icon: '🔄',
      title: 'Spaced Repetition',
      description: 'The algorithm schedules each flashcard at the optimal moment — so you review just before you forget',
    },
    {
      icon: '📖',
      title: 'Ready-Made Decks',
      description: 'Pick from a library of curated vocabulary flashcard decks and start learning immediately',
    },
    {
      icon: '📤',
      title: 'Import from Anki',
      description: 'Already use Anki? Upload your .apkg file and continue with your existing flashcard decks',
    },
    {
      icon: '✏️',
      title: 'Build Your Own Decks',
      description: 'Create custom flashcard decks with any words or phrases — unlimited decks for any topic',
    },
    {
      icon: '🌍',
      title: 'Multiple Languages',
      description: 'English, Spanish, French, German, Italian, Russian, Portuguese, Chinese, Japanese, Korean and more',
    },
    {
      icon: '📊',
      title: 'Track Your Progress',
      description: 'See learned words, study streaks, and daily statistics — all inside Telegram',
    },
  ]

  return (
    <section id="features" className="bg-white py-20 px-4 sm:py-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-vp-dark sm:text-4xl">
          Features
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200/80 bg-white p-6 transition hover:border-vp-purple/30 hover:shadow-lg hover:shadow-vp-purple/5"
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-vp-dark">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
