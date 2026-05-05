import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

interface DesktopShopProps {
  onProductClick?: (product: any) => void;
}

const ALL_PRODUCTS = [
  { name: 'Gold Necklace', price: 'Price 50,000', img: '/assets/necklace.png', rating: 4 },
  { name: 'Diamond Ring', price: 'Price 1,20,000', img: '/assets/ring.png', rating: 5 },
  { name: 'Emerald Drop Earrings', price: 'Price 35,000', img: '/assets/earrings.png', rating: 4 },
  { name: 'Sapphire Pendant', price: 'Price 75,000', img: '/assets/model-bg-2.png', rating: 5 },
  { name: 'Platinum Bracelet', price: 'Price 95,000', img: '/assets/model-bg-3.png', rating: 4 },
  { name: 'Ruby Choker', price: 'Price 1,50,000', img: '/assets/necklace.png', rating: 5 },
  { name: 'Rose Gold Band', price: 'Price 25,000', img: '/assets/ring.png', rating: 4 },
  { name: 'Pearl Studs', price: 'Price 15,000', img: '/assets/earrings.png', rating: 3 },
  { name: 'Kundan Set', price: 'Price 2,50,000', img: '/assets/model-bg.png', rating: 5 },

  { name: 'Amethyst Ring', price: 'Price 45,000', img: '/assets/ring.png', rating: 4 },
  { name: 'Silver Anklet', price: 'Price 5,000', img: '/assets/model-bg-2.png', rating: 3 },
  { name: 'Diamond Tennis Bracelet', price: 'Price 3,00,000', img: '/assets/model-bg-3.png', rating: 5 },
  { name: 'Topaz Earrings', price: 'Price 28,000', img: '/assets/earrings.png', rating: 4 },
  { name: 'Vintage Locket', price: 'Price 65,000', img: '/assets/necklace.png', rating: 4 },
  { name: 'Opal Ring', price: 'Price 55,000', img: '/assets/ring.png', rating: 5 },
  { name: 'Bridal Maang Tikka', price: 'Price 40,000', img: '/assets/model-bg.png', rating: 4 },
  { name: 'Temple Jewellery Set', price: 'Price 1,80,000', img: '/assets/model-bg-2.png', rating: 5 },
  { name: 'Garnet Drop Earrings', price: 'Price 32,000', img: '/assets/earrings.png', rating: 4 },

  { name: 'Solitaire Diamond', price: 'Price 5,00,000', img: '/assets/ring.png', rating: 5 },
  { name: 'Jhumka Earrings', price: 'Price 85,000', img: '/assets/earrings.png', rating: 4 },
  { name: 'Mangalsutra', price: 'Price 1,10,000', img: '/assets/necklace.png', rating: 5 },
  { name: 'Navratna Ring', price: 'Price 70,000', img: '/assets/ring.png', rating: 4 },
  { name: 'Polki Necklace', price: 'Price 4,50,000', img: '/assets/model-bg-3.png', rating: 5 },
  { name: 'Filigree Bracelet', price: 'Price 50,000', img: '/assets/model-bg.png', rating: 4 },
  { name: 'Aquamarine Pendant', price: 'Price 48,000', img: '/assets/necklace.png', rating: 4 },
  { name: 'Peridot Studs', price: 'Price 22,000', img: '/assets/earrings.png', rating: 3 },
  { name: 'Chandbali Earrings', price: 'Price 95,000', img: '/assets/model-bg-2.png', rating: 5 },

  { name: 'Mens Platinum Chain', price: 'Price 1,30,000', img: '/assets/necklace.png', rating: 4 },
  { name: 'White Gold Ring', price: 'Price 80,000', img: '/assets/ring.png', rating: 4 },
  { name: 'Tanzanite Drop Earrings', price: 'Price 1,20,000', img: '/assets/earrings.png', rating: 5 },
  { name: 'Gold Bangle Set', price: 'Price 2,00,000', img: '/assets/model-bg-3.png', rating: 5 },
  { name: 'Ruby Cufflinks', price: 'Price 45,000', img: '/assets/ring.png', rating: 4 },
  { name: 'Emerald Choker', price: 'Price 3,50,000', img: '/assets/necklace.png', rating: 5 },
  { name: 'Hoop Earrings', price: 'Price 18,000', img: '/assets/earrings.png', rating: 4 },
  { name: 'Diamond Nose Pin', price: 'Price 12,000', img: '/assets/model-bg.png', rating: 4 },
  { name: 'Statement Cuff', price: 'Price 65,000', img: '/assets/model-bg-2.png', rating: 4 },
];

