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
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.think4ever.com/new_site";
  const basePath = "/new_site";
  
  // Ensure we don't have double slashes and the image path is absolute
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  
  // If the image already starts with the basePath, we use the root domain part of baseUrl
  // Otherwise we append the basePath part if it's missing
  let fullImageUrl = "";
  const cleanImagePath = image.startsWith('/') ? image : `/${image}`;
  
  if (cleanImagePath.startsWith(basePath)) {
    // If image already has /new_site, use the domain part of baseUrl
    const domainUrl = cleanBaseUrl.replace(basePath, "");
    fullImageUrl = `${domainUrl}${cleanImagePath}`;
  } else {
    fullImageUrl = `${cleanBaseUrl}${cleanImagePath}`;
  }

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
