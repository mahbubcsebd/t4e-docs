import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Product - How It Works | Think4Ever',
  description:
    'Explore the eight connected steps of the Think4Ever platform, from configuration to deployment.',
  canonicalUrl: 'https://www.think4ever.com/product/',
});

export default function ProductLayout({ children }) {
  return children;
}
