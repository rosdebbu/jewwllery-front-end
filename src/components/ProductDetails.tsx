import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, Minus, Plus } from 'lucide-react';
import gsap from 'gsap';
import api from '../api/axios';

interface Product {
  id: number | string;
  name: string;
  category: string;
  price: number | string;
  image: string;
  description?: string;
}

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
  onCartClick: () => void;
}

const sizes = ['4.0', '4.5', '5.0', '5.5', '6.0'];

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBack, onCartClick }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Fade in container
    tl.fromTo(containerRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    // Slide up bottom sheet
    tl.fromTo(sheetRef.current,
      { y: '100%' },
      { y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden flex flex-col text-champagne"
    >
      {/* Background Image / Product Image Area */}
      <div className="absolute inset-0 z-0 h-[65%] w-full flex items-center justify-center bg-black">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover opacity-90"
          style={{ objectPosition: 'center 20%' }}
        />
        {/* Gradient fade to black at the bottom of the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
      </div>

      {/* Top Bar with Back Button */}
      <div className="relative z-20 w-full px-6 pt-12 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-champagne hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* Spacer to push sheet to bottom */}
      <div className="flex-1"></div>

      {/* Details Bottom Sheet */}
      <div 
        ref={sheetRef}
        className="relative z-20 w-full max-w-2xl mx-auto bg-gradient-to-br from-[#2A2621]/95 to-[#1A1815]/95 backdrop-blur-2xl border border-white/10 rounded-t-[40px] px-6 md:px-8 pt-8 pb-8 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
        style={{
          borderBottom: 'none'
        }}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="font-serif text-3xl font-medium tracking-wide mb-2">{product.name}</h1>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} size={16} fill="#E6D0AC" className="text-[#E6D0AC]" />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1 backdrop-blur-sm">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="w-6 text-center font-serif text-lg">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg bg-[#E6D0AC] text-[#5C4524] flex items-center justify-center hover:bg-white transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <p className="text-champagne/70 font-sans text-sm leading-relaxed mb-6">
          Jewellery has been a timeless expression of beauty, identity, and culture for thousands of years. From ancient civilizations to modern fashion runways.
        </p>

        {/* Size Selection */}
        <div className="mb-8">
          <div className="inline-block border-b border-white/20 pb-1 mb-4">
            <span className="font-serif text-lg tracking-wide">Size</span>
          </div>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[60px] py-2 rounded-full font-serif text-sm transition-all border ${
                  selectedSize === size
                    ? 'bg-[#E6D0AC] text-[#5C4524] border-[#E6D0AC]'
                    : 'bg-white/5 text-champagne/70 border-white/10 hover:bg-white/10'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={async () => {
            try {
              await api.post('/cart', { productId: product.id, quantity });
              onCartClick();
            } catch (error) {
              console.error('Failed to add to cart:', error);
              // Fallback if not logged in or server down
              onCartClick();
            }
          }}
          className="w-full h-14 rounded-2xl bg-[#E6D0AC] text-[#5C4524] flex items-center justify-center gap-4 hover:bg-white transition-all active:scale-[0.98] group"
        >
          <span className="font-serif text-lg font-medium">Add To Cart</span>
          <div className="w-px h-6 bg-[#5C4524]/20 group-hover:bg-[#5C4524]/40 transition-colors"></div>
          <span className="font-sans text-lg font-semibold">₹ {typeof product.price === 'number' ? product.price.toLocaleString('en-IN') : product.price}</span>
        </button>
        
        {/* Bottom Home Indicator area spacing */}
        <div className="w-1/3 h-1 bg-white/20 rounded-full mx-auto mt-6"></div>
      </div>
    </div>
  );
};

export default ProductDetails;
