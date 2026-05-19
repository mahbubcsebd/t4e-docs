'use client';
import { useState } from 'react';
import { BLOG_POSTS } from '@/constant/blogData';
import { BlogViewSwitcher } from '@/components/sections/blog/BlogViewSwitcher';
import { BlogList } from '@/components/sections/blog/BlogList';
import { BlogNewsletter } from '@/components/sections/blog/BlogNewsletter';

export default function BlogPage() {
  const [view, setView] = useState('single');

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100">
      {/* Navigation Padding */}
      <div className="h-8 sm:h-16"></div>

      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 pb-20">
        <BlogViewSwitcher view={view} setView={setView} />
        <BlogList view={view} posts={BLOG_POSTS} />
      </main>

      <BlogNewsletter />
    </div>
  );
}
