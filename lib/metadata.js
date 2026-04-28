export function constructMetadata({
  title = "Think4Ever - AI-Powered Full System SDLC",
  description = "The fastest path from idea to production. Think4Ever is the first multi-agent SDLC platform that designs, builds, and deploys production-ready systems end-to-end.",
  image = "/assets/images/og-card.png",
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
  
  // Best practice: Use an environment variable, with your target domain as fallback
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.think4ever.com/new_site";
  
  // Ensure we don't have double slashes if the image path already starts with /
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const cleanImagePath = image.startsWith('/') ? image : `/${image}`;
  const fullImageUrl = `${cleanBaseUrl}${cleanImagePath}`;

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
    authors: [{ name: "Think4Ever Team", url: cleanBaseUrl }],
    creator: "Think4Ever",
    publisher: siteName,
    metadataBase: new URL(cleanBaseUrl),
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
          url: fullImageUrl,
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
    }
  };
}
