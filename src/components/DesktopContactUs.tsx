import React, { useEffect } from 'react';
import gsap from 'gsap';
import { MapPin, ArrowUpRight } from 'lucide-react';

const DesktopContactUs: React.FC = () => {
  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      '.dcontact-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen overflow-x-hidden">
      
      {/* ===== HEADER SECTION ===== */}
      <section 
        className="w-full relative z-10 overflow-hidden -mt-[120px] pt-[180px] pb-20"
        style={{
          background: 'linear-gradient(150.75deg, #000000 46.94%, #2F1D07 146.56%)',
          borderBottom: '1px solid #F1DABF'
        }}
      >
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'url(/assets/login-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        
        <div className="px-6 lg:px-10 max-w-5xl mx-auto text-center dcontact-anim relative z-10">
          <h1 className="font-serif text-4xl lg:text-5xl text-[#E6D0AC] tracking-[0.1em]">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ===== FORM SECTION ===== */}
      <section className="w-full px-6 lg:px-10 py-24 max-w-7xl mx-auto dcontact-anim relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          
          {/* LEFT: Thoughts & Feedback */}
          <div className="w-full lg:w-1/2 flex flex-col pr-8">
            <h3 className="font-serif text-lg text-[#D4BB8E] tracking-widest uppercase mb-4">Thoughts</h3>
            <h2 className="font-serif text-4xl text-[#D4BB8E] mb-6">We Value Feedback</h2>
            <p className="font-sans text-[#D4BB8E]/70 leading-relaxed mb-12 max-w-md text-sm">
              Jewellery has been an integral part of human culture for thousands of years, serving as a symbol of beauty, status, tradition, and personal expression.
            </p>
            
            <h3 className="font-serif text-lg text-[#D4BB8E] tracking-widest uppercase mb-6">Working Hours</h3>
            <ul className="flex flex-col gap-3 font-sans text-[#D4BB8E]/70 text-sm mb-12">
              <li>Monday To Friday - 08:00am to 08:00pm</li>
              <li>Saturday - 08:00am to 02:00pm</li>
              <li>Sunday - Holiday</li>
            </ul>

            <div className="flex gap-4">
              <div className="w-24 h-24 overflow-hidden bg-[#EAE7DF]">
                <img src="/assets/model-bg-3.png" alt="Jewelry 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-24 h-24 overflow-hidden bg-[#EAE7DF]">
                <img src="/assets/model-bg-2.png" alt="Jewelry 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-24 h-24 overflow-hidden bg-[#EAE7DF]">
                <img src="/assets/necklace.png" alt="Jewelry 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          {/* RIGHT: Contact Form */}
          <div className="w-full lg:w-1/2 bg-[#EAD6B5] p-10 lg:p-14 relative shadow-sm">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="bg-[#E2CBA8] px-6 py-4">
                <input 
                  type="text" 
                  placeholder="Name *" 
                  className="w-full bg-transparent border-none outline-none font-serif text-[#3A2A14] placeholder-[#3A2A14]/70 tracking-wide" 
                />
              </div>

              <div className="bg-[#E2CBA8] px-6 py-4">
                <input 
                  type="text" 
                  placeholder="Phone Number *" 
                  className="w-full bg-transparent border-none outline-none font-serif text-[#3A2A14] placeholder-[#3A2A14]/70 tracking-wide" 
                />
              </div>

              <div className="bg-[#E2CBA8] px-6 py-4">
                <input 
                  type="text" 
                  placeholder="Enter Date *" 
                  className="w-full bg-transparent border-none outline-none font-serif text-[#3A2A14] placeholder-[#3A2A14]/70 tracking-wide" 
                />
              </div>

              <div className="bg-[#E2CBA8] px-6 py-4 h-32">
                <textarea 
                  placeholder="Message *" 
                  className="w-full h-full bg-transparent border-none outline-none font-serif text-[#3A2A14] placeholder-[#3A2A14]/70 tracking-wide resize-none" 
                ></textarea>
              </div>
              
              <button className="mt-4 flex items-center justify-between px-6 py-4 bg-[#0A0A0A] hover:bg-[#1A1A1A] transition-colors text-white font-serif text-sm w-max gap-6">
                Send Message
                <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-black">
                  <ArrowUpRight size={12} strokeWidth={3} />
                </div>
              </button>
            </form>
          </div>
          
        </div>
      </section>

      {/* ===== INFO CARDS SECTION ===== */}
      <section className="w-full px-6 lg:px-10 py-16 max-w-7xl mx-auto dcontact-anim relative z-10 text-center">
        <h3 className="font-serif text-sm text-[#D4BB8E] tracking-[0.2em] uppercase mb-4">Get In Touch</h3>
        <h2 className="font-serif text-3xl text-[#D4BB8E] mb-20">Branching Out For You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {/* Card 1 */}
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-[#EAD6B5] flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#4A3720] flex items-center justify-center text-white">
                <MapPin size={16} fill="white" strokeWidth={0} />
              </div>
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#D4BB8E] mb-3">Ideal Location</h4>
              <p className="font-sans text-[#D4BB8E]/60 text-sm leading-relaxed">
                No: 58 A, East Madison Street,<br />
                Baltimore, MD, USA 4508
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-[#EAD6B5] flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#4A3720] flex items-center justify-center text-white">
                <MapPin size={16} fill="white" strokeWidth={0} />
              </div>
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#D4BB8E] mb-3">Instant Connect</h4>
              <p className="font-sans text-[#D4BB8E]/60 text-sm leading-relaxed">
                000 - 123 - 456789<br />
                0000 1234 56789
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-[#EAD6B5] flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#4A3720] flex items-center justify-center text-white">
                <MapPin size={16} fill="white" strokeWidth={0} />
              </div>
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#D4BB8E] mb-3">Mail Us</h4>
              <p className="font-sans text-[#D4BB8E]/60 text-sm leading-relaxed">
                info@example.com<br />
                support@example.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FULL WIDTH MAP SECTION ===== */}
      <section className="w-full h-[500px] bg-[#EAE7DF] relative z-10 overflow-hidden dcontact-anim">
        {/* SRM Nagar, Chennai coordinates approx: 12.8236° N, 80.0435° E */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15557.067332219802!2d80.0353147!3d12.8258778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aee53831!2sSRM%20Nagar%2C%20Kattankulathur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'contrast(1.1) saturate(1.2)' }} 
          allowFullScreen={false}
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="SRM Nagar Chennai Map"
        ></iframe>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="w-full border-t border-[#E6D0AC]/10 bg-[#0A0A0A] relative overflow-hidden">
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
        <div className="border-t border-[#E6D0AC]/10 py-5 text-center relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs text-[#E6D0AC]/30 text-left">Copyright © 2022 Hiraola. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DesktopContactUs;
