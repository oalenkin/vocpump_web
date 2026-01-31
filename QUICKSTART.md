# Quick Start Guide

## Что реализовано ✅

Лендинг для Telegram бота с флэш-картами полностью готов:

- ✅ **Главная страница** с Hero, Features, How It Works, FAQ, Footer
- ✅ **Блог система** с 3 готовыми статьями в Markdown
- ✅ **Privacy Policy** страница
- ✅ **SEO оптимизация** (meta tags, Schema.org, Open Graph)
- ✅ **Analytics** интеграция (Google Analytics + Яндекс.Метрика)
- ✅ **Mobile responsive** дизайн
- ✅ **TypeScript** + **Tailwind CSS**
- ✅ **Production ready** - проект собирается без ошибок

## Быстрый старт

### 1. Установка зависимостей (уже выполнено)

```bash
npm install
```

### 2. Настройка окружения

Создайте файл `.env.local`:

```bash
cp .env.example .env.local
```

Отредактируйте `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_BOT_LINK=https://t.me/your_bot_username
NEXT_PUBLIC_GA_ID=       # опционально
NEXT_PUBLIC_YM_ID=       # опционально
```

### 3. Запуск локально

```bash
npm run dev
```

Откройте http://localhost:3000 в браузере.

### 4. Проверка сборки

```bash
npm run build
npm start
```

## Структура проекта

```
src/
├── app/
│   ├── page.tsx              # Главная страница
│   ├── layout.tsx            # Layout с SEO и analytics
│   ├── globals.css           # Глобальные стили
│   ├── blog/
│   │   ├── page.tsx          # Список статей
│   │   └── [slug]/page.tsx   # Страница статьи
│   └── privacy/page.tsx      # Privacy Policy
├── components/
│   ├── Hero.tsx              # Hero секция
│   ├── Features.tsx          # Фичи бота
│   ├── HowItWorks.tsx        # Как это работает
│   ├── FAQ.tsx               # Вопросы-ответы
│   └── Footer.tsx            # Футер
├── lib/
│   ├── analytics.ts          # Google Analytics + Яндекс.Метрика
│   ├── seo.ts                # SEO helpers
│   └── constants.ts          # Конфигурация сайта
└── content/
    └── blog/                 # Markdown статьи
        ├── spaced-repetition-method.md
        ├── 100-english-words-beginners.md
        └── flashcard-learning-tips.md
```

## Деплой на Vercel

### Вариант 1: Через GitHub (рекомендуется)

1. Загрузите код на GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Зайдите на [vercel.com](https://vercel.com)

3. Нажмите "Add New Project"

4. Выберите ваш репозиторий

5. Добавьте environment variables:
   - `NEXT_PUBLIC_SITE_URL` = https://your-domain.vercel.app
   - `NEXT_PUBLIC_BOT_LINK` = https://t.me/your_bot_username
   - `NEXT_PUBLIC_GA_ID` (опционально)
   - `NEXT_PUBLIC_YM_ID` (опционально)

6. Нажмите "Deploy"

### Вариант 2: Через Vercel CLI

```bash
# Установить CLI
npm install -g vercel

# Войти в аккаунт
vercel login

# Деплой
vercel

# Production деплой
vercel --prod
```

## Что нужно изменить

### 1. Информация о боте

Отредактируйте `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'YourBotName',           // Название вашего бота
  botLink: 'https://t.me/...',   // Ссылка на бота
  channelLink: 'https://t.me/...', // Ссылка на канал
  // ...
}
```

### 2. OG изображение

Замените `public/og-image.jpg` на свое изображение (1200x630px)

### 3. Robots.txt

Отредактируйте `public/robots.txt` и замените домен:

```
Sitemap: https://your-domain.com/sitemap.xml
```

## Полезные команды

```bash
# Разработка
npm run dev

# Production сборка
npm run build

# Запуск production
npm start

# Проверка типов
npm run type-check

# Lint
npm run lint
```

## Страницы для проверки

- http://localhost:3000 - Главная
- http://localhost:3000/blog - Блог
- http://localhost:3000/blog/spaced-repetition-method - Статья
- http://localhost:3000/privacy - Privacy Policy

## Добавление новых статей

1. Создайте файл в `src/content/blog/my-article.md`

2. Добавьте frontmatter:

```markdown
---
title: "Article Title"
excerpt: "Brief description"
date: "2025-01-26"
keywords: ["keyword1", "keyword2"]
---

# Article Title

Your content here...
```

3. Статья автоматически появится в блоге

## Поддержка

Полная документация в [README.md](README.md)

---

**Status:** ✅ Ready for deployment

Проект протестирован и готов к деплою на Vercel!
