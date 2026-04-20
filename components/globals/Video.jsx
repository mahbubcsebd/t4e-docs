import React from 'react';
import { cn } from "@/lib/utils";

export const Video = ({ url, className, ...props }) => {
  // Translate youtube watch URL to embed URL
  const getEmbedUrl = (videoUrl) => {
    if (!videoUrl) return '';
    const match = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match && match[1] ? `https://www.youtube.com/embed/${match[1]}?rel=0` : videoUrl;
  };

  return (
    <div className={cn("relative rounded-xl overflow-hidden shadow-xl border border-blue-900/10 bg-black", className)}>
      <iframe
        src={getEmbedUrl(url)}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video player"
        {...props}
      />
    </div>
  );
};
