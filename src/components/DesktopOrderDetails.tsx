import React, { useEffect } from 'react';
import gsap from 'gsap';
import { 
  FileText, 
  ClipboardCheck, 
  Package, 
  Truck, 
  PackageCheck,
  Check,
  Headphones,
  CreditCard
} from 'lucide-react';

const DesktopOrderDetails: React.FC = () => {
  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      '.dorder-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  const steps = [
    { label: 'Order Placed', date: '20 Oct 2025', time: '11:12 AM', icon: FileText, status: 'completed' },
    { label: 'Accepted', date: '20 Oct 2025', time: '11:12 AM', icon: ClipboardCheck, status: 'completed' },
    { label: 'In Progress', date: '20 Oct 2025', time: '11:12 AM', icon: Package, status: 'pending' },
    { label: 'On The Way', date: '20 Oct 2025', time: '11:12 AM', icon: Truck, status: 'pending' },
    { label: 'Delivered', date: '20 Oct 2025', time: '11:12 AM', icon: PackageCheck, status: 'pending' },
  ];

  const products = [
    { name: 'Ring', img: '/assets/ring.png' },
    { name: 'Earrings', img: '/assets/earrings.png' }
  ];

  const features = [
    { title: 'Free Delivery', desc: 'Free Delivery for order above Rs 5000', icon: Package },
    { title: '24 × 7 Support', desc: 'Free Delivery for order above Rs 5000', icon: Headphones },
    { title: 'Flexible Payment', desc: 'Free Delivery for order above Rs 5000', icon: CreditCard },
  ];

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen pt-20 overflow-x-hidden">
      
      {/* ===== HEADER SECTION (Dark) ===== */}
      <section className="w-full relative z-10 bg-[#0A0A0A] overflow-hidden">
        {/* Background Gradient/Image */}
        <div className="absolute inset-0 opacity-40" 
             style={{ backgroundImage: 'url(/assets/login-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0A0A0A]"></div>
        
        <div className="px-6 lg:px-10 py-20 max-w-5xl mx-auto text-center dorder-anim relative z-10 border-b border-[#E6D0AC]/20">
          <h1 className="font-serif text-4xl lg:text-5xl text-[#E6D0AC] tracking-[0.1em] mb-2">
            Track Your Order
          </h1>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="w-full px-6 lg:px-10 py-16 max-w-6xl mx-auto dorder-anim relative z-10">
        
        {/* Order Header */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl text-[#D4BB8E] mb-2">Order Status</h2>
          <p className="font-serif text-xl text-[#D4BB8E]/70">Order ID : #IFDE089637E</p>
        </div>

        {/* Progress Tracker */}
        <div className="w-full flex justify-between relative mb-24 max-w-4xl mx-auto">
          {/* Connecting Line Background */}
          <div className="absolute top-[45px] left-0 right-0 h-1.5 bg-[#EAE7DF] -z-10 rounded-full"></div>
          {/* Active Connecting Line */}
          <div className="absolute top-[45px] left-0 w-[25%] h-1.5 bg-[#D4BB8E] -z-10 rounded-full"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = step.status === 'completed';
            return (
              <div key={index} className="flex flex-col items-center text-center relative z-10 w-24">
                <div className="mb-4 text-[#D4BB8E]">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <span className="font-serif text-[#D4BB8E]/80 text-sm mb-4 whitespace-nowrap">{step.label}</span>
                
                {/* Status Indicator */}
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-4 ${isCompleted ? 'bg-[#D4BB8E]' : 'bg-[#0A0A0A]'}`}>
                  <Check size={14} color={isCompleted ? '#fff' : '#fff'} strokeWidth={3} />
                </div>
                
                <div className="flex flex-col text-[#D4BB8E]/60 font-serif text-sm">
                  <span>{step.date}</span>
                  <span>{step.time}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Products Section */}
        <div className="mb-24">
          <h2 className="font-serif text-2xl text-[#D4BB8E] mb-8">Products</h2>
          <div className="flex flex-col gap-6">
            {products.map((item, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <div className="w-24 h-24 bg-[#0A0A0A] overflow-hidden border border-[#D4BB8E]/20">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <span className="font-serif text-xl text-[#D4BB8E]/80">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-[#D4BB8E]/20">
          {features.map((feature, idx) => {
            const FIcon = feature.icon;
            return (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#D4BB8E]/30 flex items-center justify-center flex-shrink-0 text-[#3A2A14]">
                  <FIcon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#D4BB8E] mb-1">{feature.title}</h3>
                  <p className="font-sans text-sm text-[#D4BB8E]/60">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* ===== LIGHT FOOTER ===== */}
      <footer className="w-full bg-[#EAE7DF] relative overflow-hidden mt-10">
        {/* Leafy Background Image */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: 'url(/assets/necklace.png)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 relative z-10 border-t border-[#D4BB8E]/20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-8">
            {/* About Us */}
            <div className="md:col-span-2">
              <h2 className="font-serif text-2xl text-[#D4BB8E] uppercase tracking-[0.15em] mb-2">Indiglam</h2>
              <h3 className="font-serif text-lg text-[#D4BB8E]/90 mb-4">About us</h3>
              <p className="font-sans text-sm text-[#D4BB8E]/70 leading-relaxed mb-6 max-w-xs">
                Jewellery is more than just an accessory — it's 
                a reflection of personality, heritage, and 
                timeless beauty. From delicate craftsmanship 
                to bold statement pieces,
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {['instagram', 'twitter', 'facebook'].map((social) => (
                  <button 
                    key={social}
                    className="w-9 h-9 rounded-full border border-[#D4BB8E]/40 flex items-center justify-center text-[#D4BB8E]/70 hover:text-[#D4BB8E] hover:border-[#D4BB8E] transition-all"
                  >
                    {social === 'instagram' && <span className="text-sm">📷</span>}
                    {social === 'twitter' && <span className="text-sm">🐦</span>}
                    {social === 'facebook' && <span className="text-sm">📘</span>}
                  </button>
                ))}
              </div>
            </div>

            {/* Main */}
            <div>
              <h3 className="font-serif text-lg text-[#D4BB8E] mb-4">Main</h3>
              <ul className="flex flex-col gap-3">
                {['Home', 'About Us', 'Our Blog', 'FAQ'].map(link => (
                  <li key={link}>
                    <button className="font-sans text-sm text-[#D4BB8E]/70 hover:text-[#D4BB8E] transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category */}
            <div>
              <h3 className="font-serif text-lg text-[#D4BB8E] mb-4">Category</h3>
              <ul className="flex flex-col gap-3">
                {['Earrings', 'Rings', 'Necklece'].map(link => (
                  <li key={link}>
                    <button className="font-sans text-sm text-[#D4BB8E]/70 hover:text-[#D4BB8E] transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Info + Newsletter */}
            <div>
              <h3 className="font-serif text-lg text-[#D4BB8E] mb-4">More Info</h3>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-[#D4BB8E]/70 text-sm mt-0.5">📞</span>
                  <div>
                    <p className="font-sans text-xs text-[#D4BB8E]/70 mb-1">Contact</p>
                    <p className="font-sans text-sm text-[#D4BB8E]">+ (09) 076 231 734</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#D4BB8E]/70 text-sm mt-0.5">✉️</span>
                  <div>
                    <p className="font-sans text-xs text-[#D4BB8E]/70 mb-1">Email</p>
                    <p className="font-sans text-sm text-[#D4BB8E]">Support@gmail.com</p>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-lg text-[#D4BB8E] mb-4">Newsletter</h3>
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 bg-transparent border-b border-[#D4BB8E]/40 px-0 py-2 text-sm text-[#D4BB8E] placeholder-[#D4BB8E]/60 outline-none focus:border-[#D4BB8E]"
                />
                <button className="border-b border-[#D4BB8E]/40 px-3 py-2 font-sans text-xs text-[#D4BB8E] uppercase tracking-wider hover:text-[#3A2A14] transition-colors">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#D4BB8E]/20 py-6 text-left relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-sm text-[#D4BB8E]/60">Copyright © 2022 Hiraola. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DesktopOrderDetails;
