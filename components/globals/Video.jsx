'use client';
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import Image from 'next/image';

export const Video = ({ url, className, thumbnail, title, ...props }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Translate youtube watch URL to embed URL
  const getEmbedUrl = (videoUrl, autoplay = false) => {
    if (!videoUrl) return '';
    const match = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    let embedUrl = match && match[1] ? `https://www.youtube.com/embed/${match[1]}?rel=0` : videoUrl;
    if (autoplay) {
      embedUrl += embedUrl.includes('?') ? '&autoplay=1' : '?autoplay=1';
    }
    return embedUrl;
  };

  return (
    <div className={cn("relative rounded-xl overflow-hidden shadow-xl border border-blue-900/10 bg-black group", className)}>
      {!isPlaying && thumbnail && (
        <div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer bg-gradient-to-br from-[#4161a0] to-[#253965]"
          onClick={() => setIsPlaying(true)}
        >
          {/* Logo Container */}
          <div className="bg-white p-2 px-4 rounded-sm shadow-sm mb-6">
            <div className="relative w-[120px] h-[30px] sm:w-[150px] sm:h-[40px]">
               <Image 
                 src={thumbnail} 
                 alt="Logo" 
                 fill 
                 sizes="150px"
                 className="object-contain" 
               />
            </div>
          </div>

          {/* Play Button */}
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#6366f1]/80 backdrop-blur-sm rounded-full shadow-lg transition-transform group-hover:scale-110 mb-6">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>

          {/* Title Text */}
          {title && (
            <p className="text-white/90 text-[10px] sm:text-[13px] font-bold tracking-tight px-4 text-center">
              {title}
            </p>
          )}
        </div>
      )}

      {(!thumbnail || isPlaying) && (
        <iframe
          src={getEmbedUrl(url, isPlaying && thumbnail)}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video player"
          {...props}
        />
      )}
    </div>
  );
};
