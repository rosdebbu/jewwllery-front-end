import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Play, Heart, Plus } from 'lucide-react';

interface DesktopHomeProps {
  onProductClick: (product: any) => void;
  onShopClick: () => void;
}

const DesktopHome: React.FC<DesktopHomeProps> = ({ onProductClick, onShopClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.dhero-title', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo('.dhero-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
      .fromTo('.dhero-img', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 }, '-=0.6')
      .fromTo('.dhero-badge', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6 }, '-=0.4')
      .fromTo('.dhero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .fromTo('.dhero-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 }, '-=0.2');
  }, []);

  return (
    <div className="w-full bg-[#0D0D0D] text-[#E6D0AC] overflow-x-hidden">

      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative w-full min-h-[85vh] px-6 lg:px-10 py-12 max-w-7xl mx-auto">
        
        {/* Background texture */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'url(/assets/login-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Main Grid */}
        <div className="relative z-10 grid grid-cols-12 gap-6 items-start">

          {/* Left column — Circular badge + images */}
          <div className="col-span-3 flex flex-col gap-6 pt-8">
            {/* Main product image */}
            <div className="dhero-img relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[#E6D0AC]/10">
              <img src="/assets/necklace.png" alt="Necklace" className="w-full h-full object-cover" />
            </div>
            
            {/* Presented by badge */}
            <div className="dhero-badge flex items-center gap-3 bg-[#1A1A1A] border border-[#E6D0AC]/10 rounded-xl px-4 py-3">
              <div className="w-10 h-10 rounded-full bg-[#E6D0AC]/10 flex items-center justify-center">
                <span className="font-serif text-xs text-[#E6D0AC]">IG</span>
              </div>
              <div>
                <p className="font-sans text-xs text-[#E6D0AC]/50">Presented by</p>
                <p className="font-serif text-sm text-[#E6D0AC]">IndiGlam</p>
              </div>
            </div>

            {/* Small circular images */}
            <div className="dhero-img flex items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#E6D0AC]/20">
                <img src="/assets/earrings.png" alt="Earrings" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E6D0AC]/20">
                <img src="/assets/ring.png" alt="Ring" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Center column — Title + Main Image */}
          <div className="col-span-5 flex flex-col items-center gap-6 pt-4">
            {/* Title */}
            <div className="text-center">
              <h1 className="dhero-title font-serif text-4xl lg:text-5xl xl:text-6xl text-[#E6D0AC] leading-tight tracking-wide">
                Unplash The<br />
                <span className="italic font-medium">Shinning Beauty</span>
              </h1>
              <p className="dhero-desc font-sans text-sm text-[#E6D0AC]/50 mt-4 max-w-md mx-auto leading-relaxed">
                Crafted with precision and passion, jewellery captures moments, emotions, and
                milestones, transforming them into wearable treasures.
              </p>
            </div>

            {/* Main center image */}
            <div className="dhero-img relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden border border-[#E6D0AC]/15 shadow-2xl shadow-black/50">
              <img src="/assets/model-bg.png" alt="Model wearing jewelry" className="w-full h-full object-cover" />
            </div>

            {/* Find a Store button */}
            <button 
              onClick={onShopClick}
              className="dhero-cta flex items-center gap-3 bg-[#1A1A1A] border border-[#E6D0AC]/20 rounded-full px-8 py-3.5 hover:bg-[#2A2A2A] hover:border-[#E6D0AC]/40 transition-all group"
            >
              <span className="font-serif text-base tracking-wide text-[#E6D0AC]">Find a Store</span>
              <div className="w-8 h-8 rounded-full bg-[#E6D0AC] flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight size={16} className="text-[#0D0D0D]" />
              </div>
            </button>
          </div>

          {/* Right column — Circular + text */}
          <div className="col-span-4 flex flex-col gap-6 pt-8">
            {/* Circular image */}
            <div className="dhero-img flex items-start gap-4">
              <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-[#E6D0AC]/15 flex-shrink-0">
                <img src="/assets/model-bg-2.png" alt="Model" className="w-full h-full object-cover" />
              </div>
              <div className="dhero-img w-10 h-10 rounded-full overflow-hidden border border-[#E6D0AC]/20 mt-4">
                <img src="/assets/diamond-vine.png" alt="Diamond" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Time to make text */}
            <div className="dhero-desc pl-4">
              <p className="font-serif text-xl lg:text-2xl text-[#E6D0AC]/80 italic leading-relaxed">
                Time To Make<br />
                Somebody Happy !
              </p>
            </div>

            {/* Second image */}
            <div className="dhero-img w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6D0AC]/10">
              <img src="/assets/model-bg-3.png" alt="Jewelry closeup" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURE CARDS SECTION ===== */}
      <section className="w-full px-6 lg:px-10 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 — Best Jewellery */}
          <div className="dhero-card relative rounded-2xl overflow-hidden border border-[#E6D0AC]/10 bg-[#1A1A1A] p-8 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl text-[#E6D0AC] leading-tight mb-4">
                Best Jewellery from<br />the world's best<br />designers
              </h3>
              <p className="font-sans text-sm text-[#E6D0AC]/50 leading-relaxed max-w-xs">
                Jewellery is more than just adornment—it's a timeless expression of art, culture, and personal identity.
              </p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <button className="flex items-center gap-2 border border-[#E6D0AC]/30 rounded-full px-5 py-2.5 hover:bg-[#E6D0AC]/10 transition-all">
                <span className="font-sans text-sm text-[#E6D0AC]">Learn more</span>
              </button>
              <div className="w-10 h-10 rounded-full bg-[#E6D0AC]/10 border border-[#E6D0AC]/20 flex items-center justify-center hover:bg-[#E6D0AC]/20 transition-all cursor-pointer">
                <ArrowUpRight size={16} className="text-[#E6D0AC]" />
              </div>
            </div>
          </div>

          {/* Card 2 — Video */}
          <div className="dhero-card relative rounded-2xl overflow-hidden border border-[#E6D0AC]/10 min-h-[280px]">
            <img src="/assets/model-bg-2.png" alt="Jewelry video" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <button className="w-14 h-14 rounded-full bg-[#E6D0AC]/20 border border-[#E6D0AC]/40 flex items-center justify-center hover:bg-[#E6D0AC]/30 hover:scale-110 transition-all backdrop-blur-sm">
                <Play size={22} className="text-[#E6D0AC] ml-1" fill="#E6D0AC" />
              </button>
            </div>
          </div>

          {/* Card 3 — Hand Picked */}
          <div className="dhero-card relative rounded-2xl overflow-hidden border border-[#E6D0AC]/10 min-h-[280px]">
            <img src="/assets/model-bg-3.png" alt="Hand picked jewelry" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative z-10 p-8 flex flex-col justify-end h-full">
              <h3 className="font-serif text-xl lg:text-2xl text-[#E6D0AC] leading-tight mb-2">
                Hand Picked<br />Designer Jewellery
              </h3>
              <div className="w-10 h-10 rounded-full bg-[#E6D0AC]/10 border border-[#E6D0AC]/20 flex items-center justify-center hover:bg-[#E6D0AC]/20 transition-all cursor-pointer mt-3">
                <ArrowUpRight size={16} className="text-[#E6D0AC]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEW JEWELLERY COLLECTION ===== */}
      <section className="w-full px-6 lg:px-10 pb-20 max-w-7xl mx-auto">
        <div className="bg-[#0F1A2A] border border-[#2A4A6A]/30 rounded-3xl p-8 lg:p-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl lg:text-4xl text-[#E6D0AC] tracking-wide">
              New Jewellery Collection
            </h2>
            <button 
              onClick={onShopClick}
              className="flex items-center gap-3 group"
            >
              <span className="font-serif text-base text-[#E6D0AC]/70 group-hover:text-[#E6D0AC] transition-colors">View Collection</span>
              <div className="w-9 h-9 rounded-full border border-[#E6D0AC]/30 flex items-center justify-center group-hover:bg-[#E6D0AC]/10 transition-all">
                <ArrowUpRight size={16} className="text-[#E6D0AC]" />
              </div>
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {[
              { name: 'Earrings', price: '₹ 20,345', image: '/assets/earrings.png' },
              { name: 'Ring', price: '₹ 20,345', image: '/assets/ring.png' },
              { name: 'Earrings', price: '₹ 20,345', image: '/assets/necklace.png' },
              { name: 'Ring', price: '₹ 20,345', image: '/assets/diamond-vine.png' },
            ].map((product, index) => (
              <div 
                key={index}
                onClick={() => onProductClick(product)}
                className="relative bg-[#111111] rounded-2xl overflow-hidden border border-[#E6D0AC]/5 cursor-pointer group hover:border-[#E6D0AC]/20 transition-all duration-300"
              >
                {/* Wishlist Heart */}
                <button 
                  onClick={(e) => { e.stopPropagation(); }}
                  className="absolute top-4 right-4 z-10 text-[#E6D0AC]/30 hover:text-[#E6D0AC] transition-colors"
                >
                  <Heart size={18} strokeWidth={1.5} />
                </button>

                {/* Product Image */}
                <div className="w-full aspect-square flex items-center justify-center p-6 bg-[#0D0D0D]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Info Bar */}
                <div className="flex items-center justify-between px-4 py-3.5">
                  <div>
                    <p className="font-serif text-sm text-[#E6D0AC]">{product.name}</p>
                    <p className="font-sans text-xs text-[#E6D0AC]/50">{product.price}</p>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); }}
                    className="w-8 h-8 rounded-full border border-[#E6D0AC]/20 flex items-center justify-center hover:bg-[#E6D0AC]/10 transition-all"
                  >
                    <Plus size={14} className="text-[#E6D0AC]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== UNLEASH / NEW ARRIVALS SECTION ===== */}
      <section className="w-full px-6 lg:px-10 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 min-h-[500px]">

          {/* Left Column */}
          <div className="col-span-4 flex flex-col justify-between py-4">
            {/* Top title */}
            <div>
              <h2 className="font-serif text-2xl lg:text-3xl text-[#E6D0AC] italic tracking-wide uppercase leading-snug">
                Unleash Your Own<br />Hidden Flare
              </h2>
              <div className="w-full h-px bg-[#E6D0AC]/15 mt-6"></div>
            </div>

            {/* Middle — New Arrivals */}
            <div className="mt-auto mb-auto">
              <div className="flex items-baseline gap-6 mb-8">
                <h3 className="font-serif text-3xl lg:text-4xl text-[#E6D0AC] italic tracking-wide">
                  New Arrivals
                </h3>
                <span className="font-serif text-xl text-[#E6D0AC]/40 italic">01/25</span>
              </div>

              <p className="font-serif text-xl lg:text-2xl text-[#E6D0AC]/70 leading-relaxed mb-10">
                We're crafting personalized<br />
                memories since <span className="italic text-[#E6D0AC]">1964</span>
              </p>

              <button 
                onClick={onShopClick}
                className="flex items-center gap-2 group"
              >
                <span className="font-serif text-base text-[#E6D0AC]/70 underline underline-offset-4 group-hover:text-[#E6D0AC] transition-colors">
                  View Collections
                </span>
                <ArrowUpRight size={14} className="text-[#E6D0AC]/70 group-hover:text-[#E6D0AC] transition-colors" />
              </button>
            </div>
          </div>

          {/* Center — Large Image */}
          <div className="col-span-4 flex items-start">
            <div className="w-full aspect-[3/4] rounded-xl overflow-hidden border border-[#E6D0AC]/10">
              <img 
                src="/assets/model-bg.png" 
                alt="Model wearing gold jewelry" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-4 flex flex-col gap-6">
            {/* Top text */}
            <div className="py-4">
              <h3 className="font-serif text-3xl lg:text-4xl text-[#E6D0AC] italic leading-tight mb-4">
                Dare to dazzle<br />differently
              </h3>
              <p className="font-serif text-sm text-[#E6D0AC]/50 leading-relaxed">
                Where Elegance Meets Eternity. Timeless<br />
                Jewellery for Every Moment.
              </p>
            </div>

            {/* Bottom image */}
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#E6D0AC]/10 mt-auto">
              <img 
                src="/assets/model-bg-2.png" 
                alt="Designer jewelry showcase" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== LATEST COLLECTION ===== */}
      <section className="w-full px-6 lg:px-10 pb-20 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl lg:text-4xl text-[#E6D0AC] italic tracking-wide">
            Latest Collection
          </h2>
          <button 
            onClick={onShopClick}
            className="flex items-center gap-3 group"
          >
            <span className="font-serif text-base text-[#E6D0AC]/70 underline underline-offset-4 group-hover:text-[#E6D0AC] transition-colors">
              View Collection
            </span>
            <div className="w-9 h-9 rounded-full border border-[#E6D0AC]/30 flex items-center justify-center group-hover:bg-[#E6D0AC]/10 transition-all">
              <ArrowUpRight size={16} className="text-[#E6D0AC]" />
            </div>
          </button>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { label: 'Hand & Arm Jewellery', image: '/assets/model-bg.png' },
            { label: 'Necklace & Bracelets', image: '/assets/model-bg-2.png' },
            { label: 'Diamond Necklace', image: '/assets/model-bg-3.png' },
            { label: 'Jewellery set', image: '/assets/model-bg.png' },
          ].map((category, index) => (
            <div 
              key={index}
              onClick={onShopClick}
              className="flex flex-col gap-3 cursor-pointer group"
            >
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[#E6D0AC]/10 group-hover:border-[#E6D0AC]/25 transition-all duration-300">
                <img 
                  src={category.image} 
                  alt={category.label} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <p className="font-serif text-base text-[#E6D0AC]/70 text-center group-hover:text-[#E6D0AC] transition-colors">
                {category.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FESTIVALS COLLECTION ===== */}
      <section className="w-full px-6 lg:px-10 pb-20 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl lg:text-4xl text-[#E6D0AC] italic tracking-wide">
            Festivals Collection
          </h2>
          <button 
            onClick={onShopClick}
            className="flex items-center gap-3 group"
          >
            <span className="font-serif text-base text-[#E6D0AC]/70 underline underline-offset-4 group-hover:text-[#E6D0AC] transition-colors">
              View Collection
            </span>
            <div className="w-9 h-9 rounded-full border border-[#E6D0AC]/30 flex items-center justify-center group-hover:bg-[#E6D0AC]/10 transition-all">
              <ArrowUpRight size={16} className="text-[#E6D0AC]" />
            </div>
          </button>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { label: 'Hand & Arm Jewellery', image: '/assets/model-bg-2.png' },
            { label: 'Necklace & Bracelets', image: '/assets/model-bg-3.png' },
            { label: 'Diamond Necklace', image: '/assets/model-bg.png' },
            { label: 'Jewellery set', image: '/assets/model-bg-2.png' },
          ].map((category, index) => (
            <div 
              key={index}
              onClick={onShopClick}
              className="flex flex-col gap-3 cursor-pointer group"
            >
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[#E6D0AC]/10 group-hover:border-[#E6D0AC]/25 transition-all duration-300">
                <img 
                  src={category.image} 
                  alt={category.label} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <p className="font-serif text-base text-[#E6D0AC]/70 text-center group-hover:text-[#E6D0AC] transition-colors">
                {category.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== AESTHETIC JEWELLERY ===== */}
      <section className="w-full px-6 lg:px-10 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Text */}
          <div className="flex flex-col gap-6 py-8">
            <h2 className="font-serif text-3xl lg:text-4xl text-[#E6D0AC] italic tracking-wide">
              Aesthetic jewellery
            </h2>

            <p className="font-sans text-sm text-[#E6D0AC]/50 leading-relaxed">
              Jewellery has been an integral part of human culture for
              thousands of years, symbolizing beauty, status, tradition,
              and personal expression. Crafted from precious metals,
              gemstones, and a variety of other materials, jewellery
              serves not only as adornment but also as a reflection of
              cultural.
            </p>

            <p className="font-sans text-sm text-[#E6D0AC]/50 leading-relaxed">
              Heritage.Jewellery has been an integral part of human
              culture for thousands of years, symbolizing beauty, status,
              tradition, and personal expression. Crafted from precious
              metals, gemstones, and a variety of other materials,
              jewellery serves not only as adornment but also as a
              reflection of cultural heritage.
            </p>

            <button className="self-start border border-[#E6D0AC]/30 rounded-lg px-6 py-3 font-sans text-sm text-[#E6D0AC] hover:bg-[#E6D0AC]/10 transition-all mt-2">
              Know more
            </button>
          </div>

          {/* Right — Image with floating circles */}
          <div className="relative">
            {/* Main image */}
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[#E6D0AC]/15">
              <img 
                src="/assets/model-bg-2.png" 
                alt="Models wearing aesthetic jewellery" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-right floating circle */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full overflow-hidden border-2 border-[#E6D0AC]/20 shadow-xl shadow-black/50">
              <img 
                src="/assets/necklace.png" 
                alt="Necklace detail" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-center floating circle */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-2 border-[#E6D0AC]/20 shadow-xl shadow-black/50">
              <img 
                src="/assets/model-bg-3.png" 
                alt="Model detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTY COLLECTION ===== */}
      <section className="w-full px-6 lg:px-10 pb-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl lg:text-4xl text-[#E6D0AC] italic tracking-wide">
            Party Collection
          </h2>
          <button onClick={onShopClick} className="flex items-center gap-3 group">
            <span className="font-serif text-base text-[#E6D0AC]/70 underline underline-offset-4 group-hover:text-[#E6D0AC] transition-colors">View Collection</span>
            <div className="w-9 h-9 rounded-full border border-[#E6D0AC]/30 flex items-center justify-center group-hover:bg-[#E6D0AC]/10 transition-all">
              <ArrowUpRight size={16} className="text-[#E6D0AC]" />
            </div>
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { label: 'Hand & Arm Jewellery', image: '/assets/model-bg-3.png' },
            { label: 'Bracelet', image: '/assets/model-bg.png' },
            { label: 'Diamond Rings', image: '/assets/model-bg-2.png' },
            { label: 'Earrings', image: '/assets/model-bg-3.png' },
          ].map((category, index) => (
            <div key={index} onClick={onShopClick} className="flex flex-col gap-3 cursor-pointer group">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[#E6D0AC]/10 group-hover:border-[#E6D0AC]/25 transition-all duration-300">
                <img src={category.image} alt={category.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="font-serif text-base text-[#E6D0AC]/70 text-center group-hover:text-[#E6D0AC] transition-colors">{category.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CLIENT TESTIMONIALS ===== */}
      <section className="w-full px-6 lg:px-10 pb-20 max-w-7xl mx-auto">
        {/* Header — Centered */}
        <div className="text-center mb-12">
          <p className="font-serif text-sm text-[#C77E18] tracking-[0.25em] uppercase mb-3">
            What Our Joyful Clients Share
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#E6D0AC] italic tracking-wide leading-snug">
            What Our Clients Say About<br />Our Collection
          </h2>
          <p className="font-sans text-sm text-[#E6D0AC]/40 mt-4 max-w-lg mx-auto leading-relaxed">
            With the great response from our clients, we are now one of the best-rated sellers in
            ThemeForest. And here are some of the best words from our customers.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Ms Anita Sharma', avatar: '/assets/model-bg.png' },
            { name: 'MR Suresh', avatar: '/assets/model-bg-2.png' },
            { name: 'Ms Puja Sharma', avatar: '/assets/model-bg-3.png' },
          ].map((client, index) => (
            <div 
              key={index}
              className="relative rounded-2xl border border-[#E6D0AC]/10 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-6 lg:p-8 overflow-hidden"
            >
              {/* Subtle background decoration on last card */}
              {index === 2 && (
                <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none"
                  style={{
                    backgroundImage: 'url(/assets/login-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              )}

              {/* Avatar */}
              <div className="relative z-10 w-14 h-14 rounded-full overflow-hidden border-2 border-[#E6D0AC]/20 mb-4">
                <img src={client.avatar} alt={client.name} className="w-full h-full object-cover" />
              </div>

              {/* Name */}
              <h3 className="relative z-10 font-serif text-lg text-[#E6D0AC] mb-1">{client.name}</h3>

              {/* Stars */}
              <div className="relative z-10 flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-[#C77E18] text-sm">★</span>
                ))}
              </div>

              {/* Review text */}
              <p className="relative z-10 font-sans text-sm text-[#E6D0AC]/50 leading-relaxed italic">
                "Absolutely amazing service! From start to finish,
                everything was smooth and professional. The team
                was responsive, helpful, and went above and beyond.
                Highly recommended!"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOLLOW US ON INSTAGRAM ===== */}
      <section className="w-full px-6 lg:px-10 pb-16 max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl lg:text-4xl text-[#E6D0AC] text-center tracking-wide mb-10">
          Follow Us On Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            '/assets/model-bg.png',
            '/assets/model-bg-2.png',
            '/assets/model-bg-3.png',
            '/assets/necklace.png',
            '/assets/model-bg.png',
          ].map((img, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-xl overflow-hidden border border-[#E6D0AC]/10 cursor-pointer group"
            >
              <img 
                src={img} 
                alt={`Instagram ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
          ))}
        </div>
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
        <div className="border-t border-[#E6D0AC]/10 py-5 text-center relative z-10">
          <p className="font-sans text-xs text-[#E6D0AC]/30">Copyright © 2022 Hiraola. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default DesktopHome;
