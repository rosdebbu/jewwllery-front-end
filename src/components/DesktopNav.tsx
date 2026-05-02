import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import gsap from 'gsap';

interface DesktopNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onProfileClick: () => void;
  onWishlistClick: () => void;
  onCartClick: () => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  currentPage,
  onNavigate,
  onProfileClick,
  onWishlistClick,
  onCartClick,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo('.desktop-nav', 
      { y: -60, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const navLinks = [
    { label: 'Home', key: 'home' },
    { label: 'Page', key: 'page' },
    { label: 'Shop', key: 'shop' },
    { label: 'Blog', key: 'blog' },
    { label: 'Contact Us', key: 'contact-us' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="w-full bg-[#C77E18] text-center py-2 px-4 z-50 relative">
        <p className="text-xs md:text-sm text-black font-sans tracking-wide">
          You will get a <span className="font-bold">30% discount</span> on first booking.
        </p>
      </div>

      {/* Main Navigation */}
      <nav
        className={`desktop-nav w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0D0D0D]/95 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-[#E6D0AC]/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
          {/* Left — Phone */}
          <div className="flex items-center gap-2 min-w-[200px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E6D0AC]/50">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="text-[#E6D0AC]/60 text-sm font-sans">(01) 235-6189005</span>
          </div>

          {/* Center — Logo + Nav Links */}
          <div className="flex flex-col items-center gap-3">
            <h1 
              className="font-serif text-2xl lg:text-3xl text-[#E6D0AC] uppercase tracking-[0.2em] font-medium cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              Indiglam
            </h1>
            <div className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => onNavigate(link.key)}
                  className={`font-sans text-sm tracking-wide transition-all duration-200 relative pb-1 ${
                    currentPage === link.key
                      ? 'text-[#E6D0AC] font-medium'
                      : 'text-[#E6D0AC]/60 hover:text-[#E6D0AC]'
                  }`}
                >
                  {link.label}
                  {currentPage === link.key && (
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[#C77E18]"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right — Icons */}
          <div className="flex items-center gap-5 min-w-[200px] justify-end">
            <button
              onClick={onProfileClick}
              className="text-[#E6D0AC]/60 hover:text-[#E6D0AC] transition-colors"
            >
              <User size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={onWishlistClick}
              className="text-[#E6D0AC]/60 hover:text-[#E6D0AC] transition-colors"
            >
              <Heart size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={onCartClick}
              className="text-[#E6D0AC]/60 hover:text-[#E6D0AC] transition-colors relative"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNav;
