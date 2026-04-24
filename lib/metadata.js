export function constructMetadata({
  title = "Think4Ever - AI-Powered Full System SDLC",
  description = "The fastest path from idea to production. Think4Ever is the first multi-agent SDLC platform that designs, builds, and deploys production-ready systems end-to-end.",
  image = "/assets/images/think4ever-logo.png",
  icons = [
    {
      rel: "icon",
      url: "/new_site/favicon.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/new_site/favicon.png",
    }
  ],
  noIndex = false,
  canonicalUrl = "https://www.think4ever.com/new_site/",
} = {}) {
  const siteName = "Think4Ever";
  const baseUrl = "https://www.think4ever.com/new_site";
  const fullImageUrl = `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords: [
      "AI SDLC", 
      "AI-Powered Development", 
      "Multi-agent AI", 
      "System Architecture", 
      "Software Modernization", 
      "Think4Ever",
      "Fastest path from idea to production"
    ],
    applicationName: siteName,
    authors: [{ name: "Think4Ever Team", url: baseUrl }],
    creator: "Think4Ever",
    publisher: siteName,
    // CRITICAL: Linking to the actual hosted URL for social scrapers
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteName,
      images: [
        {
          url: fullImageUrl, // Absolute URL is much safer for WhatsApp
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
      creator: "@think4ever",
    },
    icons,
    verification: {
      google: "google-site-verification-id",
    },
    other: {
      "msapplication-TileColor": "#ffffff",
      "theme-color": "#ffffff",
      "og:image:secure_url": fullImageUrl,
      "og:image:type": "image/png",
    }
  };
}
