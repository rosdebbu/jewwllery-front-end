import React, { useEffect, useRef } from 'react';
import { ChevronLeft, MessageSquare } from 'lucide-react';
import gsap from 'gsap';

interface ContactUsProps {
  onBack: () => void;
  onChatClick?: () => void;
}

const recentOrdered = [
  { id: 1, name: 'Diamond Ring', size: '4.5', price: '₹ 108126', image: '/assets/ring.png', quantity: 1 },
  { id: 2, name: 'Earrings', price: '₹ 108126', image: '/assets/earrings.png', quantity: 1 },
];

const previousOrdered = [
  { id: 3, name: 'Diamond Ring', size: '4.5', price: '₹ 108126', image: 'https://images.unsplash.com/photo-1599643478514-4a4e0f69a5a0?auto=format&fit=crop&w=200&q=80', quantity: 1 },
  { id: 4, name: 'Earrings', price: '₹ 108126', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=200&q=80', quantity: 1 },
];

const OrderCard = ({ item, addToRefs }: { item: any, addToRefs: any }) => (
  <div ref={addToRefs} className="flex items-center gap-4 mb-6 group cursor-pointer">
    <div className="w-28 h-28 rounded-xl overflow-hidden bg-black/40 border border-[#E5D1B9]/30 p-2 shadow-lg flex-shrink-0 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
    </div>
    
    <div className="flex-1 flex flex-col justify-center">
      <h3 className="font-serif text-xl tracking-wide text-champagne mb-1">{item.name}</h3>
      {item.size && <p className="text-champagne/60 text-sm mb-1 font-sans">Size <span className="ml-2">{item.size}</span></p>}
      <p className="text-sm text-champagne/80 font-sans tracking-wide mb-3">{item.price}</p>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-md px-2 py-1">
          <button className="w-5 h-5 flex items-center justify-center text-champagne/50 hover:text-champagne transition-colors pb-0.5">-</button>
          <span className="text-sm font-sans w-3 text-center">{item.quantity}</span>
          <button className="w-5 h-5 flex items-center justify-center text-[#5C4524] bg-[#E6D0AC] rounded-sm hover:bg-white transition-colors pb-0.5">+</button>
        </div>
      </div>
    </div>
    
    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-champagne/50 group-hover:text-champagne group-hover:bg-white/20 transition-all flex-shrink-0">
      <ChevronLeft size={16} className="rotate-180" />
    </div>
  </div>
);

const ContactUs: React.FC<ContactUsProps> = ({ onBack }) => {
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
      stagger: 0.08,
    }, "-=0.3");
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#1A1A1A] overflow-y-auto overflow-x-hidden text-champagne pb-24"
      style={{
        backgroundImage: 'url(/assets/home-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="fixed inset-0 bg-black/40 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 pt-12 flex flex-col min-h-screen">
        
        {/* Header */}
        <div ref={addToRefs} className="flex items-center justify-center relative mb-10">
          <button 
            onClick={onBack}
            className="absolute left-0 text-champagne/80 hover:text-champagne transition-colors p-2 -ml-2"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>
          <h1 className="font-serif text-3xl font-medium tracking-wide">Contact us</h1>
        </div>

        {/* Recent Ordered */}
        <div className="mb-10">
          <h2 ref={addToRefs} className="font-serif text-2xl tracking-wide mb-6">Recent Ordered</h2>
          {recentOrdered.map((item) => (
            <OrderCard key={item.id} item={item} addToRefs={addToRefs} />
          ))}
        </div>

        {/* Previous Ordered */}
        <div>
          <h2 ref={addToRefs} className="font-serif text-2xl tracking-wide mb-6">Previous Ordered</h2>
          {previousOrdered.map((item) => (
            <OrderCard key={item.id} item={item} addToRefs={addToRefs} />
          ))}
        </div>

      </div>

      {/* Floating Chat Button */}
      <button 
        onClick={onChatClick}
        className="fixed bottom-8 right-6 w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-champagne hover:bg-white/20 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] z-50 active:scale-95"
      >
        <MessageSquare size={24} strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default ContactUs;
