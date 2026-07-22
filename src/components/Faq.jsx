"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';

const faqsData = [
  { q: "What services does Tcongs Infotech offer?", a: "We offer web development, mobile app development, custom software solutions, eCommerce management, and digital marketing services to help businesses grow online." },
  { q: "How long does it take to build a website or app?", a: "The timeline depends on project complexity. A basic website may take 7-15 days, while advanced platforms or mobile apps can take 3-8 weeks or more." },
  { q: "Do you work with international clients?", a: "Yes, we work with clients from the USA, Canada, Dubai, and globally. We provide remote support and communication throughout the project." },
  { q: "Can you help grow my business after development?", a: "Yes, we offer SEO, digital marketing, and marketplace management services to help you generate leads, increase traffic, and boost sales." }
];

export default function Faq({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 px-6 bg-[#030303] overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-[30rem] h-[30rem] bg-brand-pink/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 -translate-x-1/2 z-0"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Left Side (Heading & Button) */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-pink text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            FAQS
          </motion.h3>
          
          <div className="mb-6">
            <AnimatedText text="Questions?" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight" />
            <AnimatedText text="We've Got" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight" />
            <AnimatedText text="Answers" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight" />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mb-10 leading-relaxed text-sm md:text-base max-w-sm"
          >
            Tcongs Infotech helps businesses grow with web development, mobile apps, eCommerce solutions, and digital marketing. Here are answers to common questions from our clients.
          </motion.p>
          
          {/* Upgraded Premium Button */}
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            onClick={onOpenModal}
            className="relative group overflow-hidden bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold transition-all hover:border-brand-pink hover:shadow-[0_0_20px_rgba(255,0,85,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-yellow opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Lets Talk <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">🚀</span>
            </span>
          </motion.button>
        </div>

        {/* Right Side (Animated Accordion) */}
        <div className="lg:w-2/3 space-y-4 md:space-y-5">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className={`group border transition-all duration-500 rounded-2xl overflow-hidden backdrop-blur-md ${
                  isOpen 
                  ? 'border-brand-pink bg-brand-pink/5 shadow-[0_0_30px_rgba(255,0,85,0.05)]' 
                  : 'border-white/10 bg-[#0a0a0a]/50 hover:border-white/30 hover:bg-[#0a0a0a]'
                }`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left outline-none"
                >
                  <span className={`text-base md:text-lg font-bold pr-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  
                  {/* Rotating Icon */}
                  <motion.div 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-xl font-light text-2xl shrink-0 transition-colors duration-300 ${
                      isOpen ? 'bg-brand-pink text-white shadow-[0_0_15px_rgba(255,0,85,0.4)]' : 'bg-white/5 text-gray-400 group-hover:bg-white/10'
                    }`}
                  >
                    +
                  </motion.div>
                </button>
                
                {/* Smooth Height Expansion for Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}