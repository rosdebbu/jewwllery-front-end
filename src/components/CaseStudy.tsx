import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyProps {
  onBack?: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const addToSections = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Hero animation
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl.fromTo('.hero-phone', { opacity: 0, y: 60, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 1.2 });
    heroTl.fromTo('.hero-title', { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.15 }, '-=0.6');
    heroTl.fromTo('.hero-nav-item', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, '-=0.3');

    // Scroll-triggered animations for each section
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll('.animate-in'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-black text-[#E6D0AC] overflow-x-hidden font-sans">

      {/* ===================================================================
          SECTION 00 — HERO
          =================================================================== */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden"
        style={{
          background: 'linear-gradient(180.95deg, #835515 -36.19%, #000000 63.41%)',
        }}
      >
        {/* Back button */}
        {onBack && (
          <button
            onClick={onBack}
            className="absolute top-6 left-6 z-20 text-[#E6D0AC]/60 hover:text-[#E6D0AC] transition-colors font-serif text-sm tracking-widest uppercase"
          >
            ← Back
          </button>
        )}

        {/* Main Hero Content */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 pt-20 pb-10 gap-8 md:gap-16">
          {/* Left — Phone Mockup */}
          <div className="hero-phone flex-shrink-0 w-[260px] md:w-[320px] lg:w-[380px]">
            <img
              src="/assets/hand-phone.png"
              alt="Indiglam App Preview"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Right — Title */}
          <div className="flex flex-col items-start md:items-start gap-2">
            <h1 className="hero-title font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-wider text-[#E6D0AC] uppercase">
              Indiglam
            </h1>
            <span className="hero-title font-serif text-3xl md:text-5xl lg:text-6xl font-medium tracking-wider text-[#E6D0AC]/80 uppercase">
              X
            </span>
            <div className="mt-4">
              <h2 className="hero-title font-serif text-2xl md:text-4xl lg:text-5xl font-medium tracking-wide text-[#E6D0AC]">
                Case Study
              </h2>
              <p className="hero-title font-serif text-lg md:text-2xl lg:text-3xl tracking-[0.2em] text-[#E6D0AC]/70 uppercase mt-1">
                Landing Page
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="w-full border-t border-[#E6D0AC]/15 px-6 md:px-16 lg:px-24 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
            <span className="hero-nav-item font-serif text-sm md:text-base tracking-[0.25em] uppercase text-[#E6D0AC]/70 hover:text-[#E6D0AC] transition-colors cursor-pointer">
              Project Objective
            </span>
            <div className="hidden md:block w-px h-5 bg-[#E6D0AC]/30"></div>
            <span className="hero-nav-item font-serif text-sm md:text-base tracking-[0.25em] uppercase text-[#E6D0AC]/70 hover:text-[#E6D0AC] transition-colors cursor-pointer">
              Target Users
            </span>
            <div className="hidden md:block w-px h-5 bg-[#E6D0AC]/30"></div>
            <span className="hero-nav-item font-serif text-sm md:text-base tracking-[0.25em] uppercase text-[#E6D0AC]/70 hover:text-[#E6D0AC] transition-colors cursor-pointer">
              Key Problems Identified
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 01 — PROJECT OVERVIEW
          =================================================================== */}
      <section ref={addToSections} className="w-full py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-baseline gap-3 mb-10 animate-in">
            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase text-[#E6D0AC]">
              Project Overview
            </h2>
            <span className="font-serif text-sm text-[#C77E18]">01</span>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left — Description */}
            <div className="animate-in">
              <p className="font-sans text-[#E6D0AC]/70 text-base md:text-lg leading-relaxed">
                The Jewellery website project focuses on creating a luxurious, elegant, and user-friendly digital
                experience that reflects the brand's premium identity. The primary goal is to showcase jewellery
                collections effectively while ensuring smooth navigation and an engaging shopping experience.
              </p>
            </div>

            {/* Right — Desktop Mockup Placeholder */}
            <div className="animate-in relative">
              <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#835515]/20 to-[#1A1A1A] border border-[#E6D0AC]/10 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-48 h-32 md:w-64 md:h-44 bg-[#1A1A1A] rounded-lg border border-[#E6D0AC]/10 mx-auto mb-3 flex items-center justify-center">
                    <span className="font-serif text-[#E6D0AC]/30 text-sm">Desktop Preview</span>
                  </div>
                  <div className="w-16 h-28 md:w-20 md:h-36 bg-[#1A1A1A] rounded-lg border border-[#E6D0AC]/10 mx-auto -mt-8 ml-auto mr-4 flex items-center justify-center">
                    <span className="font-serif text-[#E6D0AC]/20 text-xs">Mobile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 02 — PROJECT SCOPE
          =================================================================== */}
      <section ref={addToSections} className="w-full py-16 md:py-24 px-6 md:px-16 lg:px-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-3 mb-10 animate-in">
            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase text-[#E6D0AC]">
              Project Scope
            </h2>
            <span className="font-serif text-sm text-[#C77E18]">02</span>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4 animate-in">
            {[
              'Branding',
              'Consumer Research',
              'Visual Identity',
              'Research',
              'Wireframe',
              'UI Design',
              'Web Development',
            ].map((tag) => (
              <span
                key={tag}
                className="px-5 md:px-7 py-2.5 md:py-3 rounded-full bg-[#E6D0AC]/10 border border-[#E6D0AC]/20 font-serif text-sm md:text-base tracking-[0.15em] uppercase text-[#E6D0AC]/80 hover:bg-[#E6D0AC]/20 hover:text-[#E6D0AC] transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 03 — DESIGN THINKING PROCESS
          =================================================================== */}
      <section
        ref={addToSections}
        className="w-full py-20 md:py-28 px-6 md:px-16 lg:px-24"
        style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #0F0F0F 100%)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-3 mb-14 animate-in">
            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase text-[#E6D0AC]">
              Design Thinking Process
            </h2>
            <span className="font-serif text-sm text-[#C77E18]">03</span>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            {[
              {
                icon: '👥',
                title: 'Empathize',
                desc: 'Conduct research to understand potential users.',
              },
              {
                icon: '☑️',
                title: 'Define',
                desc: 'Combine all research and identify the key problem.',
              },
              {
                icon: '💡',
                title: 'Ideate',
                desc: 'Generate a range of creative ideas.',
              },
              {
                icon: '🖥️',
                title: 'Design',
                desc: 'Build realistic representation of ideas.',
              },
              {
                icon: '🧪',
                title: 'Test',
                desc: 'Tested with users, modify and implement.',
              },
            ].map((step, index) => (
              <div key={step.title} className="animate-in flex flex-col items-center text-center relative">
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#E6D0AC]/10 border border-[#E6D0AC]/20 flex items-center justify-center text-2xl mb-4">
                  {step.icon}
                </div>

                {/* Connector line */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-[#E6D0AC]/15"></div>
                )}

                {/* Text */}
                <h3 className="font-serif text-base md:text-lg tracking-wide text-[#E6D0AC] mb-2">{step.title}</h3>
                <p className="font-sans text-xs md:text-sm text-[#E6D0AC]/50 leading-relaxed max-w-[160px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 04 — PROBLEM & SOLUTION
          =================================================================== */}
      <section
        ref={addToSections}
        className="w-full py-20 md:py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at center, #1A1200 0%, #0A0A0A 70%)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-3 mb-14 animate-in">
            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase text-[#E6D0AC]">
              Problem & Solution
            </h2>
            <span className="font-serif text-sm text-[#C77E18]">04</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative">
            {/* Center Orbital Diagram */}
            <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
              <div className="w-[300px] h-[300px] rounded-full border border-[#C77E18]/20 relative">
                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl tracking-[0.3em] text-[#E6D0AC]/40 uppercase">Indiglam</span>
                </div>
                {/* Orbital nodes */}
                <div className="absolute -top-3 left-1/3 w-7 h-7 rounded-full bg-[#E6D0AC] flex items-center justify-center text-[#0A0A0A] text-xs font-bold">01</div>
                <div className="absolute top-1/4 -right-3 w-7 h-7 rounded-full bg-[#E6D0AC] flex items-center justify-center text-[#0A0A0A] text-xs font-bold">02</div>
                <div className="absolute bottom-1/4 -right-3 w-7 h-7 rounded-full bg-[#E6D0AC] flex items-center justify-center text-[#0A0A0A] text-xs font-bold">03</div>
              </div>
            </div>

            {/* Left Column */}
            <div className="flex flex-col gap-10 animate-in z-10">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-[#E6D0AC] mb-4 tracking-wide">Problem</h3>
                <p className="font-sans text-sm md:text-base text-[#E6D0AC]/60 leading-relaxed">
                  Users find it hard to trust online jewellery quality and authenticity. Jewellery collections are often
                  cluttered and difficult to browse. Premium products are not presented in a luxurious, emotional way.
                  Users struggle to discover the right jewellery for occasions or festivals.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-[#E6D0AC] mb-4 tracking-wide">Solution</h3>
                <p className="font-sans text-sm md:text-base text-[#E6D0AC]/60 leading-relaxed">
                  Use high-quality visuals and elegant dark UI to convey luxury and trust. Organize products into clear
                  collections (New, Festival, Party, Latest). Highlight craftsmanship, materials, and brand story to
                  build credibility. Create a smooth browsing experience with clean layout and strong visual hierarchy.
                </p>
              </div>
            </div>

            {/* Center spacer for desktop */}
            <div className="hidden md:block"></div>

            {/* Right Column */}
            <div className="flex flex-col gap-10 animate-in z-10">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-[#E6D0AC] mb-4 tracking-wide">UX Improvements</h3>
                <p className="font-sans text-sm md:text-base text-[#E6D0AC]/60 leading-relaxed">
                  "The goal of Indiglam's user experience was to make shopping easy and trustworthy. I added reviews and
                  gifting filters, improved navigation for faster product discovery, and highlighted product quality with
                  clear details and badges. This helped build user confidence and create a smooth, secure shopping
                  experience."
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-[#E6D0AC] mb-4 tracking-wide">UI Enhancements</h3>
                <p className="font-sans text-sm md:text-base text-[#E6D0AC]/60 leading-relaxed">
                  "Indiglam's UI was improved to look modern and luxurious. I used clean layouts, soft colors, and
                  simple typography to match the brand's elegance. Important elements like banners, product grids, and
                  icons were redesigned to be clear and visually appealing, creating a smooth and premium look across
                  the website."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 05 — COLOURS
          =================================================================== */}
      <section ref={addToSections} className="w-full py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-3 mb-14 animate-in">
            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase text-[#E6D0AC]">
              Colours
            </h2>
            <span className="font-serif text-sm text-[#C77E18]">05</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left — Color Swatches */}
            <div className="animate-in">
              <div className="grid grid-cols-4 gap-3 md:gap-4">
                {[
                  { name: 'Corvette', hex: '#FED7A0' },
                  { name: 'Brandy Punch', hex: '#C77E18' },
                  { name: 'Tequila', hex: '#FFE5C0' },
                  { name: 'Saffron Mango', hex: '#FFC55C' },
                ].map((color) => (
                  <div key={color.name} className="flex flex-col items-start gap-2">
                    <div
                      className="w-full aspect-[1/2.5] rounded-lg shadow-lg"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <div>
                      <p className="font-serif text-xs md:text-sm text-[#E6D0AC]/80">{color.name}</p>
                      <p className="font-mono text-xs text-[#E6D0AC]/40">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Phone Mockup */}
            <div className="animate-in flex justify-center md:justify-end">
              <div className="w-[240px] md:w-[300px] lg:w-[360px]">
                <img
                  src="/assets/hand-phone.png"
                  alt="Indiglam App Colors Preview"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 06 — TYPOGRAPHY (Placeholder)
          =================================================================== */}
      <section ref={addToSections} className="w-full py-20 md:py-28 px-6 md:px-16 lg:px-24 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-3 mb-14 animate-in">
            <h2 className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase text-[#E6D0AC]">
              Typography
            </h2>
            <span className="font-serif text-sm text-[#C77E18]">06</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-in">
            {/* Font Display */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-sans text-sm text-[#E6D0AC]/40 uppercase tracking-widest mb-3">Primary Font</p>
                <p className="font-serif text-5xl md:text-6xl text-[#E6D0AC] tracking-wide">Playfair</p>
                <p className="font-serif text-2xl text-[#E6D0AC]/50 mt-2">Aa Bb Cc Dd Ee Ff Gg</p>
              </div>
              <div>
                <p className="font-sans text-sm text-[#E6D0AC]/40 uppercase tracking-widest mb-3">Secondary Font</p>
                <p className="font-sans text-4xl md:text-5xl text-[#E6D0AC] tracking-wide">Inter</p>
                <p className="font-sans text-xl text-[#E6D0AC]/50 mt-2">Aa Bb Cc Dd Ee Ff Gg</p>
              </div>
            </div>

            {/* Type Scale */}
            <div className="flex flex-col gap-4">
              <div className="border-b border-[#E6D0AC]/10 pb-4">
                <p className="font-serif text-4xl text-[#E6D0AC]">Heading 1</p>
                <p className="font-sans text-xs text-[#E6D0AC]/30 mt-1">48px / Bold / Playfair Display</p>
              </div>
              <div className="border-b border-[#E6D0AC]/10 pb-4">
                <p className="font-serif text-3xl text-[#E6D0AC]">Heading 2</p>
                <p className="font-sans text-xs text-[#E6D0AC]/30 mt-1">36px / Semi Bold / Playfair Display</p>
              </div>
              <div className="border-b border-[#E6D0AC]/10 pb-4">
                <p className="font-serif text-2xl text-[#E6D0AC]">Heading 3</p>
                <p className="font-sans text-xs text-[#E6D0AC]/30 mt-1">24px / Medium / Playfair Display</p>
              </div>
              <div className="border-b border-[#E6D0AC]/10 pb-4">
                <p className="font-sans text-base text-[#E6D0AC]">Body Text</p>
                <p className="font-sans text-xs text-[#E6D0AC]/30 mt-1">16px / Regular / Inter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          FOOTER
          =================================================================== */}
      <footer className="w-full py-12 px-6 md:px-16 lg:px-24 bg-[#050505] border-t border-[#E6D0AC]/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#E6D0AC] tracking-[0.15em] uppercase mb-4">Indiglam</h2>
          <p className="font-sans text-sm text-[#E6D0AC]/40">Case Study by Debjit Das • 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudy;
