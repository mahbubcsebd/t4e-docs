import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';
import ScrollToTop from '@/components/sections/ScrollToTop';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
