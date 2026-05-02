import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, Heart } from 'lucide-react';
import gsap from 'gsap';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

interface WishlistProps {
  onBack: () => void;
  onProductClick: (product: Product) => void;
}

const categories = ['All', 'Rings', 'Necklace', 'Earrings', 'Bracelets'];

const initialProducts: Product[] = [
  { id: 1, name: 'Earing', category: 'Earrings', price: 'Rs 90,301', image: '/assets/earrings.png' },
  { id: 2, name: 'Earing', category: 'Earrings', price: 'Rs 90,301', image: '/assets/diamond-vine.png' },
  { id: 3, name: 'Earing', category: 'Earrings', price: 'Rs 90,301', image: '/assets/ring.png' },
  { id: 4, name: 'Earing', category: 'Earrings', price: 'Rs 90,301', image: '/assets/necklace.png' },
  { id: 5, name: 'Earing', category: 'Earrings', price: 'Rs 90,301', image: '/assets/ring.png' },
  { id: 6, name: 'Earing', category: 'Earrings', price: 'Rs 90,301', image: '/assets/diamond-vine.png' },
];

const Wishlist: React.FC<WishlistProps> = ({ onBack, onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set(elementsRef.current, { opacity: 0, y: 20 });

    tl.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    ).to(elementsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.05,
    }, "-=0.3");
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#1A1A1A] overflow-y-auto overflow-x-hidden text-champagne pb-10"
      style={{
        backgroundImage: 'url(/assets/home-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/40 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 md:px-6 pt-12 flex flex-col min-h-screen">
        
        {/* Header */}
        <div ref={addToRefs} className="flex items-center justify-center relative mb-8">
          <button 
            onClick={onBack}
            className="absolute left-0 text-champagne/80 hover:text-champagne transition-colors p-2"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>
          <h1 className="font-serif text-3xl font-medium tracking-wide">Wishlist</h1>
        </div>

        {/* Categories */}
        <div ref={addToRefs} className="mb-8 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-3 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-serif text-sm whitespace-nowrap transition-all border ${
                  activeCategory === category
                    ? 'bg-white/20 text-champagne border-white/30'
                    : 'bg-white/5 text-champagne/60 border-white/10 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10">
          {initialProducts.map((product) => (
            <div 
              ref={addToRefs}
              key={product.id}
              className="flex flex-col group cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square bg-black mb-3 overflow-hidden shadow-lg border border-white/5">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Heart Icon */}
                <button 
                  className="absolute top-3 right-3 text-champagne/70 hover:text-red-400 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent product click when clicking heart
                    // logic to toggle wishlist
                  }}
                >
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Product Details */}
              <div className="flex justify-between items-center px-1">
                <span className="font-serif text-[15px] tracking-wide text-champagne/90">{product.name}</span>
                <span className="font-sans text-[11px] text-champagne/60">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Wishlist;
