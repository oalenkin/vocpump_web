export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Open the Bot',
      description: 'Find our bot in Telegram and press Start to begin your learning journey'
    },
    {
      number: '02',
      title: 'Create a Deck',
      description: 'Choose your language and add words you want to learn. Start with 10-20 words'
    },
    {
      number: '03',
      title: 'Study Daily',
      description: 'The bot shows cards at optimal times for retention. Just 10-15 minutes a day!'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow h-full">
                <div className="text-blue-600 font-bold text-5xl mb-4 opacity-20">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
