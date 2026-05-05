import React, { useEffect, useRef } from 'react';
import { ChevronLeft, Home as HomeIcon, Heart, Percent, ShoppingBag, Bell, MapPin, Phone, LogOut } from 'lucide-react';
import gsap from 'gsap';

interface ProfileProps {
  onBack: () => void;
  onHomeClick: () => void;
  onLogout: () => void;
  onWishlistClick: () => void;
  onOfferClick: () => void;
  onContactUsClick: () => void;
  onMyOrderClick: () => void;
  onTrackOrderClick: () => void;
}

const menuItems = [
  { id: 1, label: 'Home', icon: HomeIcon, onClick: 'home' },
  { id: 2, label: 'Whilslist', icon: Heart },
  { id: 3, label: 'Offer', icon: Percent },
  { id: 4, label: 'My Order', icon: ShoppingBag },
  { id: 5, label: 'Notification', icon: Bell },
  { id: 6, label: 'Track my order', icon: MapPin },
  { id: 7, label: 'Contact us', icon: Phone },
];

const Profile: React.FC<ProfileProps> = ({ onBack, onHomeClick, onLogout, onWishlistClick, onOfferClick, onContactUsClick, onMyOrderClick, onTrackOrderClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set(elementsRef.current, { opacity: 0, x: -20 });

    tl.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    ).to(elementsRef.current, {
      opacity: 1,
      x: 0,
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

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 pt-12 flex flex-col min-h-screen">
        
        {/* Header */}
        <div ref={addToRefs} className="flex items-center justify-center relative mb-12">
          <button 
            onClick={onBack}
            className="absolute left-0 text-champagne/80 hover:text-champagne transition-colors p-2 -ml-2"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>
          <h1 className="font-serif text-3xl font-medium tracking-wide">My Account</h1>
        </div>

        {/* Profile Info */}
        <div ref={addToRefs} className="flex flex-col items-start mb-10">
          <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="font-serif text-2xl tracking-wide">Ms Anupama</h2>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-6 mb-16 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                ref={addToRefs}
                key={item.id} 
                onClick={() => {
                  if (item.label === 'Home') onHomeClick();
                  if (item.label === 'Whilslist') onWishlistClick();
                  if (item.label === 'Offer') onOfferClick();
                  if (item.label === 'My Order') onMyOrderClick();
                  if (item.label === 'Track my order') onTrackOrderClick();
                  if (item.label === 'Contact us') onContactUsClick();
                }}
                className="flex items-center gap-6 cursor-pointer group"
              >
                <div className="text-champagne/70 group-hover:text-[#E6D0AC] transition-colors">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <span className="font-serif text-[19px] tracking-wide text-champagne/90 group-hover:text-[#E6D0AC] transition-colors">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Log Out Button */}
        <div ref={addToRefs} className="mb-8">
          <button 
            onClick={onLogout}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-[14px] bg-[#E6D0AC] text-[#5C4524] hover:bg-white transition-all active:scale-[0.98] font-medium group"
          >
            <LogOut size={20} strokeWidth={2} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-serif text-lg tracking-wide font-semibold">Log out</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;
