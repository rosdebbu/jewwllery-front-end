import React, { useEffect, useRef } from 'react';
import { ChevronLeft } from 'lucide-react';
import gsap from 'gsap';

interface OffersProps {
  onBack: () => void;
}

const offerItems = [
  {
    id: 1,
    title: 'Cashback',
    discount: '20%',
    validity: 'Buy within 2 Days',
    image: 'https://images.unsplash.com/photo-1599643478514-4a4e0f69a5a0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Cashback',
    discount: '20%',
    validity: 'Buy within 2 Days',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Cashback',
    discount: '20%',
    validity: 'Buy within 2 Days',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b454bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Cashback',
    discount: '20%',
    validity: 'Buy within 2 Days',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
  }
];

const Offers: React.FC<OffersProps> = ({ onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set(elementsRef.current, { opacity: 0, y: 30 });

    tl.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    ).to(elementsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
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
        <div className="flex items-center justify-center relative mb-8">
          <button 
            onClick={onBack}
            className="absolute left-0 text-champagne/80 hover:text-champagne transition-colors p-2 -ml-2"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>
          <h1 className="font-serif text-3xl font-medium tracking-wide">Offers</h1>
        </div>

        {/* Offers List */}
        <div className="flex flex-col gap-4 mb-10">
          {offerItems.map((offer) => (
            <div 
              ref={addToRefs}
              key={offer.id}
              className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10"
            >
              {/* Background Image */}
              <img 
                src={offer.image} 
                alt="Offer Background" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex items-center justify-between">
                
                {/* Left Side: Text */}
                <div className="flex flex-col h-full justify-end pb-2">
                  <h3 className="font-serif text-2xl tracking-wide text-white mb-1 drop-shadow-md">
                    {offer.title}
                  </h3>
                  <span className="font-serif text-[28px] text-[#E6D0AC] mb-3 drop-shadow-md">
                    {offer.discount}
                  </span>
                  <span className="font-sans text-xs text-white/70">
                    {offer.validity}
                  </span>
                </div>

                {/* Right Side: Button */}
                <div className="self-center">
                  <button className="px-5 py-2 rounded-lg bg-[#E6D0AC] text-[#5C4524] font-serif text-[15px] font-semibold tracking-wide hover:bg-white transition-colors shadow-lg active:scale-95">
                    Explore
                  </button>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Offers;
