import React, { useEffect, useRef } from 'react';
import { ChevronLeft, Layout, CheckSquare, Package, Truck, User, Home as HomeIcon, ShoppingBag, MessageSquare, HelpCircle, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

interface OrderDetailsProps {
  onBack: () => void;
  onHomeClick: () => void;
  onProfileClick: () => void;
}

const orderItems = [
  { id: 1, name: 'Diamond Ring', price: 108126, status: 'Ordered', image: '/assets/ring.png' },
  { id: 2, name: 'Earrings', price: 108126, status: 'Ordered', image: '/assets/earrings.png' }
];

const statuses = [
  { id: 1, label: 'Order Placed', icon: Layout, completed: true, active: true },
  { id: 2, label: 'Accepted', icon: CheckSquare, completed: true, active: true },
  { id: 3, label: 'In Progress', icon: Package, completed: false, active: false },
  { id: 4, label: 'On The Way', icon: Truck, completed: false, active: false },
  { id: 5, label: 'Delivered', icon: User, completed: false, active: false }
];

const OrderDetails: React.FC<OrderDetailsProps> = ({ onBack, onHomeClick, onProfileClick }) => {
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
      className="relative w-full min-h-screen bg-[#1A1A1A] overflow-y-auto overflow-x-hidden text-champagne pb-32"
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
          <h1 className="font-serif text-3xl font-medium tracking-wide">Order Details</h1>
        </div>

        {/* Order Info */}
        <div ref={addToRefs} className="mb-6 px-2">
          <h2 className="font-serif text-xl tracking-wide mb-1">Order ID : <span className="font-sans text-lg">085325790RTF</span></h2>
          <p className="font-sans text-sm text-champagne/60">Order Date : September 21,2025</p>
        </div>

        {/* Order Items Card */}
        <div ref={addToRefs} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md mb-10 shadow-lg">
          <div className="flex flex-col gap-5">
            {orderItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center relative">
                <div className="w-16 h-16 rounded-[14px] overflow-hidden bg-black flex-shrink-0 border border-white/10">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-serif text-base tracking-wide mb-0.5">{item.name}</h3>
                  <p className="font-sans text-xs text-champagne/70 mb-1">₹ {item.price}</p>
                  <p className="font-sans text-[10px] text-champagne/50">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Status Timeline */}
        <div ref={addToRefs} className="px-2">
          <h2 className="font-serif text-2xl tracking-wide mb-8">Order Status</h2>

          <div className="flex flex-col relative pl-4">
            {statuses.map((status, index) => {
              const Icon = status.icon;
              const isLast = index === statuses.length - 1;
              const hasConnectingLine = !isLast;
              
              // The line connects to the next item. If this item is completed, 
              // the line should be gold ONLY IF the next item is also completed.
              // In the design, Order Placed -> Accepted has a gold line.
              // Accepted -> In Progress has a grey line.
              const nextStatus = statuses[index + 1];
              const isLineGold = status.completed && nextStatus?.completed;

              return (
                <div key={status.id} className="relative flex items-center mb-10 last:mb-0 group cursor-default">
                  {/* Timeline Node */}
                  <div className="absolute left-[-11px] top-1 z-10 bg-[#1A1A1A] rounded-full p-0.5">
                    {status.completed ? (
                      <div className="w-5 h-5 rounded-full bg-[#E6D0AC] flex items-center justify-center shadow-[0_0_10px_rgba(230,208,172,0.4)]">
                        <CheckCircle2 size={16} className="text-[#5C4524]" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-black border-[1.5px] border-champagne/40 flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-transparent" />
                      </div>
                    )}
                  </div>

                  {/* Connecting Line */}
                  {hasConnectingLine && (
                    <div 
                      className={`absolute left-[-2px] top-6 bottom-[-34px] w-[2px] -z-0 ${
                        isLineGold ? 'bg-[#E6D0AC]' : 'bg-white/10'
                      }`}
                    ></div>
                  )}

                  {/* Status Content */}
                  <div className="flex-1 flex justify-between items-center pl-8">
                    <span className={`font-serif text-lg tracking-wide ${status.completed ? 'text-champagne' : 'text-champagne/60'}`}>
                      {status.label}
                    </span>
                    <Icon size={20} strokeWidth={1.5} className={status.completed ? 'text-champagne/90' : 'text-champagne/40'} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 px-4 pointer-events-none">
        <div className="w-full max-w-sm bg-gradient-to-t from-black/80 via-black/60 to-transparent absolute bottom-0 h-32 -z-10 pointer-events-none"></div>
        <nav className="w-full max-w-md bg-[#2A2A2A]/90 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex justify-between items-center shadow-2xl pointer-events-auto">
          <NavItem icon={<HomeIcon size={24} />} label="Home" onClick={onHomeClick} />
          <NavItem icon={<ShoppingBag size={24} />} label="Shop" />
          <NavItem icon={<MessageSquare size={24} />} label="Chat" />
          <NavItem icon={<User size={24} />} label="Profile" active onClick={onProfileClick} />
          <NavItem icon={<HelpCircle size={24} />} label="Help" />
        </nav>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-[#E6D0AC]' : 'text-champagne/50 hover:text-champagne/80'}`}>
    {icon}
    <span className="text-[10px] font-serif font-medium tracking-wide">{label}</span>
  </button>
);

export default OrderDetails;
