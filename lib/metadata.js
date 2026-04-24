export function constructMetadata({
  title = 'Think4Ever - AI-Powered Full System SDLC',
  description = 'Think4Ever is the first multi-agent SDLC platform that designs, builds, and deploys production-ready systems end-to-end.',
  image = '/assets/images/think4ever-og.png',
  icons = '/favicon.ico',
  noIndex = false,
  canonicalUrl = 'https://think4ever.ai',
} = {}) {
  const siteName = 'Think4Ever';

  return {
    title,
    description,
    keywords: [
      'AI SDLC',
      'Software Development',
      'AI Agents',
      'System Architecture',
      'Think4Ever',
    ],
    authors: [{ name: 'Think4Ever Team' }],
    creator: 'Think4Ever',
    publisher: siteName,
    metadataBase: new URL('https://think4ever.ai'), // Crucial for relative images
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@think4ever', // Replace with actual handle
    },
    icons,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
