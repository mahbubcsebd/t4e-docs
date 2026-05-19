import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact Us - Get in Touch | Think4Ever",
  description: "Have questions? Reach out to our team for support or inquiries.",
  canonicalUrl: "https://www.think4ever.com/contact-us/",
});

export default function ContactLayout({ children }) {
  return children;
}
