import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Search, SlidersHorizontal, Home as HomeIcon, ShoppingBag, MessageSquare, User, HelpCircle, Grid2x2 } from 'lucide-react';

const categories = ['Rings', 'Bracelet', 'Earrings', 'Necklace', 'Rings'];

const popularItems = [
  { id: 1, name: 'Diamond Earrings', category: 'Earrings', price: '₹ 108126', image: '/assets/earrings.png' },
  { id: 2, name: 'Diamond Ring', category: 'Rings', price: '₹ 108126', image: '/assets/ring.png' },
  { id: 3, name: 'Jewellery Set', category: 'Necklaces', price: '₹ 108126', image: '/assets/necklace.png' },
];

const wishlistItems = [
  { id: 1, name: 'Diamond Earrings', category: 'Earrings', price: '₹ 108126', image: '/assets/earrings.png' },
  { id: 2, name: 'Diamond Earrings', category: 'Earrings', price: '₹ 108126', image: '/assets/necklace.png' },
];

interface HomeProps {
  onProductClick: (product: any) => void;
}

const Home: React.FC<HomeProps> = ({ onProductClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple fade in animation for home screen
    gsap.fromTo(containerRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen bg-[#1A1A1A] overflow-y-auto overflow-x-hidden text-champagne pb-24"
      style={{
        backgroundImage: 'url(/assets/home-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay to darken background slightly */}
      <div className="fixed inset-0 bg-black/40 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 md:px-6 pt-6">
        
        {/* Top Glassmorphism Card */}
        <div className="w-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10 rounded-[30px] p-6 backdrop-blur-xl mb-8 shadow-2xl">
          <div className="flex justify-between items-start mb-6">
            <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
              <Grid2x2 size={24} className="text-champagne/80" />
            </div>
            <h1 className="font-serif text-3xl text-champagne uppercase tracking-widest absolute left-1/2 -translate-x-1/2">
              Indiglam
            </h1>
          </div>
          
          <h2 className="font-serif text-2xl mb-1">Hey , Sunshine</h2>
          <p className="text-sm text-champagne/70 font-sans mb-6">Find your favourite item here</p>

          <div className="flex gap-3">
            <div className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2 backdrop-blur-md">
              <Search size={18} className="text-champagne/50" />
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-transparent w-full text-champagne placeholder-champagne/50 outline-none font-sans text-sm"
              />
            </div>
            <button className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors">
              <SlidersHorizontal size={18} className="text-champagne/80" />
            </button>
          </div>
        </div>

        {/* Top Categories */}
        <div className="mb-8">
          <h3 className="font-serif text-2xl mb-4 font-medium tracking-wide">Top Categories</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((category, idx) => (
              <button 
                key={idx} 
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-serif text-lg transition-colors border border-white/10 ${
                  idx === 0 
                    ? 'bg-[#E6D0AC] text-[#5C4524]' 
                    : 'bg-white/5 text-champagne/80 backdrop-blur-sm hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Most Popular */}
        <div className="mb-8">
          <h3 className="font-serif text-2xl mb-4 font-medium tracking-wide">Most Popular</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {popularItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => onProductClick(item)}
                className="min-w-[160px] md:min-w-[200px] bg-white/5 border border-white/10 rounded-[24px] p-3 backdrop-blur-sm flex flex-col group cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="w-full aspect-square rounded-[16px] overflow-hidden mb-3 bg-black">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="font-serif text-sm md:text-base font-medium truncate">{item.name}</h4>
                <p className="text-xs text-champagne/50 font-sans mb-3">{item.category}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-sans text-sm md:text-base font-medium">{item.price}</span>
                  <button className="bg-[#E6D0AC] text-[#5C4524] p-1.5 rounded-lg hover:bg-white transition-colors">
                    <ShoppingBag size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Whishlist */}
        <div className="mb-6">
          <h3 className="font-serif text-2xl mb-4 font-medium tracking-wide">Whishlist</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {wishlistItems.map((item, idx) => (
              <div 
                key={`w-${idx}`} 
                onClick={() => onProductClick(item)}
                className="min-w-[240px] bg-white/5 border border-white/10 rounded-[20px] p-3 backdrop-blur-sm flex gap-3 items-center group cursor-pointer hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 rounded-[12px] overflow-hidden bg-black flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm font-medium truncate">{item.name}</h4>
                  <p className="text-xs text-champagne/50 font-sans mb-1">{item.category}</p>
                  <span className="font-sans text-xs font-medium">{item.price}</span>
                </div>
                <button className="bg-[#E6D0AC] text-[#5C4524] p-1.5 rounded-lg hover:bg-white transition-colors flex-shrink-0">
                  <ShoppingBag size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 px-4 pointer-events-none">
        <div className="w-full max-w-sm bg-gradient-to-t from-black/80 via-black/60 to-transparent absolute bottom-0 h-32 -z-10 pointer-events-none"></div>
        <nav className="w-full max-w-md bg-[#2A2A2A]/90 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex justify-between items-center shadow-2xl pointer-events-auto">
          <NavItem icon={<HomeIcon size={24} />} label="Home" active />
          <NavItem icon={<ShoppingBag size={24} />} label="Shop" />
          <NavItem icon={<MessageSquare size={24} />} label="Chat" />
          <NavItem icon={<User size={24} />} label="Profile" />
          <NavItem icon={<HelpCircle size={24} />} label="Help" />
        </nav>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <button className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-[#E6D0AC]' : 'text-champagne/50 hover:text-champagne/80'}`}>
    {icon}
    <span className="text-[10px] font-serif font-medium tracking-wide">{label}</span>
  </button>
);

export default Home;
