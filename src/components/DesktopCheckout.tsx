import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

interface DesktopCheckoutProps {
  onConfirmPayment?: () => void;
}

const DesktopCheckout: React.FC<DesktopCheckoutProps> = ({ onConfirmPayment }) => {
  const [selectedPayment, setSelectedPayment] = useState<string>('Google Pay / Phonepay / Paytm');

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      '.dcheckout-anim',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    );
  }, []);

  const paymentMethods = [
    'Google Pay / Phonepay / Paytm',
    'Debit Card / Credit Card',
    'Cash On Delivery',
    'EMI'
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
        
        <div className="px-6 lg:px-10 py-20 max-w-5xl mx-auto text-center dcheckout-anim relative z-10 border-b border-[#E6D0AC]/20">
          <h1 className="font-serif text-4xl lg:text-5xl text-[#E6D0AC] tracking-[0.1em] mb-2">
            Checkout
          </h1>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="w-full px-6 lg:px-10 py-16 max-w-6xl mx-auto dcheckout-anim relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT: Payment Methods */}
          <div className="flex-1">
            <h2 className="font-serif text-3xl text-[#D4BB8E] mb-10">Select Payment Method</h2>
            
            <div className="flex flex-col gap-6">
              {paymentMethods.map((method) => (
                <div key={method} className="flex flex-col">
                  <label className="flex items-center gap-4 cursor-pointer group pb-6">
                    <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-[#D4BB8E] bg-transparent">
                      {selectedPayment === method && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#D4BB8E]"></div>
                      )}
                    </div>
                    <span className="font-serif text-xl text-[#D4BB8E]/80 group-hover:text-[#D4BB8E] transition-colors">
                      {method}
                    </span>
                    {/* Hidden radio input for accessibility */}
                    <input 
                      type="radio" 
                      name="payment_method" 
                      value={method}
                      checked={selectedPayment === method}
                      onChange={() => setSelectedPayment(method)}
                      className="hidden"
                    />
                  </label>
                  <div className="w-full h-px bg-[#D4BB8E]/20"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* RIGHT: Order Summary */}
          <div className="w-full lg:w-[400px] flex-shrink-0">
            <h2 className="font-serif text-3xl text-[#D4BB8E] mb-10">Order Summary</h2>
            
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center pb-6 border-b border-[#D4BB8E]/20">
                <span className="font-serif text-xl text-[#D4BB8E]/80">Items</span>
                <span className="font-serif text-xl text-[#D4BB8E]/80">2</span>
              </div>
              
              <div className="flex justify-between items-center pb-6 border-b border-[#D4BB8E]/20">
                <span className="font-serif text-xl text-[#D4BB8E]/80">Sub Total</span>
                <span className="font-serif text-xl text-[#D4BB8E]/80">₹ 20,234</span>
              </div>
              
              <div className="flex justify-between items-center pb-6 border-b border-[#D4BB8E]/20">
                <span className="font-serif text-xl text-[#D4BB8E]/80">Shipping</span>
                <span className="font-serif text-xl text-[#D4BB8E]/80">₹ 534</span>
              </div>
              
              <div className="flex justify-between items-center pb-6 border-b border-[#D4BB8E]/20">
                <span className="font-serif text-xl text-[#D4BB8E]/80">Taxes</span>
                <span className="font-serif text-xl text-[#D4BB8E]/80">₹ 201</span>
              </div>
              
              <div className="flex justify-between items-center pb-6 border-b border-[#D4BB8E]/20">
                <span className="font-serif text-xl text-[#D4BB8E]/80">Coupon Discount</span>
                <span className="font-serif text-xl text-[#D4BB8E]/80">₹ 201</span>
              </div>
              
              <div className="flex justify-between items-center pt-2 pb-8">
                <span className="font-serif text-2xl text-[#D4BB8E]">Total</span>
                <span className="font-serif text-2xl text-[#D4BB8E]">₹ 20,234</span>
              </div>
              
              <button 
                onClick={onConfirmPayment}
                className="w-full py-4 bg-[#E6D0AC] hover:bg-[#D4BB8E] transition-colors text-[#3A2A14] font-serif text-xl shadow-md"
              >
                Confirm Payment
              </button>
            </div>
          </div>
          
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

export default DesktopCheckout;
