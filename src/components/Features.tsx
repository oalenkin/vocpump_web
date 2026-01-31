export default function Features() {
  const features = [
    {
      icon: '🔄',
      title: 'Science-Backed Method',
      description: 'Algorithm shows cards at optimal times for maximum retention using spaced repetition'
    },
    {
      icon: '📚',
      title: 'Create Your Own Sets',
      description: 'Add words and phrases that matter to you. Unlimited custom decks for any topic'
    },
    {
      icon: '🌍',
      title: 'Popular Languages',
      description: 'Support for English, Spanish, French, German, Italian, Russian, and more'
    },
    {
      icon: '⚡',
      title: 'Learn Anywhere',
      description: 'No extra apps needed - everything works right in Telegram on any device'
    },
    {
      icon: '📊',
      title: 'Track Progress',
      description: 'Statistics on learned words, study streaks, and detailed performance insights'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Why Choose Our Flashcard Bot?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to learn languages effectively, right in Telegram
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow bg-white"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
