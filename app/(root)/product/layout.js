import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Product - How It Works | Think4Ever",
  description: "Explore the seven connected steps of the Think4Ever platform, from configuration to deployment.",
  canonicalUrl: "https://www.think4ever.com/new_site/product/",
});

export default function ProductLayout({ children }) {
  return children;
}
