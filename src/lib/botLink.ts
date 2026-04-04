import { SITE_CONFIG } from './constants'

/** Telegram `start` deep-link: only A–Z, a–z, 0–9, _; max 64 chars. */
const MAX_START_LEN = 64

function normalizeStartPayload(payload: string): string {
  return payload
    .slice(0, MAX_START_LEN)
    .replace(/[^A-Za-z0-9_]/g, '')
}

function botBaseUrl(): string {
  return SITE_CONFIG.botLink.split('?')[0]
}

/** Full t.me link with `?start=` for attribution (stored in bot as `utm_source`). */
export function botUrlWithStart(startPayload: string): string {
  const base = botBaseUrl()
  const start = normalizeStartPayload(startPayload)
  if (!start) return base
  return `${base}?start=${start}`
}

/** Fixed sources — сайт → бот. */
export const BOT_START = {
  siteHero: 'site_hero',
  siteNav: 'site_nav',
  siteFooter: 'site_footer',
} as const

/** CTA внизу статьи блога: отдельный payload на пост (slug из файла .md). */
export function botUrlForBlogPost(slug: string): string {
  const seg = slug
    .replace(/-/g, '_')
    .replace(/[^A-Za-z0-9_]/g, '')
    .slice(0, MAX_START_LEN)
  const payload = `blog_${seg || 'post'}`.slice(0, MAX_START_LEN)
  return botUrlWithStart(payload)
}
