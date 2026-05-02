import React, { useEffect, useRef, useState } from 'react';
import { EyeOff, Eye } from 'lucide-react';
import gsap from 'gsap';
import axios from 'axios';

interface SignupProps {
  onLoginClick: () => void;
  onSignup: () => void;
}

const Signup: React.FC<SignupProps> = ({ onLoginClick, onSignup }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  const handleSignupSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name: `${firstName} ${lastName}`,
        email,
        password
      });

      // Save token
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      onSignup();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set(elementsRef.current, { opacity: 0, y: 30 });

    tl.to(elementsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.08,
      delay: 0.1
    });

  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#1A1A1A] flex flex-col items-center justify-center px-4 md:px-6 py-10 overflow-hidden text-champagne"
      style={{
        backgroundImage: 'url(/assets/login-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 w-full max-w-sm md:max-w-md flex flex-col">
        {/* Logo */}
        <div ref={addToRefs} className="flex justify-center mb-10">
          <h1 className="font-serif text-5xl text-gold-light uppercase tracking-[0.15em] font-medium"
              style={{ textShadow: '0 0 40px rgba(230, 208, 172, 0.1)' }}>
            Indiglam
          </h1>
        </div>

        {/* Heading */}
        <div ref={addToRefs}>
          <h2 className="font-serif text-3xl md:text-4xl text-champagne mb-8 font-medium tracking-wide">
            Signup
          </h2>
        </div>

        {/* Form Fields */}
        <div ref={addToRefs} className="flex flex-col gap-4 mb-4">
          <div className="w-full bg-white/10 border border-[#E5D1B9]/20 rounded-xl px-4 py-4 backdrop-blur-md transition-all focus-within:border-[#E5D1B9] focus-within:bg-white/15">
            <input 
              type="text" 
              placeholder="First Name" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-transparent text-champagne placeholder-champagne/50 outline-none font-sans text-lg"
            />
          </div>

          <div className="w-full bg-white/10 border border-[#E5D1B9]/20 rounded-xl px-4 py-4 backdrop-blur-md transition-all focus-within:border-[#E5D1B9] focus-within:bg-white/15">
            <input 
              type="text" 
              placeholder="Last Name" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full bg-transparent text-champagne placeholder-champagne/50 outline-none font-sans text-lg"
            />
          </div>

          <div className="w-full bg-white/10 border border-[#E5D1B9]/20 rounded-xl px-4 py-4 backdrop-blur-md transition-all focus-within:border-[#E5D1B9] focus-within:bg-white/15">
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-champagne placeholder-champagne/50 outline-none font-sans text-lg"
            />
          </div>

          <div className="w-full bg-white/10 border border-[#E5D1B9]/20 rounded-xl px-4 py-4 backdrop-blur-md flex items-center transition-all focus-within:border-[#E5D1B9] focus-within:bg-white/15">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-champagne placeholder-champagne/50 outline-none font-sans text-lg"
            />
          </div>

          <div className="w-full bg-white/10 border border-[#E5D1B9]/20 rounded-xl px-4 py-4 backdrop-blur-md flex items-center transition-all focus-within:border-[#E5D1B9] focus-within:bg-white/15">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Confirm Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-transparent text-champagne placeholder-champagne/50 outline-none font-sans text-lg"
            />
            <button onClick={() => setShowPassword(!showPassword)} className="text-champagne/50 hover:text-champagne transition-colors ml-2">
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>
        </div>

        {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}

        {/* Continue Button */}
        <div ref={addToRefs}>
          <button 
            onClick={handleSignupSubmit} 
            disabled={loading}
            className="w-full py-4 rounded-xl bg-[#E6D0AC] text-[#5C4524] font-serif text-xl tracking-wider hover:bg-white transition-colors duration-300 active:scale-[0.98] mb-8 disabled:opacity-70"
          >
            {loading ? 'Creating...' : 'Continue'}
          </button>
        </div>

        {/* Social Buttons Container */}
        <div ref={addToRefs} className="flex gap-4 mb-8">
          <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-champagne/30 hover:border-champagne/60 hover:bg-white/5 transition-all active:scale-[0.98]">
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l2.45-1.89l1.23-.95z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-serif tracking-wide text-lg">Google</span>
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-champagne/30 hover:border-champagne/60 hover:bg-white/5 transition-all active:scale-[0.98]">
            <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.05 13.565c-.015-2.673 2.195-3.955 2.29-4.015-1.24-1.82-3.175-2.065-3.87-2.09-1.645-.16-3.21.96-4.05.96-.835 0-2.12-.94-3.48-.915-1.765.025-3.4 1.025-4.305 2.6-1.84 3.195-.47 7.935 1.325 10.53 1.045 1.485 2.26 3.145 3.865 3.09 1.56-.05 2.155-.99 4.05-.99 1.88 0 2.44.99 4.065.96 1.66-.025 2.73-1.515 3.77-3.03 1.2-1.75 1.69-3.45 1.715-3.545-.04-.015-3.35-1.285-3.365-3.53m-2.585-5.32c.86-1.045 1.44-2.49 1.285-3.935-1.23.05-2.73.82-3.615 1.86-.795.93-1.485 2.41-1.305 3.82 1.37.105 2.775-.705 3.635-1.745" fill="#FFFFFF"/>
            </svg>
            <span className="font-serif tracking-wide text-lg">Apple</span>
          </button>
        </div>

        {/* Footer */}
        <div ref={addToRefs} className="text-center pb-8">
          <p className="font-serif text-champagne/80 text-sm">
            Already Have an Account? <button onClick={onLoginClick} className="underline hover:text-champagne transition-colors">Login</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
