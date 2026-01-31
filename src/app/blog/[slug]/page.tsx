import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { generateSEO } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/constants'

interface Post {
  slug: string
  title: string
  date: string
  contentHtml: string
}

async function getPost(slug: string): Promise<Post> {
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    contentHtml,
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  return generateSEO({
    title: post.title,
    description: `Article about language learning: ${post.title}`,
    path: `/blog/${slug}`,
  })
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
            ← Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-600">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </header>

          <div
            className="prose prose-lg prose-slate max-w-none
                       prose-headings:font-bold prose-headings:text-gray-900
                       prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                       prose-p:text-gray-700 prose-p:leading-relaxed
                       prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700
                       prose-strong:text-gray-900 prose-strong:font-semibold
                       prose-ul:list-disc prose-ol:list-decimal
                       prose-li:text-gray-700
                       prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:rounded"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Ready to start learning?
              </h3>
              <p className="text-gray-700 mb-4">
                Try our flashcard bot and see results in just one week!
              </p>
              <a
                href={SITE_CONFIG.botLink}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Bot in Telegram
              </a>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  )
}
