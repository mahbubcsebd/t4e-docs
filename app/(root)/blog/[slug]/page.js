'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Share2, Globe, FileText } from 'lucide-react';
import { BLOG_POSTS } from '@/constant/blogData';
import { notFound } from 'next/navigation';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100">
      {/* Navigation Padding */}
      <div className="h-6 sm:h-12"></div>

      <article className="max-w-[800px] mx-auto px-4 sm:px-6 pb-24">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-semibold text-gray-500 hover:text-blue-600 transition-colors mb-8 sm:mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Header Metadata */}
        <div className="flex items-center gap-2 text-[12px] sm:text-[14px] text-gray-400 mb-4 sm:mb-6 font-medium">
          <span>{post.date}</span>
          <span className="text-gray-200">·</span>
          <span className="text-gray-900 font-semibold">{post.category}</span>
        </div>

        {/* Title */}
        <h1 className="text-[28px] sm:text-[48px] lg:text-[56px] font-bold text-gray-900 leading-[1.15] mb-6 sm:mb-8 tracking-tight">
          {post.title}
        </h1>

        {/* Author Metadata */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-8 mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center text-[12px] sm:text-[14px] font-bold text-gray-400 uppercase">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="text-[14px] sm:text-[16px] font-bold text-gray-900 leading-tight">
                {post.author}
              </div>
              <div className="text-[12px] sm:text-[14px] text-gray-500 font-medium">
                {post.readTime} read
              </div>
            </div>
          </div>
          
          {/* Social Share (Hidden on very small screens, visible on mobile) */}
          <div className="flex items-center gap-2 sm:gap-4 text-gray-400">
            <button className="p-2 hover:text-blue-600 transition-colors"><Globe size={18} /></button>
            <button className="p-2 hover:text-gray-900 transition-colors"><FileText size={18} /></button>
            <button className="p-2 hover:text-gray-900 transition-colors"><Share2 size={18} /></button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl mb-10 sm:mb-16 bg-gray-50 border border-gray-100 shadow-sm">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-[16px] sm:prose-p:text-[18px] prose-li:text-gray-600 prose-strong:text-gray-900">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Bottom CTA / Tags */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-gray-100">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-6">Explore more in {post.category}</h3>
          <div className="flex flex-wrap gap-2">
            {['AI', 'Architecture', 'Future of Dev', 'Think4Ever'].map(tag => (
              <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-[13px] sm:text-[14px] font-medium border border-gray-100 cursor-default">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Recommended Reading Footer */}
      <section className="bg-[#fafafa] py-16 sm:py-24 border-t border-gray-100">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h2 className="text-[22px] sm:text-[28px] font-bold text-gray-900">Recommended Reading</h2>
            <Link href="/blog" className="text-blue-600 font-bold text-[14px] sm:text-[16px] hover:underline">View all posts</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3).map((recommended) => (
              <Link key={recommended.id} href={`/blog/${recommended.slug}`} className="group block">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg mb-4 bg-white border border-gray-100">
                  <Image
                    src={recommended.image}
                    alt={recommended.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 330px"
                  />
                </div>
                <h4 className="text-[16px] sm:text-[18px] font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {recommended.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
