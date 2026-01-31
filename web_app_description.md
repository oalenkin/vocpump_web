# Prompt для Claude Code: Лендинг для Telegram Flashcards бота

## Контекст проекта

Создаем лендинг-страницу для Telegram бота, который помогает учить языки через flashcards с использованием spaced repetition. Это первый из серии ботов, поэтому важна масштабируемая архитектура.

**ВАЖНО: Базовый язык сайта - АНГЛИЙСКИЙ. Весь контент должен быть на английском языке. В будущем планируется добавить локализацию (русский, испанский и др.), но сейчас фокус на английском.**

---

## РЕАЛИЗОВАТЬ ПРЯМО СЕЙЧАС (MVP - Week 1-2)

### Технический стек:
```
Framework: Next.js 15 (App Router)
Styling: Tailwind CSS
Hosting: Vercel (deployment готовность)
Language: TypeScript
Package Manager: npm или pnpm
Primary Language: English (with future i18n support for Russian, Spanish, etc.)
```

### Структура проекта:

```
flashcards-bot-landing/
├── public/
│   ├── images/
│   │   └── og-image.jpg (создать placeholder 1200x630)
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (главная)
│   │   ├── blog/
│   │   │   ├── page.tsx (список статей)
│   │   │   └── [slug]/
│   │   │       └── page.tsx (отдельная статья)
│   │   └── privacy/
│   │       └── page.tsx
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx (опционально)
│   ├── lib/
│   │   ├── analytics.ts
│   │   ├── seo.ts
│   │   └── constants.ts
│   └── content/
│       └── blog/
│           ├── post-1.md
│           ├── post-2.md
│           └── post-3.md
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 1. INITIAL SETUP

### package.json dependencies:

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next-seo": "^6.5.0",
    "gray-matter": "^4.0.3",
    "remark": "^15.0.1",
    "remark-html": "^16.0.1"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### next.config.ts:

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // SEO optimization
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // Для будущего: мультиязычность
  // i18n: {
  //   locales: ['ru', 'en'],
  //   defaultLocale: 'ru',
  // },
}

export default nextConfig
```

---

## 2. ГЛАВНАЯ СТРАНИЦА (src/app/page.tsx)

### Требования к контенту:

**SEO Meta:**
```typescript
export const metadata = {
  title: 'Language Learning Flashcards in Telegram | [BotName]',
  description: 'Learn vocabulary effectively with spaced repetition in Telegram. Create custom flashcard decks for English, Spanish, French, and other languages.',
  openGraph: {
    title: '[BotName] - Flashcards in Telegram',
    description: 'Learn languages effectively with flashcards and spaced repetition',
    images: ['/og-image.jpg'],
    url: 'https://yourbot.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[BotName] - Flashcards in Telegram',
    description: 'Learn languages effectively with flashcards',
    images: ['/og-image.jpg'],
  },
}
```

### Структура страницы:

```tsx
<main>
  <Hero />
  <Features />
  <HowItWorks />
  <FAQ />
  <Footer />
</main>
```

---

## 3. КОМПОНЕНТЫ (детальные требования)

### Hero.tsx

**Ключевые элементы:**
- H1: "Language Learning Flashcards in Telegram — Master Vocabulary Faster"
- Подзаголовок: "Create custom decks, learn with spaced repetition, track your progress"
- CTA кнопка: "Open Bot in Telegram" → ссылка `https://t.me/yourbotname`
- Визуал: placeholder изображение или скриншот бота

**Дизайн:**
- Gradient background (можно использовать Tailwind gradients)
- Centered layout
- Mobile-first responsive

**Пример структуры:**
```tsx
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Language Learning Flashcards in Telegram
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Create custom decks, learn with spaced repetition, track your progress
        </p>
        <a 
          href="https://t.me/yourbotname" 
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700"
          onClick={() => trackEvent('click_telegram_bot', 'hero')}
        >
          Open Bot in Telegram
        </a>
      </div>
    </section>
  )
}
```

---

### Features.tsx

**3-5 ключевых фич:**

1. **Spaced Repetition**
   - Иконка: 🔄
   - Заголовок: "Science-Backed Method"
   - Описание: "Algorithm shows cards at optimal times for maximum retention"

2. **Custom Decks**
   - Иконка: 📚
   - Заголовок: "Create Your Own Sets"
   - Описание: "Add words and phrases that matter to you"

