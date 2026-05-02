import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface OnboardingProps {
  onNext: () => void;
}

const slides = [
  {
    id: 0,
    image: '/assets/model-bg.png',
    title: <>Discover World's Best<br/>Jewellery</>,
    subtitle: "Jewellery plays a vital role in cultural and religious ceremonies across the world.",
  },
  {
    id: 1,
    image: '/assets/model-bg-2.png',
    title: <>Express Your Luxury<br/>Personality with us</>,
    subtitle: "It symbolizes tradition, heritage, and customs passed through generations.",
  },
  {
    id: 2,
    image: '/assets/model-bg-3.png',
    title: <>Express Your Luxury<br/>Personality with us</>,
    subtitle: "It symbolizes tradition, heritage, and customs passed through generations.",
  }
];

const Onboarding: React.FC<OnboardingProps> = ({ onNext }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initial Entrance Animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set(cardRef.current, { y: "100%", opacity: 0 });
    gsap.set(contentRef.current, { opacity: 0, y: 20 });
    
    // Set all images to scale 1.1 and opacity 0 initially except the first one which we will animate in
    imageRefs.current.forEach((el, index) => {
      if (el) {
        gsap.set(el, { scale: 1.1, opacity: 0 });
      }
    });

    // Animate the first background image
    if (imageRefs.current[0]) {
      tl.to(imageRefs.current[0], {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power2.out"
      });
    }

    // Animate Card sliding up
    tl.to(cardRef.current, {
      y: "0%",
      opacity: 1,
      duration: 1,
      ease: "power4.out"
    }, "-=1")
    // Animate Content inside card
    .to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, "-=0.4");
  }, []);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      const nextSlideIndex = currentSlide + 1;
      
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      // Fade out old content
      tl.to(contentRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        onComplete: () => {
          setCurrentSlide(nextSlideIndex);
        }
      })
      // Fade in new background over the old one
      .to(imageRefs.current[nextSlideIndex], {
        opacity: 1,
        scale: 1,
        duration: 1.5,
      }, 0)
      // Fade in new content
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }, "+=0.1");

    } else {
      // Finished all slides
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: onNext
      });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-end">
      {/* Background Images Layered */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          ref={el => imageRefs.current[index] = el}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})`, zIndex: index }}
        />
      ))}

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 z-10" />

      {/* Bottom Sheet Card */}
      <div 
        ref={cardRef}
        className="relative z-20 w-full max-w-md mx-auto md:max-w-xl md:mb-8"
      >
        <div 
          className="mx-4 mb-8 md:mx-0 rounded-[40px] p-8 md:p-12 overflow-hidden border border-white/10"
          style={{
            background: 'linear-gradient(180deg, rgba(138, 110, 83, 0.6) 0%, rgba(42, 32, 21, 0.9) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}
        >
          <div ref={contentRef}>
            {/* Title */}
            <h2 
              className="text-center font-serif text-3xl md:text-4xl text-champagne mb-4 leading-tight font-medium tracking-wide"
            >
              {slides[currentSlide].title}
            </h2>

            {/* Subtitle */}
            <p 
              className="text-center font-sans text-champagne/80 text-sm md:text-base leading-relaxed mb-8 max-w-xs mx-auto"
            >
              {slides[currentSlide].subtitle}
            </p>

            {/* Dots Indicator */}
            <div className="flex justify-center items-center gap-2 mb-10">
              {slides.map((_, dotIndex) => (
                <div 
                  key={dotIndex}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentSlide === dotIndex ? 'w-8 bg-champagne/80' : 'w-2 bg-champagne/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            className="w-full py-4 rounded-full bg-[#E6D0AC] text-[#5C4524] font-serif text-xl tracking-wider hover:bg-white transition-colors duration-300 active:scale-95"
          >
            Next
          </button>
        </div>
        
        {/* iOS style bottom indicator */}
        <div className="w-32 h-1.5 rounded-full bg-champagne/50 mx-auto mb-2" />
      </div>
    </div>
  );
};

export default Onboarding;
