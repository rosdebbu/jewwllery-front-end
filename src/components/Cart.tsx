import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, Minus, Plus, Trash2 } from 'lucide-react';
import gsap from 'gsap';
import api from '../api/axios';

interface CartProps {
  onBack: () => void;
  onCheckout?: () => void;
}

const Cart: React.FC<CartProps> = ({ onBack, onCheckout }) => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await api.get('/cart');
      const formattedItems = response.data.map((item: any) => ({
        id: item.id, // cartItem id
        productId: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.image
      }));
      setItems(formattedItems);
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) return;
    
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
  }, [loading]);

  const updateQuantity = async (id: string, currentQuantity: number, delta: number) => {
    const newQuantity = Math.max(1, currentQuantity + delta);
    if (newQuantity === currentQuantity) return;

    // Optimistic UI update
    setItems(items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));

    try {
      await api.put(`/cart/${id}`, { quantity: newQuantity });
    } catch (error) {
      console.error('Failed to update quantity:', error);
      // Revert on failure
      fetchCartItems();
    }
  };

  const removeItem = async (id: string) => {
    // Optimistic UI update
    setItems(items.filter(item => item.id !== id));

    try {
      await api.delete(`/cart/${id}`);
    } catch (error) {
      console.error('Failed to remove item:', error);
      // Revert on failure
      fetchCartItems();
    }
  };

  const itemTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = itemTotal;

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#1A1A1A] overflow-y-auto overflow-x-hidden text-champagne pb-10"
      style={{
        backgroundImage: 'url(/assets/home-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/40 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 md:px-6 pt-12">
        
        {/* Header */}
        <div ref={addToRefs} className="flex items-center justify-center relative mb-10">
          <button 
            onClick={onBack}
            className="absolute left-0 text-champagne/80 hover:text-champagne transition-colors p-2"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>
          <h1 className="font-serif text-3xl font-medium tracking-wide">My Cart</h1>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col gap-6 mb-10">
          {items.map((item) => (
            <div ref={addToRefs} key={item.id} className="flex gap-4">
              {/* Product Image */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-black flex-shrink-0 border border-white/10">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-90" />
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col justify-center py-1">
                <h3 className="font-serif text-xl tracking-wide mb-1">{item.name}</h3>
                {item.size && (
                  <p className="font-sans text-sm text-champagne/60 mb-2">Size &nbsp;{item.size}</p>
                )}
                <p className="font-sans text-sm font-medium mb-3">₹ {item.price.toLocaleString('en-IN')}</p>
                
                <div className="flex justify-between items-center mt-auto">
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity, -1)}
                      className="w-6 h-6 rounded bg-transparent border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <Minus size={12} className="text-champagne/80" />
                    </button>
                    <span className="w-4 text-center font-serif text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity, 1)}
                      className="w-6 h-6 rounded bg-[#E6D0AC] text-[#5C4524] flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Plus size={12} strokeWidth={3} />
                    </button>
                  </div>

                  {/* Delete Button */}
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-champagne/60 hover:text-red-400 hover:bg-red-400/10 transition-all"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Item Total */}
        <div ref={addToRefs} className="flex justify-between items-center mb-10">
          <h2 className="font-serif text-2xl">Item Total</h2>
          <span className="font-serif text-xl">₹ {itemTotal.toLocaleString('en-IN')}</span>
        </div>

        {/* Coupon Input */}
        <div ref={addToRefs} className="relative w-full mb-10">
          <input 
            type="text" 
            placeholder="Enter Coupon" 
            className="w-full bg-transparent border border-white/30 rounded-full py-4 pl-6 pr-36 text-champagne placeholder-champagne/50 outline-none focus:border-[#E6D0AC]/70 transition-colors backdrop-blur-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-[#5C4524] font-serif px-4 py-2.5 rounded-full hover:bg-[#E6D0AC] transition-colors font-medium">
            Apply Coupon
          </button>
        </div>

        {/* Summary Details */}
        <div ref={addToRefs} className="flex flex-col gap-4 mb-6">
          <div className="flex justify-between text-champagne/80">
            <span className="font-serif text-lg">Discount</span>
            <span className="font-sans"></span>
          </div>
          <div className="flex justify-between text-champagne/80">
            <span className="font-serif text-lg">Tax</span>
            <span className="font-sans">10%</span>
          </div>
          <div className="flex justify-between text-champagne/80">
            <span className="font-serif text-lg">Shipping Charges</span>
            <span className="font-sans">₹ 1,032</span>
          </div>
        </div>

        {/* Divider */}
        <div ref={addToRefs} className="w-full h-px bg-white/20 mb-6"></div>

        {/* Final Total */}
        <div ref={addToRefs} className="flex justify-between items-center mb-10">
          <span className="font-serif text-xl">Total</span>
          <span className="font-serif text-xl">₹ {total.toLocaleString('en-IN')}</span>
        </div>

        {/* Proceed to Checkout Button */}
        <div ref={addToRefs}>
          <button 
            onClick={onCheckout}
            className="w-full py-4 rounded-xl bg-[#E6D0AC] text-[#5C4524] font-serif text-xl tracking-wider hover:bg-white transition-colors duration-300 active:scale-[0.98] font-medium shadow-[0_0_20px_rgba(230,208,172,0.2)]"
          >
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;