3. **Popular Languages**
   - Иконка: 🌍
   - Заголовок: "English, Spanish, French & More"
   - Описание: "Support for major world languages"

4. **Right in Telegram**
   - Иконка: ⚡
   - Заголовок: "Learn Anywhere"
   - Описание: "No extra apps needed - everything in Telegram"

5. **Track Progress**
   - Иконка: 📊
   - Заголовок: "Watch Your Growth"
   - Описание: "Statistics on learned words and study streaks"

**Layout:** Grid 3 колонки на desktop, 1 на mobile

---

### HowItWorks.tsx

**3 простых шага:**

```tsx
const steps = [
  {
    number: "01",
    title: "Open the Bot",
    description: "Find our bot in Telegram and press Start"
  },
  {
    number: "02",
    title: "Create a Deck",
    description: "Choose your language and add words you want to learn"
  },
  {
    number: "03",
    title: "Study Daily",
    description: "The bot shows cards at optimal times for retention"
  }
]
```

**Визуал:** Numbered steps с иконками или иллюстрациями

---

### FAQ.tsx

**Минимум 8-10 вопросов:**

```typescript
const faqs = [
  {
    question: "How does spaced repetition work?",
    answer: "Spaced repetition is a learning method where material is reviewed at increasing intervals. The bot automatically determines when you need to review each word to remember it long-term."
  },
  {
    question: "Which languages are supported?",
    answer: "Currently supported: English, Spanish, French, German, Italian, Russian, and more. We're constantly adding new languages."
  },
  {
    question: "Can I create my own decks?",
    answer: "Yes! You can create unlimited decks and add any words and phrases you want to learn."
  },
  {
    question: "Is the bot free?",
    answer: "Yes, the basic functionality is completely free. We plan to add premium features in the future."
  },
  {
    question: "Do I need to install an app?",
    answer: "No, everything works right in Telegram. Just open the bot and start learning."
  },
  {
    question: "How often should I study?",
    answer: "We recommend studying daily for at least 10-15 minutes. Consistency matters more than session length."
  },
  {
    question: "Can I import cards from Anki?",
    answer: "Not yet, but this feature is in development. Stay tuned for updates!"
  },
  {
    question: "Is there progress tracking?",
    answer: "Yes, the bot shows how many words you've learned, your streak (consecutive days), and other statistics."
  }
]
```

**Дизайн:** Accordion (раскрывающиеся вопросы) или простой список

---

### Footer.tsx

**Секции:**

```tsx
<footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Колонка 1: О проекте */}
    <div>
      <h3 className="font-bold mb-4">About</h3>
      <p className="text-gray-400">
        Telegram bot for effective language learning through flashcards
      </p>
    </div>
    
    {/* Колонка 2: Ссылки */}
    <div>
      <h3 className="font-bold mb-4">Resources</h3>
      <ul className="space-y-2">
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/privacy">Privacy Policy</Link></li>
        <li><a href="https://t.me/yourbotname">Open Bot</a></li>
      </ul>
    </div>
    
    {/* Колонка 3: Соцсети */}
    <div>
      <h3 className="font-bold mb-4">Connect</h3>
      <div className="flex space-x-4">
        {/* Иконки соцсетей - использовать lucide-react или heroicons */}
        <a href="https://t.me/yourchannel">Telegram Channel</a>
      </div>
    </div>
  </div>
  
  <div className="text-center mt-8 text-gray-500">
    © 2025 [BotName]. All rights reserved.
  </div>
</footer>
```

---

## 4. SEO OPTIMIZATION

### src/lib/seo.ts

```typescript
import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
}

export function generateSEO({ 
  title, 
  description, 
  path = '', 
  image = '/og-image.jpg' 
}: SEOProps): Metadata {
  const baseUrl = 'https://yourbot.com'
  const url = `${baseUrl}${path}`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [image],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  }
}

// Schema.org structured data
export function generateSchemaOrg() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "[BotName]",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Telegram",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Language learning flashcards in Telegram with spaced repetition",
    "featureList": [
      "Spaced repetition algorithm",
      "Custom deck creation",
      "Popular language support",
      "Progress tracking"
    ]
  }
}
```

### Использование в layout.tsx:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaOrg = generateSchemaOrg()
  
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## 5. ANALYTICS SETUP

