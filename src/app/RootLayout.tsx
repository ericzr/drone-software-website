import { Outlet } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans selection:bg-[#E5C05C] selection:text-[#0A0A0A]">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
