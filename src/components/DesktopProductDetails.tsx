import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

interface DesktopProductDetailsProps {
  product: any;
  onBack?: () => void;
  onContinue?: () => void;
}

const DesktopProductDetails: React.FC<DesktopProductDetailsProps> = ({ product, onBack, onContinue }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'additional'>('description');
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      '.ddetails-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  // Use product details or fallbacks
  const title = product?.name || 'Diamond Ring';
  const price = product?.price || 'Rs 50,000';
  const mainImage = product?.img || '/assets/necklace.png';

  const thumbnails = [
    mainImage,
    '/assets/model-bg-2.png',
    '/assets/model-bg-3.png',
    '/assets/earrings.png'
  ];

  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen pt-20 overflow-x-hidden">
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#E6D0AC]/5 to-transparent pointer-events-none"></div>

      {/* Notification Banner */}
      {showNotification && (
        <div className="w-full py-6 text-center border-b border-[#E6D0AC]/10 ddetails-anim relative z-10">
          <p className="font-serif text-[#E6D0AC] text-lg">
            "{title}" has been added to your cart.
          </p>
        </div>
      )}

      {/* Main Top Section: Product / Details / Total */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-10 py-12 ddetails-anim relative z-10">
        {/* Headers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 border-b border-[#E6D0AC]/10 pb-4">
          <div className="md:col-span-5">
            <h3 className="font-serif text-[#E6D0AC] text-xl">Product</h3>
          </div>
          <div className="md:col-span-4">
            <h3 className="font-serif text-[#E6D0AC]/80 text-xl">Details</h3>
          </div>
          <div className="md:col-span-3">
            <h3 className="font-serif text-[#E6D0AC]/80 text-xl text-right">Total</h3>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* 1. Product Images */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="w-full aspect-square bg-[#111] overflow-hidden border border-[#E6D0AC]/10">
              <img src={mainImage} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {thumbnails.map((thumb, idx) => (
                <div key={idx} className="aspect-square bg-[#111] overflow-hidden cursor-pointer border border-transparent hover:border-[#E6D0AC]/50 transition-colors">
                  <img src={thumb} alt={`Thumbnail ${idx+1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* 2. Details */}
          <div className="md:col-span-4 flex flex-col pt-2">
            <h1 className="font-serif text-3xl text-[#E6D0AC] mb-1">{title}</h1>
            <p className="font-sans text-sm text-[#E6D0AC]/50 mb-6">Product Code: BXD0941938</p>

            <div className="mb-6">
              <span className="inline-block border border-[#E6D0AC]/30 text-[#E6D0AC]/80 text-sm px-3 py-1 mb-2">Save Rs 5,501</span>
              <p className="font-sans text-xs text-[#E6D0AC]/50 mb-2">20% savings on making charges</p>
              <p className="font-sans text-xs text-[#E6D0AC]/70">We guarantee correct per the size: Check Sizing Companion</p>
            </div>

            <h4 className="font-serif text-lg text-[#E6D0AC]/80 mb-3">Price Breakup</h4>
            <div className="flex gap-6 font-sans text-sm text-[#E6D0AC]/60 mb-8">
              <div>
                <span className="block mb-1">Diamond</span>
                <span className="opacity-70">Rs 30,231</span>
              </div>
              <div>
                <span className="block mb-1">Making</span>
                <span className="opacity-70">Rs 2,231</span>
              </div>
              <div>
                <span className="block mb-1">Tax</span>
                <span className="opacity-70">Rs 1,244</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-[#E6D0AC]/20 bg-transparent">
                <button 
                  className="px-3 py-2 text-[#E6D0AC]/60 hover:text-[#E6D0AC]"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >-</button>
                <span className="px-4 py-2 font-sans text-[#E6D0AC]/80 border-x border-[#E6D0AC]/10">{quantity}</span>
                <button 
                  className="px-3 py-2 text-[#E6D0AC]/60 hover:text-[#E6D0AC]"
                  onClick={() => setQuantity(q => q + 1)}
                >+</button>
              </div>
              <button 
                onClick={onContinue}
                className="bg-[#EAD6B5] hover:bg-[#DBC39A] text-[#0A0A0A] font-serif px-8 py-2.5 transition-colors"
              >
                Continue
              </button>
            </div>
          </div>

          {/* 3. Total */}
          <div className="md:col-span-3 flex flex-col items-end pt-2">
            <h2 className="font-serif text-2xl text-[#E6D0AC] mb-1">{price}</h2>
            <p className="font-sans text-xs text-[#E6D0AC]/50">Available Qty: In Stock!</p>
          </div>

        </div>
      </section>

      {/* Product Details Specs */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-10 py-12 border-t border-[#E6D0AC]/10 ddetails-anim relative z-10">
        <h2 className="font-serif text-2xl text-[#E6D0AC] mb-8">Product Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Basic Info */}
          <div>
            <h3 className="font-sans text-sm text-[#E6D0AC]/80 mb-4 border-b border-[#E6D0AC]/20 pb-2">Basic Information</h3>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              <li className="flex justify-between"><span className="text-[#E6D0AC]/50">Product Type</span><span className="text-[#E6D0AC]/90">Earring</span></li>
              <li className="flex justify-between"><span className="text-[#E6D0AC]/50">Brands</span><span className="text-[#E6D0AC]/90">Malabar</span></li>
              <li className="flex justify-between"><span className="text-[#E6D0AC]/50">Gender</span><span className="text-[#E6D0AC]/90">Women</span></li>
            </ul>
          </div>

          {/* Metal Info */}
          <div>
            <h3 className="font-sans text-sm text-[#E6D0AC]/80 mb-4 border-b border-[#E6D0AC]/20 pb-2">Metal Information</h3>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              <li className="flex justify-between"><span className="text-[#E6D0AC]/50">Metal Purity</span><span className="text-[#E6D0AC]/90">22 KT (916)</span></li>
              <li className="flex justify-between"><span className="text-[#E6D0AC]/50">Metal Colour</span><span className="text-[#E6D0AC]/90">White</span></li>
              <li className="flex justify-between"><span className="text-[#E6D0AC]/50">Gross Weight ( g )</span><span className="text-[#E6D0AC]/90">2.645</span></li>
              <li className="flex justify-between"><span className="text-[#E6D0AC]/50">Net Weight ( g )</span><span className="text-[#E6D0AC]/90">2.645</span></li>
            </ul>
          </div>

          {/* Cert Details */}
          <div>
            <h3 className="font-sans text-sm text-[#E6D0AC]/80 mb-4 border-b border-[#E6D0AC]/20 pb-2">Certification Details</h3>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              <li className="flex justify-between"><span className="text-[#E6D0AC]/50">Diamond Certification</span><span className="text-[#E6D0AC]/90">BIS Hallmark 916</span></li>
              <li className="flex justify-between"><span className="text-[#E6D0AC]/50">Hallmark License No</span><span className="text-[#E6D0AC]/90">HM/C-7250174629</span></li>
              <li className="flex justify-between"><span className="text-[#E6D0AC]/50">Stone Information</span><span className="text-[#E6D0AC]/90"></span></li>
              <li className="flex justify-between"><span className="text-[#E6D0AC]/50">Stone Weight ( g )</span><span className="text-[#E6D0AC]/90"></span></li>
            </ul>
          </div>

        </div>
      </section>

      {/* Description Tabs */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-10 py-12 border-t border-[#E6D0AC]/10 ddetails-anim relative z-10">
        <div className="flex gap-8 mb-6 border-b border-[#E6D0AC]/10">
          <button 
            className={`font-serif text-lg pb-3 border-b-2 transition-colors ${activeTab === 'description' ? 'border-[#E6D0AC] text-[#E6D0AC]' : 'border-transparent text-[#E6D0AC]/40 hover:text-[#E6D0AC]/70'}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`font-serif text-lg pb-3 border-b-2 transition-colors ${activeTab === 'additional' ? 'border-[#E6D0AC] text-[#E6D0AC]' : 'border-transparent text-[#E6D0AC]/40 hover:text-[#E6D0AC]/70'}`}
            onClick={() => setActiveTab('additional')}
          >
            Additional information
          </button>
        </div>
        
        <div className="font-sans text-sm text-[#E6D0AC]/60 leading-relaxed max-w-4xl">
          {activeTab === 'description' && (
            <>
              <p className="mb-4">
                Jewellery has been an integral part of human culture for thousands of years, serving as a symbol of beauty, status, 
                tradition, and personal expression. Crafted from precious metals, gemstones, beads, and natural materials, jewellery 
                pieces range from simple ornaments to intricate works of art.
              </p>
              <p>
                Historically, jewellery has held significant cultural and religious meanings in various societies, often passed down 
                through generations as heirlooms. Today, it continues to evolve in design and purpose — from luxury fashion 
                accessories to meaningful tokens of love, identity, and celebration. Whether worn daily or reserved for special 
                occasions, jewellery remains a timeless expression of style and individuality.
              </p>
            </>
          )}
          {activeTab === 'additional' && (
            <p>
              This item is crafted with the highest quality standards. Care instructions: Keep away from moisture and harsh chemicals. 
              Store in the provided velvet pouch when not in use.
            </p>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className="w-full max-w-6xl mx-auto px-6 lg:px-10 py-16 border-t border-[#E6D0AC]/10 ddetails-anim relative z-10">
        <h2 className="font-serif text-2xl text-[#E6D0AC] mb-8">Related product</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Ring', price: 'Rs 7,831', img: '/assets/model-bg-3.png' },
            { name: 'Bracelet', price: 'Rs 7,831', img: '/assets/model-bg-2.png' },
            { name: 'Necklace', price: 'Rs 7,831', img: '/assets/model-bg.png' },
            { name: 'Ring', price: 'Rs 7,831', img: '/assets/model-bg-3.png' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-square overflow-hidden mb-3 bg-[#111] border border-[#E6D0AC]/10">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="font-serif text-[#E6D0AC]/80 text-lg group-hover:text-[#E6D0AC] transition-colors">{item.name}</h3>
              <span className="font-sans text-sm text-[#E6D0AC]/50">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DARK FOOTER ===== */}
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

export default DesktopProductDetails;
