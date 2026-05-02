import React, { useEffect, useRef, useState } from 'react';
import { EyeOff, Eye } from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';
import gsap from 'gsap';
import axios from 'axios';

interface LoginProps {
  onSignupClick: () => void;
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onSignupClick, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  const handleLoginSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      
      // Save token
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      onLogin(); // Navigate to Home
    } catch (err: any) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setLoading(true);
        setError('');
        const response = await axios.post('http://localhost:5000/api/auth/google', {
          access_token: tokenResponse.access_token,
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        onLogin();
      } catch (err: any) {
        setError(err.response?.data?.error || 'Google Login failed');
      } finally {
        setLoading(false);
      }
    },
    onError: () => {
      setError('Google Login was canceled or failed');
    }
  });

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Set initial states
    if (leftPanelRef.current) {
      gsap.set(leftPanelRef.current, { opacity: 0, x: -40 });
    }
    if (rightPanelRef.current) {
      gsap.set(rightPanelRef.current, { opacity: 0, x: 40 });
    }
    gsap.set(elementsRef.current, { opacity: 0, y: 25 });

    // Animate panels in
    tl.to(leftPanelRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
    })
    .to(rightPanelRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
    }, "-=0.5")
    .to(elementsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.08,
    }, "-=0.4");

  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#0D0D0D] flex items-center justify-center p-4 md:p-8 overflow-hidden text-champagne"
      style={{
        backgroundImage: 'url(/assets/login-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Main Card Container */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-0">

        {/* ===== LEFT PANEL - Let's Get Started ===== */}
        <div 
          ref={leftPanelRef}
          className="relative hidden md:flex flex-col justify-end border border-[#E6D0AC]/20 rounded-l-2xl overflow-hidden min-h-[600px]"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/assets/login-bg.png)' }}
          ></div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 p-10 pb-14">
            <h2 className="font-serif text-4xl lg:text-5xl text-champagne mb-4 font-medium tracking-wide leading-tight">
              Let's Get<br />Started
            </h2>
            <p className="font-sans text-champagne/60 text-sm leading-relaxed max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>

        {/* ===== RIGHT PANEL - Login Form ===== */}
        <div 
          ref={rightPanelRef}
          className="flex flex-col items-center justify-center border border-[#E6D0AC]/20 md:border-l-0 rounded-2xl md:rounded-l-none md:rounded-r-2xl bg-[#1A1A1A]/90 backdrop-blur-xl px-6 py-12 md:px-12 md:py-16 min-h-[600px]"
        >
          {/* Logo */}
          <div ref={addToRefs} className="mb-10">
            <h1 className="font-serif text-4xl md:text-5xl text-gold-light uppercase tracking-[0.15em] font-medium"
                style={{ textShadow: '0 0 40px rgba(230, 208, 172, 0.08)' }}>
              Indiglam
            </h1>
          </div>

          {/* Heading */}
          <div ref={addToRefs} className="w-full max-w-sm mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-champagne font-medium tracking-wide">
              Ready To Start ?
            </h2>
          </div>

          {/* Form Fields */}
          <div ref={addToRefs} className="w-full max-w-sm flex flex-col gap-4 mb-5">
            <div className="w-full bg-[#2A2A2A]/80 border border-[#3A3A3A] rounded-xl px-5 py-4 transition-all focus-within:border-[#E6D0AC]/40 focus-within:bg-[#2A2A2A]">
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-champagne placeholder-champagne/40 outline-none font-sans text-base"
              />
            </div>

            <div className="w-full bg-[#2A2A2A]/80 border border-[#3A3A3A] rounded-xl px-5 py-4 flex items-center transition-all focus-within:border-[#E6D0AC]/40 focus-within:bg-[#2A2A2A]">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-champagne placeholder-champagne/40 outline-none font-sans text-base"
              />
              <button onClick={() => setShowPassword(!showPassword)} className="text-champagne/40 hover:text-champagne transition-colors">
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-400 text-sm text-center mb-3 w-full max-w-sm">{error}</p>}

          {/* Login Button */}
          <div ref={addToRefs} className="w-full max-w-sm mb-8">
            <button 
              onClick={handleLoginSubmit} 
              disabled={loading} 
              className="w-full py-4 rounded-xl bg-[#E6D0AC] text-[#3A2A14] font-serif text-lg tracking-wider hover:bg-[#F0DFC0] transition-colors duration-300 active:scale-[0.98] disabled:opacity-70"
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>
          </div>

          {/* Divider */}
          <div ref={addToRefs} className="w-full max-w-sm flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-champagne/20"></div>
            <span className="font-sans text-champagne/50 text-sm">Or with</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-champagne/20"></div>
          </div>

          {/* Social Buttons */}
          <div ref={addToRefs} className="w-full max-w-sm flex gap-4 mb-8">
            <button 
              onClick={() => googleLogin()} 
              className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl border border-[#3A3A3A] bg-[#2A2A2A]/50 hover:border-[#E6D0AC]/40 hover:bg-[#2A2A2A] transition-all active:scale-[0.98]"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l2.45-1.89l1.23-.95z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-serif tracking-wide text-base">Google</span>
            </button>

            <button className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl border border-[#3A3A3A] bg-[#2A2A2A]/50 hover:border-[#E6D0AC]/40 hover:bg-[#2A2A2A] transition-all active:scale-[0.98]">
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.05 13.565c-.015-2.673 2.195-3.955 2.29-4.015-1.24-1.82-3.175-2.065-3.87-2.09-1.645-.16-3.21.96-4.05.96-.835 0-2.12-.94-3.48-.915-1.765.025-3.4 1.025-4.305 2.6-1.84 3.195-.47 7.935 1.325 10.53 1.045 1.485 2.26 3.145 3.865 3.09 1.56-.05 2.155-.99 4.05-.99 1.88 0 2.44.99 4.065.96 1.66-.025 2.73-1.515 3.77-3.03 1.2-1.75 1.69-3.45 1.715-3.545-.04-.015-3.35-1.285-3.365-3.53m-2.585-5.32c.86-1.045 1.44-2.49 1.285-3.935-1.23.05-2.73.82-3.615 1.86-.795.93-1.485 2.41-1.305 3.82 1.37.105 2.775-.705 3.635-1.745" fill="#FFFFFF"/>
              </svg>
              <span className="font-serif tracking-wide text-base">Apple</span>
            </button>
          </div>

          {/* Footer */}
          <div ref={addToRefs} className="w-full max-w-sm text-center">
            <p className="font-serif text-champagne/60 text-sm">
              Don't Have an Account? <button onClick={onSignupClick} className="text-champagne underline underline-offset-2 hover:text-[#E6D0AC] transition-colors">Signup</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