### src/lib/analytics.ts

```typescript
// Google Analytics 4
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Яндекс.Метрика
export const YM_TRACKING_ID = process.env.NEXT_PUBLIC_YM_ID || ''

export const ymPageview = (url: string) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(YM_TRACKING_ID, 'hit', url)
  }
}

// TypeScript declarations
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    ym: (...args: any[]) => void
  }
}
```

### Интеграция в layout.tsx:

```tsx
import Script from 'next/script'
import { GA_TRACKING_ID, YM_TRACKING_ID } from '@/lib/analytics'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
        
        {/* Яндекс.Метрика */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
            ym(${YM_TRACKING_ID}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## 6. БЛОГ СИСТЕМА

### src/app/blog/page.tsx

```tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

// Получение всех статей
function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog')
  const filenames = fs.readdirSync(postsDirectory)
  
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
    }
  })
  
  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export default function BlogPage() {
  const posts = getAllPosts()
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-2">{post.date}</p>
            <p className="text-gray-700">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
```

### src/app/blog/[slug]/page.tsx

```tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { generateSEO } from '@/lib/seo'

async function getPost(slug: string) {
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()
  
  return {
    slug,
    title: data.title,
    date: data.date,
    contentHtml,
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  return generateSEO({
    title: post.title,
    description: `Article about language learning: ${post.title}`,
    path: `/blog/${params.slug}`,
  })
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">{post.date}</p>
      <div 
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  )
}
```

---

## 7. ПЕРВЫЕ 3 СТАТЬИ (в Markdown)

### src/content/blog/post-1.md

```markdown
---
title: "How Spaced Repetition Works and Why It's the Most Effective Learning Method"
excerpt: "Understanding the science behind spaced repetition and why it beats traditional cramming"
date: "2025-01-26"
keywords: ["spaced repetition", "learning method", "language learning", "flashcards"]
---

# How Spaced Repetition Works and Why It's the Most Effective Learning Method

Spaced repetition isn't just a trendy term in the language learning world. It's a scientifically proven method that helps you retain information long-term with minimal effort.

## What is Spaced Repetition?

Spaced repetition is a learning technique where material is reviewed at increasing intervals. Instead of reviewing a word 10 times in a row today, you review it:
- Today
- In 1 day
- In 3 days
- In 1 week
- In 2 weeks
- And so on

## The Science Behind It

Research shows that our brain retains information better when we review it just as we're about to forget it. This phenomenon is known as the "Forgetting Curve" discovered by Hermann Ebbinghaus.

### Key Benefits:

1. **Time Efficient** - you only spend time on what truly needs review
2. **Long-term Memory** - information moves to long-term memory instead of being forgotten
3. **Less Effort** - no need to cram for hours

## How It Works in Our Bot

Our Telegram bot automatically determines the optimal time to review each word. You simply:
1. Add words to your deck
2. Study when the bot reminds you
3. Rate how well you remember

The algorithm adapts to you, showing difficult words more frequently and easy ones less often.

## Start Right Now

Try spaced repetition in action with our [Telegram bot](https://t.me/yourbotname). You'll see results after just one week of regular practice!

**Keywords:** spaced repetition, learning method, language learning, flashcards, effective studying
```

### src/content/blog/post-2.md

```markdown
---
title: "100 Most Important English Words for Beginners"
excerpt: "Essential vocabulary to start your English learning journey"
date: "2025-01-25"
keywords: ["english vocabulary", "english words", "english for beginners", "basic vocabulary"]
---

# 100 Most Important English Words for Beginners

Starting to learn English can be challenging. But here's the good news: just 100 carefully chosen words can cover about 50% of everyday conversation!

## Why These Words?

We selected words based on frequency in spoken English. These are the words you'll hear and use most often.

## Categories of Essential Words

### Personal Pronouns (8 words)
- I
- you
- he
- she
- it
- we
- they
- who

### Action Verbs (20 words)
- be
- have
- do
- say
- go
- get
- make
- know
- think
- take
- see
- come
- want
- use
- find
- give
- tell
- work
- call
- try

### Nouns (30 words)
- time
- year
- people
- way
- day
- man
- thing
- woman
- life
- child
- world
- school
- state
- family
- student
- group
- country
- problem
- hand
- part
- place
- case
- week
- company
- system
- program
- question
- work
- number
- night

### Adjectives (15 words)
- good
- new
- first
- last
- long
- great
- little
- own
- other
- old
- right
- big
- high
- different
- small

### Common Words (27 words)
- the
- a/an
- in
- on
- at
- to
- for
- with
- from
- about
- can
- will
- would
- could
- should
- may
- might
- must
- not
- and
- but
- or
- if
- when
- where
- why
- how

## How to Learn These Words Effectively

1. **Don't try to learn everything at once** - start with 10-15 words
2. **Use in context** - create simple sentences
3. **Review regularly** - 10 minutes daily beats cramming once a week
4. **Use spaced repetition** - our bot automatically reminds you when to review

## Create Your First Deck

Add these words to our [Telegram bot](https://t.me/yourbotname) and start learning today. Just 10 minutes a day - and you'll be amazed at your progress in a month!

**Keywords:** english vocabulary, english words, basic vocabulary, 100 english words, english for beginners
```

### src/content/blog/post-3.md

```markdown
---
title: "5 Tips for Language Learning with Flashcards"
excerpt: "How to use flashcards most effectively to memorize new words"
date: "2025-01-24"
keywords: ["flashcards", "language learning tips", "effective studying", "vocabulary learning"]
---

# 5 Tips for Language Learning with Flashcards

Flashcards are one of the most popular language learning methods. But not everyone uses them correctly. Here are 5 tips to help you learn faster and more effectively.

## 1. Add Context

**Bad:**
```
cat - a small furry animal
```

**Good:**
```
The cat is sleeping on the sofa
```

By learning words in context, you learn how to use them correctly, not just their translation.

## 2. Don't Make Decks Too Large

The ideal deck size for learning is 20-30 new words. Adding 100 words at once makes it hard to remember everything.

**Tip:** Create themed decks
- "At the Cafe" deck
- "At Work" deck
- "Travel" deck

## 3. Study Regularly, But in Small Doses

Better to study 10 minutes daily than one hour once a week.

**Why?**
- The brain needs time to consolidate memory
- Regularity creates a habit
- Short sessions don't cause fatigue

## 4. Use Both Directions

Don't only study "English → Your Language". Practice the reverse too: "Your Language → English".

This helps:
- Activate your active vocabulary
- Learn to recall words quickly when speaking
- Remember words more deeply

## 5. Only Add Words You Need

Don't try to learn the entire dictionary. Add words that:
- You encounter frequently
- Are needed for your goals
- Interest you personally

**Example:** If you're a programmer, you need technical terms. If you're a traveler - tourist vocabulary.

## Bonus: Use Spaced Repetition

Don't review all cards every day. Let the algorithm decide when to show each card.

Our [Telegram bot](https://t.me/yourbotname) automatically uses spaced repetition. Just study when it reminds you!

## Start Applying These Tips

Try these tips in our bot:
1. Create a small deck (20 words)
2. Add usage examples
3. Study 10 minutes daily
4. Follow the bot's reminders

You'll notice the difference in just 2 weeks!

**Keywords:** flashcards, language learning tips, effective studying, vocabulary learning, how to learn words
```

---

## 8. STATIC FILES

### public/robots.txt

```
User-agent: *
Allow: /

# Sitemap
Sitemap: https://yourbot.com/sitemap.xml

# Crawl delay
Crawl-delay: 0
```

### .env.local (не коммитить!)

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YM_ID=XXXXXXXX
NEXT_PUBLIC_BOT_LINK=https://t.me/yourbotname
```

---

## 9. DEPLOYMENT НА VERCEL

### Шаги:

1. **Подключить GitHub репозиторий**
2. **Настроить environment variables:**
   - `NEXT_PUBLIC_GA_ID`
   - `NEXT_PUBLIC_YM_ID`
   - `NEXT_PUBLIC_BOT_LINK`
3. **Deploy**

Vercel автоматически:
- Создаст production build
- Настроит HTTPS
- Сгенерирует sitemap
- Оптимизирует изображения

---

## ПЛАНЫ НА БУДУЩЕЕ (НЕ РЕАЛИЗОВЫВАТЬ СЕЙЧАС)

### Phase 2 (через 2-4 недели):

1. **Мультиязычность (i18n)** - ВАЖНО для будущего
   ```typescript
   // Добавить в next.config.ts
   i18n: {
     locales: ['en', 'ru', 'es', 'fr', 'de'],
     defaultLocale: 'en',
   }
   ```
   
   **Структура для локализации:**
   - Использовать next-intl или react-i18next
   - Создать файлы переводов: `/locales/en.json`, `/locales/ru.json` и т.д.
   - Поддержка языков: Английский (по умолчанию), Русский, Испанский, Французский, Немецкий
   - hreflang теги для SEO

2. **CMS интеграция**
   - Migr from Markdown → Contentful или Strapi
   - UI для добавления статей без кода

3. **Email collection**
   ```tsx
   <form action="/api/subscribe" method="POST">
     <input type="email" required />
     <button>Подписаться на обновления</button>
   </form>
   ```
   - Интеграция с Mailchimp API

4. **A/B тестирование**
   - Разные варианты заголовков
   - Разные CTA кнопки
   - Использовать Vercel Analytics или Posthog

### Phase 3 (через 1-2 месяца):

5. **Admin Dashboard**
   - Просмотр аналитики
   - Управление контентом
   - Мониторинг конверсий

6. **Landing page variants**
   - Отдельные лендинги для разных языков
   - `/english` `/spanish` etc.

7. **Community features**
   - Отзывы пользователей
   - User-generated content
   - Интеграция с Telegram comments

8. **Advanced SEO**
   - FAQ Schema.org
   - BreadcrumbList schema
   - Article schema для блога

---

## КРИТЕРИИ ГОТОВНОСТИ MVP

### ✅ Checklist:

- [ ] Главная страница с Hero, Features, HowItWorks, FAQ
- [ ] Блог с 3 статьями
- [ ] SEO meta теги на всех страницах
- [ ] Schema.org structured data
- [ ] Google Analytics + Яндекс.Метрика
- [ ] Mobile responsive (проверить на телефоне)
- [ ] Lighthouse score > 90
- [ ] Все ссылки на Telegram бота работают
- [ ] Deployed на Vercel
- [ ] Custom domain подключен (опционально)
- [ ] robots.txt и sitemap.xml

---

## ПРИМЕЧАНИЯ ПО РЕАЛИЗАЦИИ

### Стиль кода:
- Использовать TypeScript строго
- Functional components только
- Tailwind CSS для стилей (никакого CSS-in-JS)
- Server Components где возможно (Next.js 15 App Router)

### Performance:
- Lazy loading для изображений (`<Image>` from next/image)
- Dynamic imports для тяжелых компонентов
- Минимизировать bundle size

### Accessibility:
- Semantic HTML (`<article>`, `<nav>`, `<main>`)
- Alt текст для изображений
- Keyboard navigation
- ARIA labels где нужно

### Git workflow:
```bash
main (production)
└── develop (staging)
    ├── feature/hero-section
    ├── feature/blog-system
    └── feature/analytics
```

---

## ВОПРОСЫ ДЛЯ УТОЧНЕНИЯ

1. **Название бота?** (для замены [BotName] и @yourbotname)
2. **Какие языки поддерживает бот?** (для Features секции)
3. **Есть ли уже домен?** (для SEO настроек)
4. **Цветовая схема/брендинг?** (для Tailwind customization)
5. **Есть ли логотип?** (для header/footer)

---

## ПОЛЕЗНЫЕ КОМАНДЫ

```bash
# Инициализация проекта
npx create-next-app@latest flashcards-bot-landing --typescript --tailwind --app

# Development
npm run dev

# Build для production
npm run build

# Проверка типов
npm run type-check

# Lint
npm run lint

# Deploy на Vercel
vercel deploy --prod
```

---

## ИТОГО: ЧТО ДОЛЖНО БЫТЬ СДЕЛАНО

**Создать:**
1. ✅ Next.js 15 проект с TypeScript + Tailwind
2. ✅ Главная страница (Hero, Features, HowItWorks, FAQ, Footer)
3. ✅ Блог система с 3 статьями в Markdown
4. ✅ SEO оптимизация (meta, Schema.org, sitemap)
5. ✅ Analytics (GA4 + Яндекс.Метрика)
6. ✅ Privacy Policy страница
7. ✅ Mobile responsive дизайн
8. ✅ Deploy на Vercel

**Время выполнения:** 1-2 недели

**Результат:** Полностью рабочий MVP лендинг с SEO, готовый к привлечению трафика.