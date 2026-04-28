import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "FAQ - Frequently Asked Questions | Think4Ever",
  description: "Find answers to the most common questions about the Think4Ever platform.",
  canonicalUrl: "https://www.think4ever.com/new_site/faq/",
});

export default function FAQLayout({ children }) {
  return children;
}
