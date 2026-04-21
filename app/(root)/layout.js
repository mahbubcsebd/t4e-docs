import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import ScrollToTop from '@/components/sections/ScrollToTop';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col pt-20 sm:pt-0 pb-20 sm:pb-0">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
