import { BLOG_POSTS } from '@/constant/blogData';
import { notFound } from 'next/navigation';
import { constructMetadata } from '@/lib/metadata';
import { BlogDetailNav } from '@/components/sections/blog/BlogDetailNav';
import { BlogArticle } from '@/components/sections/blog/BlogArticle';
import { BlogRecommendations } from '@/components/sections/blog/BlogRecommendations';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return {};

  return constructMetadata({
    title: `${post.title} | Think4Ever Blog`,
    description: post.description,
    image: post.image,
    canonicalUrl: `https://www.think4ever.com/blog/${post.slug}/`,
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
        <BlogDetailNav />
        <BlogArticle post={post} />
        <BlogRecommendations posts={BLOG_POSTS} currentPostId={post.id} />
      </div>
    </main>
  );
}
