import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, Camera, Link, MoreVertical } from 'lucide-react';
import gsap from 'gsap';

interface ChatProps {
  onBack: () => void;
  productId?: string;
}

const Chat: React.FC<ChatProps> = ({ onBack, productId = 'P0D43679RPC' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello Puja, Iam the Virtual Assistant.\nPlease tell me how may i help you?", sender: 'assistant' },
    { id: 2, text: "Hii, I want To know the status of my Product.", sender: 'user' },
    { id: 3, text: "I am so sorry mfor this inconvenience.\nSurely, I will help You.", sender: 'assistant' }
  ]);

  const [input, setInput] = useState('');

  useEffect(() => {
    // Slide in animation
    gsap.fromTo(containerRef.current,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
    setInput('');
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen bg-[#1A1A1A] flex flex-col text-[#E5D1B9] overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/home-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0"></div>

      {/* Header */}
      <div className="relative z-10 w-full px-6 pt-12 pb-6 flex items-center">
        <button 
          onClick={onBack}
          className="absolute left-4 p-2 text-[#E5D1B9]/80 hover:text-[#E5D1B9] transition-colors z-20"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        <div className="flex-1 text-center font-serif text-xl tracking-wide flex items-center justify-center gap-2">
          <span>Earring</span>
          <span className="text-sm font-sans text-[#E5D1B9]/60">ID: {productId}</span>
        </div>
      </div>

      {/* Messages */}
      <div className="relative z-10 flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-6">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} w-full`}
          >
            <div 
              className={`max-w-[85%] px-5 py-4 font-serif leading-relaxed shadow-lg ${
                msg.sender === 'user' 
                  ? 'bg-[#8F8171]/80 text-white rounded-[2px]' 
                  : 'bg-[#988C7D]/80 text-white rounded-[2px]'
              }`}
              style={{
                backdropFilter: 'blur(8px)',
              }}
            >
              <p className="whitespace-pre-wrap text-sm tracking-wide">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="relative z-10 w-full bg-[#8E8273]/80 backdrop-blur-md px-4 py-4 flex items-center gap-4 border-t border-white/10">
        <form onSubmit={handleSend} className="flex-1">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type here" 
            className="w-full bg-transparent text-white placeholder-white/60 outline-none font-serif text-sm tracking-wide"
          />
        </form>
        <div className="flex items-center gap-4 text-white/80 shrink-0">
          <button className="hover:text-white transition-colors">
            <Camera size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-white transition-colors">
            <Link size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-white transition-colors">
            <MoreVertical size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
