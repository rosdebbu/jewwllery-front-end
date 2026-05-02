import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import gsap from 'gsap';

interface MapLocationProps {
  onNext: () => void;
}

const MapLocation: React.FC<MapLocationProps> = ({ onNext }) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set(sheetRef.current, { y: '100%' });
    gsap.set(mapRef.current, { opacity: 0 });

    tl.to(mapRef.current, {
      opacity: 1,
      duration: 0.8
    }).to(sheetRef.current, {
      y: 0,
      duration: 0.6
    }, "-=0.4");
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#1A1A1A] overflow-hidden flex flex-col text-champagne">
      
      {/* Map Area */}
      <div ref={mapRef} className="absolute inset-0 z-0 h-[60%] w-full bg-[#E5E3DF]">
        <iframe 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'contrast(1.1) saturate(0.8)' }} 
          loading="lazy" 
          allowFullScreen 
          src="https://www.openstreetmap.org/export/embed.html?bbox=88.39,22.58,88.42,22.60&layer=mapnik"
        ></iframe>
        {/* Gradient fade to black at the bottom of the map */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none"></div>
      </div>

      <div className="flex-1"></div>

      {/* Bottom Sheet Details */}
      <div 
        ref={sheetRef}
        className="relative z-20 w-full max-w-2xl mx-auto bg-gradient-to-br from-[#2A2621]/95 to-[#1A1815]/95 backdrop-blur-2xl border-t border-white/10 rounded-t-[40px] px-6 md:px-8 pt-10 pb-10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col"
        style={{
          backgroundImage: 'url(/assets/home-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundBlendMode: 'overlay'
        }}
      >
        <h1 className="font-serif text-2xl font-medium tracking-wide text-center mb-4">Confirm Your Location</h1>
        
        <p className="text-center text-champagne/70 font-sans text-xs leading-relaxed mb-10 px-4">
          Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, anda page layout
        </p>

        <div className="mb-8">
          <h2 className="font-serif text-xl mb-4 tracking-wide">Address</h2>
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Enter Your Location" 
              defaultValue="Salt Lake, Kolkata"
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-5 pr-14 text-champagne placeholder-champagne/50 outline-none focus:border-[#E6D0AC]/70 transition-colors"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-champagne/70">
              <MapPin size={22} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <button 
          onClick={onNext}
          className="w-full py-4 mt-auto rounded-xl bg-[#E6D0AC] text-[#5C4524] font-serif text-xl tracking-wider hover:bg-white transition-colors duration-300 active:scale-[0.98] font-medium shadow-[0_0_20px_rgba(230,208,172,0.2)]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MapLocation;
