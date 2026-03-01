import image_b8e448305bfc7639708ea5b782a1a13e70ff5073 from '@/assets/b8e448305bfc7639708ea5b782a1a13e70ff5073.png';
import image_dce427af356b979ad8dc6558e9291fd8eedfe672 from '@/assets/dce427af356b979ad8dc6558e9291fd8eedfe672.png';
import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import logoImage from '@/assets/f1b9da011dbec66046095dae21ffc1c35f40a927.png';
import headerLogoImage from '@/assets/b8e448305bfc7639708ea5b782a1a13e70ff5073.png';

const NAV_SECTION_IDS = ['vision', 'roadmap', 'products', 'contact'] as const;

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string | null>('vision');
  const location = useLocation();

  const navLinks = [
    { name: '愿景', href: '#vision' },
    { name: '发展规划', href: '#roadmap' },
    { name: '产品生态', href: '#products' },
    { name: '联系我们', href: '#contact' },
  ];

  React.useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(null);
      return;
    }
    const headerOffset = 120;
    const contactVisibleThreshold = window.innerHeight - 100; // 底部「联系我们」进入视口即高亮
    const handleScroll = () => {
      let current: string | null = null;
      for (const id of NAV_SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (id === 'contact') {
          if (top < contactVisibleThreshold) current = id;
        } else {
          if (top <= headerOffset) current = id;
        }
      }
      setActiveSection((prev) => (current !== null ? current : prev ?? 'vision'));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const goToVision = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/#vision"
            onClick={goToVision}
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            aria-label="返回首页愿景"
          >
            <img src={image_b8e448305bfc7639708ea5b782a1a13e70ff5073} alt="大航蜂" className="h-10 w-auto rounded-md shadow-sm" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-300 text-sm font-medium tracking-wide ${
                    isActive ? 'text-[#E5C05C]' : 'text-gray-300 hover:text-[#E5C05C]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-[#E5C05C] hover:bg-[#C69A3C] text-[#0A0A0A] font-semibold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(229,192,92,0.3)] hover:shadow-[0_0_20px_rgba(229,192,92,0.5)]"
            >
              合作咨询
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#111111] border-b border-white/5"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-3 text-base font-medium rounded-lg ${
                    isActive ? 'text-[#E5C05C] bg-white/5' : 'text-gray-300 hover:text-[#E5C05C] hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              className="block w-full text-center mt-4 px-6 py-3 rounded-lg bg-[#E5C05C] text-[#0A0A0A] font-semibold"
              onClick={() => setIsOpen(false)}
            >
              合作咨询
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
