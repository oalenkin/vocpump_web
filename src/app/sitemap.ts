import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { SITE_CONFIG } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  // Get all blog posts
  const postsDirectory = path.join(process.cwd(), 'src/content/blog')
  let blogPosts: MetadataRoute.Sitemap = []

  if (fs.existsSync(postsDirectory)) {
    const filenames = fs.readdirSync(postsDirectory)

    blogPosts = filenames
      .filter(filename => filename.endsWith('.md'))
      .map((filename) => {
        const filePath = path.join(postsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data } = matter(fileContents)
        const slug = filename.replace('.md', '')

        return {
          url: `${baseUrl}/blog/${slug}`,
          lastModified: new Date(data.date as string),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }
      })
  }

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  return [...staticPages, ...blogPosts]
}
