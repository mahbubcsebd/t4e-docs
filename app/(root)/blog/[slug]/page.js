import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Share2, Globe, FileText } from 'lucide-react';
import { BLOG_POSTS } from '@/constant/blogData';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return {};

  return constructMetadata({
    title: `${post.title} | Think4Ever Blog`,
    description: post.description,
    image: post.image,
    canonicalUrl: `https://www.think4ever.com/new_site/blog/${post.slug}/`,
  });
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fcfdfe] pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <Link 
            href="/blog" 
            className="group flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors font-medium text-[14px]"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to Articles
          </Link>
          
          {/* Social Share */}
          <div className="flex items-center gap-2 sm:gap-4 text-gray-400">
            <button className="p-2 hover:text-blue-600 transition-colors"><Globe size={18} /></button>
            <button className="p-2 hover:text-gray-900 transition-colors"><FileText size={18} /></button>
            <button className="p-2 hover:text-gray-900 transition-colors"><Share2 size={18} /></button>
          </div>
        </div>

        {/* Header Section */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 lg:p-16 shadow-[0_4px_24px_-2px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] border border-gray-100">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-bold tracking-widest rounded-md mb-6 uppercase">
              {post.category}
            </span>
            <h1 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-[#1f2937] leading-[1.15] tracking-tight mb-8">
              {post.title}
            </h1>
            
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] text-gray-400 font-medium">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  {post.author.charAt(0)}
                </div>
                <span className="text-gray-900 font-bold">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-blue-500/5">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-[#1f2937] prose-headings:font-bold prose-p:text-gray-500 prose-p:leading-relaxed prose-strong:text-[#1f2937] prose-strong:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Recommended Reading */}
        <div className="mt-20">
          <h3 className="text-[20px] font-bold text-[#1f2937] mb-8">Recommended Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map((recommended) => (
              <Link 
                key={recommended.id} 
                href={`/blog/${recommended.slug}`}
                className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-4 block">
                  {recommended.category}
                </span>
                <h4 className="text-[17px] font-bold text-[#1f2937] group-hover:text-blue-600 transition-colors leading-snug">
                  {recommended.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
