import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, MapPin, Wallet, FileText } from 'lucide-react';
import gsap from 'gsap';

interface CheckoutAddressProps {
  onBack: () => void;
  onNext: () => void;
  onAddNewAddress: () => void;
}

const addresses = [
  { id: 1, type: 'Home', details: 'Agartala, Tripura, 799001' },
  { id: 2, type: 'Work', details: 'Agartala, Tripura, 799001' },
  { id: 3, type: 'Other', details: 'Agartala, Tripura, 799001' },
];

const CheckoutAddress: React.FC<CheckoutAddressProps> = ({ onBack, onNext, onAddNewAddress }) => {
  const [selectedId, setSelectedId] = useState(addresses[0].id);
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
      duration: 0.8,
      stagger: 0.1,
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
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/40 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 md:px-6 pt-12 flex flex-col min-h-screen">
        
        {/* Header */}
        <div ref={addToRefs} className="flex items-center justify-center relative mb-12">
          <button 
            onClick={onBack}
            className="absolute left-0 text-champagne/80 hover:text-champagne transition-colors p-2"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>
          <h1 className="font-serif text-3xl font-medium tracking-wide">Address</h1>
        </div>

        {/* Progress Tracker */}
        <div ref={addToRefs} className="flex items-center justify-between px-2 mb-12 relative">
          {/* Connecting Line */}
          <div className="absolute left-[15%] right-[15%] top-6 h-px bg-white/20 -z-10"></div>
          
          {/* Step 1: Address */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#E6D0AC] flex items-center justify-center shadow-[0_0_15px_rgba(230,208,172,0.3)]">
              <MapPin size={20} className="text-[#5C4524]" strokeWidth={2} />
            </div>
            <span className="font-serif text-sm">Address</span>
          </div>

          {/* Step 2: Payment */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <Wallet size={20} className="text-champagne/60" strokeWidth={1.5} />
            </div>
            <span className="font-serif text-sm text-champagne/60">Payment</span>
          </div>

          {/* Step 3: Summary */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <FileText size={20} className="text-champagne/60" strokeWidth={1.5} />
            </div>
            <span className="font-serif text-sm text-champagne/60">Summery</span>
          </div>
        </div>

        {/* Address List */}
        <div className="flex flex-col gap-4 mb-10">
          {addresses.map((address) => (
            <div 
              ref={addToRefs}
              key={address.id} 
              onClick={() => setSelectedId(address.id)}
              className={`w-full p-5 rounded-2xl border transition-all cursor-pointer flex gap-4 items-start ${
                selectedId === address.id
                  ? 'bg-white/10 border-white/30 backdrop-blur-md'
                  : 'bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10'
              }`}
            >
              <div className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                selectedId === address.id ? 'border-[#E6D0AC]' : 'border-champagne/50'
              }`}>
                {selectedId === address.id && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E6D0AC]"></div>
                )}
              </div>
              
              <div className="flex flex-col">
                <h3 className="font-serif text-lg tracking-wide mb-1">{address.type}</h3>
                <p className="font-sans text-sm text-champagne/70">{address.details}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Address Button */}
        <div ref={addToRefs} className="mb-auto">
          <button 
            onClick={onAddNewAddress}
            className="w-full py-4 rounded-xl bg-[#E6D0AC] text-[#5C4524] font-serif text-lg tracking-wide hover:bg-white transition-colors duration-300 active:scale-[0.98] font-medium"
          >
            Add New Address
          </button>
        </div>

        {/* Next Button */}
        <div className="fixed bottom-0 left-0 right-0 z-50 px-4 md:px-6 pb-8 pt-4 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent flex justify-center">
          <div className="w-full max-w-2xl">
            <button 
              onClick={onNext}
              className="w-full py-4 rounded-xl bg-[#E6D0AC] text-[#5C4524] font-serif text-xl tracking-wider hover:bg-white transition-colors duration-300 active:scale-[0.98] font-medium shadow-[0_0_20px_rgba(230,208,172,0.2)]"
            >
              Next
            </button>
            <div className="w-1/3 h-1 bg-white/20 rounded-full mx-auto mt-6"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutAddress;
