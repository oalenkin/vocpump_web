export const SITE_CONFIG = {
  name: 'VocPump',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://vocpump.com',
  botLink: process.env.NEXT_PUBLIC_BOT_LINK || 'https://t.me/vocpump_bot',
  channelLink: 'https://t.me/vocpump',
  description: 'Learn vocabulary effectively with spaced repetition in Telegram. Create custom flashcard decks for English, Spanish, French, and other languages.',
  keywords: [
    'flashcards',
    'language learning',
    'spaced repetition',
    'telegram bot',
    'vocabulary',
    'english learning',
    'spanish learning',
    'french learning'
  ]
}

export const SUPPORTED_LANGUAGES = [
  'English',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Russian',
  'Portuguese',
  'Chinese',
  'Japanese',
  'Korean'
] as const
