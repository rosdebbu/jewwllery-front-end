import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SplashProps {
  onComplete: () => void;
}

const Splash: React.FC<SplashProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const topRightJewelRef = useRef<HTMLImageElement>(null);
  const bottomLeftJewelRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ 
      defaults: { ease: "power3.out" },
      onComplete: () => {
        // After 4 seconds total, transition out
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            onComplete: onComplete
          });
        }, 1500);
      }
    });

    gsap.set([topRightJewelRef.current, bottomLeftJewelRef.current], { 
      opacity: 0, 
      scale: 0.8,
      rotation: -10 
    });
    
    gsap.set(textRef.current, { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
      letterSpacing: "0em"
    });

    tl.to([topRightJewelRef.current, bottomLeftJewelRef.current], {
      opacity: 0.7,
      scale: 1,
      rotation: 0,
      duration: 2,
      stagger: 0.3
    })
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      letterSpacing: "0.15em",
      duration: 2,
    }, "-=1.5");

    gsap.to(topRightJewelRef.current, {
      y: -15,
      x: 10,
      rotation: 2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(bottomLeftJewelRef.current, {
      y: 15,
      x: -10,
      rotation: -2,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-50 w-full h-full bg-black overflow-hidden flex items-center justify-center selection:bg-gold-light selection:text-black"
    >
      <img 
        ref={topRightJewelRef}
        src="/assets/diamond-vine.png" 
        alt="Diamond Vine Decoration" 
        className="absolute top-[-5%] right-[-5%] w-[30vw] md:w-[20vw] max-w-[300px] object-cover mix-blend-screen opacity-0"
      />
      <img 
        ref={bottomLeftJewelRef}
        src="/assets/diamond-vine.png" 
        alt="Diamond Vine Decoration" 
        className="absolute bottom-[-5%] left-[-5%] w-[30vw] md:w-[20vw] max-w-[300px] object-cover mix-blend-screen opacity-0 rotate-180"
      />
      <div className="z-10 flex items-center justify-center">
        <h1 
          ref={textRef}
          className="font-serif text-5xl md:text-7xl lg:text-9xl text-gold-light uppercase tracking-[0.1em] font-medium"
          style={{ 
            textShadow: '0 0 40px rgba(230, 208, 172, 0.1)',
            transformOrigin: 'center center'
          }}
        >
          Indiglam
        </h1>
      </div>
    </div>
  );
};

export default Splash;
