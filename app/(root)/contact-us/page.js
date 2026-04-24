import { constructMetadata } from '@/lib/metadata';
import ContactPageContent from '@/components/sections/contact/ContactPageContent';

export const metadata = constructMetadata({
  title: "Contact Us - Think4Ever",
  description: "Get in touch with the Think4Ever team. We're here to help you revolutionize your software development life cycle with multi-agent SDLC.",
  canonicalUrl: "https://think4ever.ai/contact-us",
});

export default function Page() {
  return <ContactPageContent />;
}
