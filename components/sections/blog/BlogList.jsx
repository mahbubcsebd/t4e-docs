'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const BlogList = ({ view, posts }) => {
  if (view === 'single') {
    return (
      <div className="space-y-12 sm:space-y-24 max-w-[850px] mx-auto">
        {posts.map((post) => (
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
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-20">
      {posts.map((post) => (
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
  );
};
