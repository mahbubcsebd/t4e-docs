'use client';
import React from 'react';
import Image from 'next/image';

export const BlogArticle = ({ post }) => {
  return (
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
      <div className="mb-12 relative aspect-[2/1] overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
        <Image
          src={post.image}
          alt={post.title}
          fill
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
  );
};
