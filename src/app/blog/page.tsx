import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Blog - Language Learning Tips and Resources',
  description: 'Learn effective language learning strategies, vocabulary tips, and how to use flashcards with spaced repetition',
  path: '/blog'
})

interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
}

function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog')

  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames
    .filter(filename => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug: filename.replace('.md', ''),
        title: data.title as string,
        excerpt: data.excerpt as string,
        date: data.date as string,
      }
    })

  return posts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-12">
            <Link href="/" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Blog</h1>
            <p className="text-xl text-gray-600">
              Tips, strategies, and insights for effective language learning
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-gray-600">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-500 mb-3 text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
