'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LayoutGrid, Rows } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BLOG_POSTS } from '@/constant/blogData';

export default function BlogPage() {
  const [view, setView] = useState('single'); // 'single' or 'grid'

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100">
      {/* Navigation Padding */}
      <div className="h-8 sm:h-16"></div>

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 pb-20">
        {/* Layout Controls - Responsive spacing */}
        <div className="flex justify-end mb-6 sm:mb-12">
          <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-100 shadow-sm">
            <button
              onClick={() => setView('single')}
              className={cn(
                "p-1.5 sm:p-2 rounded-md transition-all",
                view === 'single' ? "bg-white text-blue-600 shadow-sm border border-gray-100" : "text-gray-400 hover:text-gray-600"
              )}
              title="Single Column View"
            >
              <Rows size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
            <button
              onClick={() => setView('grid')}
              className={cn(
                "p-1.5 sm:p-2 rounded-md transition-all",
                view === 'grid' ? "bg-white text-blue-600 shadow-sm border border-gray-100" : "text-gray-400 hover:text-gray-600"
              )}
              title="3-Column Grid View"
            >
              <LayoutGrid size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
        </div>

        {view === 'single' ? (
          /* Responsive Single Column Feed */
          <div className="space-y-12 sm:space-y-24 max-w-[850px] mx-auto">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg sm:rounded-xl mb-5 sm:mb-8 bg-gray-50 border border-gray-100 shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, 850px"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[12px] sm:text-[15px] text-gray-400 mb-3 sm:mb-4 font-medium">
                    <span>{post.date}</span>
                    <span className="text-gray-200">·</span>
                    <span className="text-gray-900">{post.category}</span>
                  </div>
                  <h2 className="text-[22px] sm:text-[40px] font-bold text-gray-900 leading-[1.2] sm:leading-[1.1] mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors tracking-tight">
                    {post.title}
                  </h2>
                  <p className="text-[15px] sm:text-[19px] text-gray-500 leading-relaxed mb-6 sm:mb-8 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-gray-400 uppercase">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-[15px] font-medium text-gray-500">
                      <span className="text-gray-900">{post.author}</span>
                      <span className="text-gray-200">·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Responsive 3-Column Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-20">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6 bg-gray-50 border border-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-center gap-2 text-[12px] sm:text-[14px] text-gray-400 mb-2 sm:mb-3 font-medium">
                  <span>{post.date}</span>
                  <span className="text-gray-200">·</span>
                  <span className="text-gray-900">{post.category}</span>
                </div>
                <h2 className="text-[18px] sm:text-[22px] font-bold text-gray-900 leading-tight mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-[14px] font-medium text-gray-500">
                    <span className="text-gray-900">{post.author}</span>
                    <span className="text-gray-200">·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* Responsive Newsletter Footer */}
      <footer className="border-t border-gray-100 mt-20 py-16 sm:py-24 bg-[#fafafa]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-[22px] sm:text-[28px] font-bold text-gray-900 mb-3 sm:mb-4">Stay updated</h2>
          <p className="text-[14px] sm:text-[16px] text-gray-500 mb-8 sm:mb-10 max-w-[500px] mx-auto px-4">
            Get the latest insights on architecture-first agentic development delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 px-4">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 text-[14px] sm:text-[15px] focus:outline-none focus:border-blue-500 transition-colors h-11 sm:h-auto"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg text-[14px] sm:text-[15px] hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-blue-500/10 h-11 sm:h-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}
