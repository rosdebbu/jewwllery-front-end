import React, { useEffect } from 'react';
import gsap from 'gsap';

interface DesktopPageProps {
  // Add any needed props here
}

const DesktopPage: React.FC<DesktopPageProps> = () => {
  useEffect(() => {
    // Basic entrance animation
    gsap.fromTo(
      '.dpage-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="w-full bg-[#050505] min-h-screen text-[#E6D0AC] pt-10 pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Title */}
        <div className="text-center mb-16 dpage-anim">
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#E6D0AC] font-medium tracking-wide flex items-center justify-center gap-4">
            <span className="text-2xl lg:text-4xl">✨</span>
            Welcome to Timeless Elegance
            <span className="text-2xl lg:text-4xl">✨</span>
          </h1>
        </div>

        {/* 3-Image Gallery */}
        <div className="flex flex-row items-center justify-center gap-6 lg:gap-10 mb-20 dpage-anim">
          
          {/* Left Image */}
          <div className="w-1/4 aspect-[3/4] rounded-sm overflow-hidden border border-[#E6D0AC]/20 shadow-2xl shadow-black/50">
            <img 
              src="/assets/model-bg-2.png" 
              alt="Elegance Model 1" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Center Image (Larger) */}
          <div className="w-1/3 aspect-[3/4.5] rounded-sm overflow-hidden border border-[#E6D0AC]/30 shadow-2xl shadow-black/80 z-10 scale-110">
            <img 
              src="/assets/model-bg.png" 
              alt="Elegance Model 2" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Small decorative lines under center image as seen in design */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
               <div className="w-10 h-0.5 bg-[#E6D0AC]/20"></div>
               <div className="w-10 h-0.5 bg-[#E6D0AC]/60"></div>
               <div className="w-10 h-0.5 bg-[#E6D0AC]/20"></div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-1/4 aspect-[3/4] rounded-sm overflow-hidden border border-[#E6D0AC]/20 shadow-2xl shadow-black/50">
            <img 
              src="/assets/model-bg-3.png" 
              alt="Elegance Model 3" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>

        </div>
      </div>

      {/* Marquee Scrolling Text */}
      <div className="w-full bg-[#E6D0AC] py-4 mt-16 overflow-hidden flex whitespace-nowrap dpage-anim">
        <div className="animate-[marquee_20s_linear_infinite] flex items-center gap-6 font-serif text-2xl lg:text-3xl text-[#0D0D0D]">
          {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <span>Discover The Art of Luxury</span>
              <span className="text-xl">⭐</span>
              <span>Where Elegance Meet Excellence</span>
              <span className="text-xl">⭐</span>
              <span>Timeless Beauty</span>
              <span className="text-xl">⭐</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* ===== ABOUT US / CELEBRATE LIFE'S MOMENTS ===== */}
      <section className="w-full px-6 lg:px-10 py-24 max-w-7xl mx-auto relative dpage-anim">
        {/* Background spiral decoration matching design */}
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'url(/assets/login-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
          }}
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* Left Column — Arched Image & Floating Circle */}
          <div className="relative flex justify-start lg:justify-center">
            {/* Main Arched Image */}
            <div className="w-[85%] aspect-[3/4] rounded-t-full rounded-b-sm overflow-hidden border border-[#E6D0AC]/20 shadow-2xl shadow-black/80">
              <img 
                src="/assets/model-bg-2.png" 
                alt="Model wearing green necklace" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Circular Image */}
            <div className="absolute bottom-[-10%] right-[5%] w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[#050505] shadow-xl shadow-black">
              <img 
                src="/assets/earrings.png" 
                alt="Earrings detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column — Text and Stats */}
          <div className="flex flex-col pt-8 lg:pt-0">
            <h4 className="font-serif text-[#E6D0AC]/70 tracking-[0.2em] uppercase text-sm mb-4">
              About us
            </h4>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#E6D0AC] leading-tight mb-6">
              Celebrate Life's<br />
              Moments with<br />
              Exquisite Jewelry
            </h2>
            <p className="font-sans text-sm text-[#E6D0AC]/60 leading-relaxed mb-10 max-w-lg">
              Jewellery has been an integral part of human culture for thousands of
              years, serving as a symbol of beauty, status, tradition, and personal
              expression. Crafted from precious metals, gemstones, beads, and natural
              materials.
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4">
              {[
                { number: '20 +', label: 'Worldwide Branch' },
                { number: '500 +', label: 'Unique Design' },
                { number: '2K +', label: 'User Review' }
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-gradient-to-b from-[#F2DCA5] to-[#E5C284] text-[#0D0D0D] rounded-md py-5 px-6 flex flex-col items-center justify-center min-w-[130px] shadow-lg shadow-black/40 hover:-translate-y-1 transition-transform"
                >
                  <span className="font-serif text-2xl lg:text-3xl mb-1">{stat.number}</span>
                  <span className="font-sans text-xs font-medium tracking-wide text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ADORN YOURSELF IN LUXURY ===== */}
      <section className="w-full px-6 lg:px-10 py-16 max-w-7xl mx-auto dpage-anim">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column — Large Image with Inset */}
          <div className="relative">
            {/* Main Image */}
            <div className="w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-sm overflow-hidden border border-[#E6D0AC]/20 shadow-2xl shadow-black/80">
              <img 
                src="/assets/necklace.png" 
                alt="Large Diamond Necklace" 
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Top Right Inset Circle */}
            <div className="absolute -top-6 lg:-top-10 -right-6 lg:-right-10 w-32 h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden border-[6px] border-[#050505] shadow-2xl shadow-black z-10">
              <img 
                src="/assets/model-bg-3.png" 
                alt="Necklace Detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column — Text & CTA */}
          <div className="flex flex-col">
            <h4 className="font-serif text-[#E6D0AC]/80 tracking-[0.3em] uppercase text-sm mb-6 lg:mb-8">
              Adorn Yourself in Luxury
            </h4>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#E6D0AC] leading-[1.3] mb-10 max-w-lg">
              Elegance In Every Piece,<br />
              Timeless Beauty That Shines<br />
              Brighter With Every Moment<br />
              You Wear
            </h2>
            
            <button className="self-start bg-[#F2DCA5] hover:bg-[#E5C284] text-[#0D0D0D] font-serif text-lg px-6 py-3 rounded-sm flex items-center gap-4 transition-colors shadow-lg shadow-black/40 group">
              Know More
              <span className="w-6 h-6 rounded-full bg-[#B8860B] text-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* ===== FEATURES / BENEFITS ===== */}
      <section className="w-full px-6 lg:px-10 pb-20 max-w-7xl mx-auto dpage-anim relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            { 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>, 
              title: 'Exclusive Gift' 
            },
            { 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>, 
              title: 'Seasonal Discount' 
            },
            { 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>, 
              title: 'Free Delivery' 
            },
            { 
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>, 
              title: 'Offers' 
            },
          ].map((feature, idx) => (
            <div 
              key={idx}
              className="border border-[#E6D0AC]/20 bg-[#0A0A0A]/80 backdrop-blur-sm p-8 rounded-sm hover:border-[#E6D0AC]/40 transition-colors group cursor-pointer"
            >
              <div className="text-[#E6D0AC] mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl text-[#E6D0AC] mb-3 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-[#E6D0AC]/50 leading-relaxed group-hover:text-[#E6D0AC]/70 transition-colors">
                Jewellery has held significant cultural and religious meanings in various societies.
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* ===== FOOTER ===== */}
      <footer className="w-full border-t border-[#E6D0AC]/10 bg-[#0A0A0A] relative overflow-hidden mt-10">
        {/* Background decoration */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'url(/assets/login-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-8">
            {/* About Us */}
            <div className="md:col-span-2">
              <h2 className="font-serif text-xl text-[#E6D0AC] uppercase tracking-[0.15em] mb-1">Indiglam</h2>
              <h3 className="font-serif text-base text-[#E6D0AC]/80 mb-4">About us</h3>
              <p className="font-sans text-sm text-[#E6D0AC]/40 leading-relaxed mb-6">
                Jewellery is more than just an accessory — it's 
                a reflection of personality, heritage, and 
                timeless beauty. From delicate craftsmanship 
                to bold statement pieces,
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {['instagram', 'twitter', 'facebook'].map((social) => (
                  <button 
                    key={social}
                    className="w-9 h-9 rounded-full border border-[#E6D0AC]/20 flex items-center justify-center text-[#E6D0AC]/50 hover:text-[#E6D0AC] hover:border-[#E6D0AC]/40 transition-all"
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
              <h3 className="font-serif text-base text-[#E6D0AC] mb-4">Main</h3>
              <ul className="flex flex-col gap-2.5">
                {['Home', 'About Us', 'Our Blog', 'FAQ'].map(link => (
                  <li key={link}>
                    <button className="font-sans text-sm text-[#E6D0AC]/40 hover:text-[#E6D0AC] transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category */}
            <div>
              <h3 className="font-serif text-base text-[#E6D0AC] mb-4">Category</h3>
              <ul className="flex flex-col gap-2.5">
                {['Earrings', 'Rings', 'Necklace'].map(link => (
                  <li key={link}>
                    <button className="font-sans text-sm text-[#E6D0AC]/40 hover:text-[#E6D0AC] transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Info + Newsletter */}
            <div>
              <h3 className="font-serif text-base text-[#E6D0AC] mb-4">More Info</h3>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-[#E6D0AC]/40 text-xs mt-0.5">📞</span>
                  <div>
                    <p className="font-sans text-xs text-[#E6D0AC]/40">Contact</p>
                    <p className="font-sans text-sm text-[#E6D0AC]/60">+ (09) 076 231 734</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#E6D0AC]/40 text-xs mt-0.5">✉️</span>
                  <div>
                    <p className="font-sans text-xs text-[#E6D0AC]/40">Email</p>
                    <p className="font-sans text-sm text-[#E6D0AC]/60">Support@gmail.com</p>
                  </div>
                </div>
              </div>

              <h3 className="font-serif text-base text-[#E6D0AC] mb-3">Newsletter</h3>
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 bg-transparent border-b border-[#E6D0AC]/20 px-0 py-2 text-sm text-[#E6D0AC] placeholder-[#E6D0AC]/30 outline-none focus:border-[#E6D0AC]/50"
                />
                <button className="border-b border-[#E6D0AC]/20 px-3 py-2 font-sans text-xs text-[#E6D0AC]/60 uppercase tracking-wider hover:text-[#E6D0AC] transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#E6D0AC]/10 py-5 text-center relative z-10">
          <p className="font-sans text-xs text-[#E6D0AC]/30">Copyright © 2022 Hiraola. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DesktopPage;