const DesktopShop: React.FC<DesktopShopProps> = ({ onProductClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(ALL_PRODUCTS.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = ALL_PRODUCTS.slice(startIndex, startIndex + itemsPerPage);
  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      '.dshop-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  const categories = [
    { name: 'Enamal Jewellery', img: '/assets/model-bg-3.png' },
    { name: 'Gold Necklace', img: '/assets/necklace.png' },
    { name: 'Bridal Jewellery', img: '/assets/model-bg-2.png' },
    { name: 'Pearl Jewellery', img: '/assets/model-bg.png' },
  ];

  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen pt-20 overflow-x-hidden">
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#E6D0AC]/5 to-transparent pointer-events-none"></div>

      {/* ===== HEADER SECTION ===== */}
      <section className="w-full px-6 lg:px-10 py-16 max-w-5xl mx-auto text-center dshop-anim relative z-10">
        <h1 className="font-serif text-4xl lg:text-5xl text-[#E6D0AC] tracking-[0.3em] uppercase mb-6">
          Shop
        </h1>
        <p className="font-sans text-sm md:text-base text-[#E6D0AC]/60 leading-relaxed max-w-3xl mx-auto">
          Jewellery has held significant cultural and religious meanings in various societies, often
          passed down through generations as heirlooms.
        </p>
      </section>

      {/* ===== CATEGORY MARQUEE ===== */}
      <section className="w-full bg-[#1A1814] py-4 overflow-hidden dshop-anim border-y border-[#E6D0AC]/10 relative z-10">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {/* Repeating the list to create a seamless infinite marquee */}
          {[...categories, ...categories, ...categories].map((cat, idx) => (
            <div key={idx} className="flex items-center gap-4 px-8 group cursor-pointer">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#E6D0AC]/20 group-hover:border-[#E6D0AC] transition-colors">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-serif text-xl md:text-2xl text-[#E6D0AC] group-hover:text-white transition-colors">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MAIN CONTENT: Filters + Product Grid ===== */}
      <section className="w-full px-6 lg:px-10 py-16 max-w-[1400px] mx-auto dshop-anim relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* LEFT SIDEBAR (Filters) */}
          <div className="w-full lg:w-[300px] flex-shrink-0 flex flex-col gap-6">
            
            {/* Filter Box 1: Product Type */}
            <div className="bg-[#111] border border-[#E6D0AC]/10 p-6 text-[#E6D0AC]">
              <div className="flex items-center border-b border-[#E6D0AC]/20 pb-2 mb-6">
                <input type="text" placeholder="Enter Keywords" className="bg-transparent outline-none text-sm placeholder-[#E6D0AC]/40 flex-1" />
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <h3 className="font-serif text-2xl mb-6">Product Type</h3>
              <ul className="flex flex-col gap-4 font-sans text-sm">
                {[
                  { name: 'Ear Stud', count: 40 },
                  { name: 'Earring Stud', count: 40 },
                  { name: 'Ring', count: 10 },
                  { name: 'Necklace', count: 10 },
                  { name: 'Braclet', count: 10 },
                ].map(item => (
                  <li key={item.name} className="flex justify-between items-center border-b border-[#E6D0AC]/10 pb-3 cursor-pointer hover:text-white">
                    <span>{item.name}</span>
                    <span className="opacity-50">({item.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filter Box 2: Filter by Weight */}
            <div className="bg-[#111] border border-[#E6D0AC]/10 p-6 text-[#E6D0AC]">
              <div className="flex items-center border-b border-[#E6D0AC]/20 pb-2 mb-6">
                <input type="text" placeholder="Enter Keywords" className="bg-transparent outline-none text-sm placeholder-[#E6D0AC]/40 flex-1" />
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <h3 className="font-serif text-2xl mb-6">Filter by Weight</h3>
              <ul className="flex flex-col gap-4 font-sans text-sm">
                {[
                  { name: '10g', count: 40 },
                  { name: '15g', count: 40 },
                  { name: '20g', count: 10 },
                  { name: '30g', count: 10 },
                ].map(item => (
                  <li key={item.name} className="flex justify-between items-center border-b border-[#E6D0AC]/10 pb-3 cursor-pointer hover:text-white">
                    <span>{item.name}</span>
                    <span className="opacity-50">({item.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filter Box 3: Tags */}
            <div className="bg-[#111] border border-[#E6D0AC]/10 p-6 text-[#E6D0AC]">
              <h3 className="font-serif text-2xl mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Braclets', 'Earrings', 'Gold', 'Platinum', 'Rings', 'Diamond'].map(tag => (
                  <button key={tag} className="bg-[#E6D0AC]/10 hover:bg-[#E6D0AC]/20 text-[#E6D0AC] text-xs px-3 py-1.5 transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Box 4: Filter By Price */}
            <div className="bg-[#111] border border-[#E6D0AC]/10 p-6 text-[#E6D0AC]">
              <h3 className="font-serif text-2xl mb-6">Filter By Price</h3>
              <div className="w-full h-1 bg-[#E6D0AC]/20 relative mb-4 rounded-full">
                <div className="absolute top-0 left-[10%] right-[30%] h-full bg-[#E6D0AC] rounded-full"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[10%] w-3 h-3 bg-[#E6D0AC] rounded-full shadow-md cursor-pointer"></div>
                <div className="absolute top-1/2 -translate-y-1/2 right-[30%] w-3 h-3 bg-[#E6D0AC] rounded-full shadow-md cursor-pointer"></div>
              </div>
              <div className="font-sans text-xs opacity-50 tracking-wide">
                Price  10,000 - 100,000
              </div>
            </div>

          </div>
          
          {/* RIGHT PRODUCT GRID */}
          <div className="flex-1 flex flex-col">
            
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <span className="font-serif text-[#E6D0AC]/60 text-lg">
                Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, ALL_PRODUCTS.length)} of {ALL_PRODUCTS.length} results
              </span>
              <div className="flex items-center gap-3">
                <button className="p-2 border border-[#E6D0AC]/20 text-[#E6D0AC] hover:bg-[#E6D0AC]/5 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                </button>
                <button className="p-2 border border-[#E6D0AC]/20 bg-[#E6D0AC]/10 text-[#E6D0AC] hover:bg-[#E6D0AC]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </button>
                <select className="bg-[#EAD6B5] text-[#0A0A0A] text-sm font-serif px-4 py-2 border-none outline-none appearance-none cursor-pointer pr-8 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%230A0A0A%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:calc(100%-10px)_center] bg-[length:10px_auto]">
                  <option>Default Sorting</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Latest</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProducts.map((product, idx) => (
                <div key={idx} className="flex flex-col group cursor-pointer" onClick={() => onProductClick?.(product)}>
                  <div className="w-full aspect-square overflow-hidden mb-4 bg-[#111] border border-[#E6D0AC]/10">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-[#E6D0AC]/80 text-lg group-hover:text-[#E6D0AC] transition-colors">{product.name}</h3>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(star => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill={star <= product.rating ? "#E6D0AC" : "none"} stroke="#E6D0AC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="font-sans text-sm text-[#E6D0AC]/50">{product.price}</span>
                    <button className="bg-[#E6D0AC]/10 hover:bg-[#E6D0AC]/20 text-[#E6D0AC] text-xs font-serif px-3 py-1.5 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-16 border-t border-[#E6D0AC]/10 pt-10">
              {[...Array(totalPages)].map((_, idx) => {
                const pageNum = idx + 1;
                return (
                  <button 
                    key={pageNum}
                    onClick={() => {
                      setCurrentPage(pageNum);
                      window.scrollTo({ top: 500, behavior: 'smooth' });
                    }}
                    className={`w-10 h-10 flex items-center justify-center font-serif text-lg transition-colors ${
                      currentPage === pageNum 
                        ? 'bg-[#EAD6B5] text-[#0A0A0A]' 
                        : 'border border-[#E6D0AC]/20 text-[#E6D0AC] hover:bg-[#E6D0AC]/10'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              })}
              <button 
                onClick={() => {
                  if(currentPage < totalPages) {
                    setCurrentPage(prev => prev + 1);
                    window.scrollTo({ top: 500, behavior: 'smooth' });
                  }
                }}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 flex items-center justify-center font-serif text-lg border border-[#E6D0AC]/20 transition-colors ${
                  currentPage === totalPages 
                    ? 'text-[#E6D0AC]/30 cursor-not-allowed'
                    : 'text-[#E6D0AC] hover:bg-[#E6D0AC]/10 cursor-pointer'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>

          </div>
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

export default DesktopShop;
