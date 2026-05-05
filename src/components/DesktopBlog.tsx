import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const DesktopBlog: React.FC = () => {
  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      '.dblog-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: '/assets/model-bg-2.png', // Using existing assets as placeholders
      date: 'November 8, 2024',
      title: 'Must-Have Bracelets To Elevate Your Jewellery Collection'
    },
    {
      id: 2,
      image: '/assets/ring.png',
      date: 'November 8, 2024',
      title: 'Must-Have Bracelets To Elevate Your Jewellery Collection'
    },
    {
      id: 3,
      image: '/assets/necklace.png',
      date: 'November 8, 2024',
      title: 'Must-Have Bracelets To Elevate Your Jewellery Collection'
    },
    {
      id: 4,
      image: '/assets/earrings.png',
      date: 'November 8, 2024',
      title: 'Must-Have Bracelets To Elevate Your Jewellery Collection'
    },
    {
      id: 5,
      image: '/assets/model-bg.png',
      date: 'November 8, 2024',
      title: 'Must-Have Bracelets To Elevate Your Jewellery Collection'
    },
    {
      id: 6,
      image: '/assets/model-bg-3.png',
      date: 'November 8, 2024',
      title: 'Must-Have Bracelets To Elevate Your Jewellery Collection'
    }
  ];

  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen overflow-x-hidden">
      
      {/* ===== HERO SECTION ===== */}
      {/* We use negative margin if we wanted to go under transparent nav, but since nav is in App.tsx and takes space, 
          we just make this the first element. The background will flow nicely if it's visually separated. */}
      <section className="w-full h-[60vh] min-h-[400px] relative overflow-hidden flex items-center justify-center -mt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/login-bg.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center flex flex-col items-center dblog-anim mt-20">
          <h1 className="font-serif text-4xl lg:text-5xl text-white drop-shadow-md mb-8 tracking-[0.05em]">
            Explore Our Recent Blogs
          </h1>
          <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#3A2A14]/40 backdrop-blur-md border border-[#3A2A14]/10 text-white font-serif hover:bg-[#3A2A14]/60 transition-colors shadow-lg">
            Read More
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </section>

      {/* ===== BLOG GRID ===== */}
      <section className="w-full px-6 lg:px-10 py-24 max-w-7xl mx-auto dblog-anim relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col group cursor-pointer">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-[#1A1A1A] border border-[#E6D0AC]/10 rounded-2xl">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating Read More Button on Image */}
                <div className="absolute bottom-6 right-6 z-10">
                  <button className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#3A2A14] text-[#D4BB8E] hover:bg-[#2A1E0E] transition-colors shadow-xl border border-[#D4BB8E]/20">
                    <span className="font-serif text-sm">Read More</span>
                    <div className="w-6 h-6 rounded-full bg-[#D4BB8E] flex items-center justify-center text-[#3A2A14]">
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </div>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="px-2">
                <p className="font-serif text-[#D4BB8E]/70 text-sm mb-3">{post.date}</p>
                <h3 className="font-serif text-[28px] text-[#D4BB8E] leading-snug group-hover:text-[#C4A877] transition-colors">
                  {post.title}
                </h3>
              </div>
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
        <div className="border-t border-[#E6D0AC]/10 py-5 text-center relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-sans text-xs text-[#E6D0AC]/30 text-left">Copyright © 2022 Hiraola. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DesktopBlog;
