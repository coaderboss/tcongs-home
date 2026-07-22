"use client";
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

export default function ContactSection() {
  
  // Left side list animation
  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.4 + (i * 0.15), duration: 0.5, type: "spring" }
    })
  };

  // Right side form fields animation
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + (i * 0.1), duration: 0.5, type: "spring" }
    })
  };

  return (
    <section className="w-full py-24 px-6 bg-[#050505] border-t border-white/5 relative z-10 overflow-hidden" id="contact">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* Left Side: Text & Info */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-pink text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
          >
            CONTACT US
          </motion.span>
          
          <div className="mb-6 flex flex-col gap-1">
            <AnimatedText text="Let's Build" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight" />
            <AnimatedText text="Something" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight" />
            <AnimatedText text="You'll Be Proud Of" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-yellow leading-tight pb-2" />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md"
          >
            Have a project in mind? Whether you need a website, mobile app, or digital solution, our team is ready to turn your ideas into reality.
          </motion.p>
          
          <ul className="text-gray-300 space-y-5 mb-8">
            {["You'll hear from us within one business day.", "We'll understand your goals and requirements.", "You'll receive a clear proposal with pricing & timeline."].map((text, i) => (
              <motion.li 
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listVariants}
                className="flex items-start gap-4 group"
              >
                <span className="text-brand-yellow mt-1 bg-brand-yellow/10 p-1 rounded-full group-hover:scale-110 group-hover:bg-brand-yellow/20 transition-all">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </span> 
                {text}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Side: The Premium Animated Form */}
        <div className="lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.02] backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            {/* Interactive Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-brand-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10"></div>
            
            <form className="relative z-10 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              
              {/* Animated Input Wrapper */}
              {[
                { type: "text", placeholder: "Full Name*" },
                { type: "email", placeholder: "Email Address*" }
              ].map((input, i) => (
                <motion.div custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={formVariants} key={i} className="relative">
                  <input type={input.type} placeholder={input.placeholder} className="peer w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none transition-colors focus:bg-white/[0.06]" />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-pink to-brand-yellow peer-focus:w-full transition-all duration-500 rounded-b-xl"></div>
                </motion.div>
              ))}
              
              {/* Phone Input */}
              <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={formVariants} className="flex gap-3 relative">
                <div className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 flex items-center justify-center shrink-0">
                  🇮🇳 <span className="text-gray-500 ml-2 text-xs">▼</span>
                </div>
                <div className="relative w-full">
                  <input type="tel" placeholder="Phone Number*" className="peer w-full h-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none transition-colors focus:bg-white/[0.06]" />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-pink to-brand-yellow peer-focus:w-full transition-all duration-500 rounded-b-xl"></div>
                </div>
              </motion.div>
              
              {/* Textarea */}
              <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={formVariants} className="relative">
                <textarea placeholder="Tell us about your project*" rows="4" className="peer w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none transition-colors focus:bg-white/[0.06] resize-none"></textarea>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-pink to-brand-yellow peer-focus:w-full transition-all duration-500 rounded-b-xl"></div>
              </motion.div>
              
              {/* Cyber-style Verification Box */}
              <motion.div custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={formVariants} className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 flex items-center justify-between group/verify hover:border-white/20 transition-colors">
                <span className="text-gray-400 text-sm font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse"></span>
                  Human Verification: 9 + 6 =
                </span>
                <input type="text" placeholder="Enter Sum*" className="w-24 bg-transparent border-b border-white/20 text-white text-center outline-none focus:border-brand-yellow transition-colors font-mono" />
              </motion.div>

              {/* Premium Shining Button */}
              <motion.button custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={formVariants} className="relative overflow-hidden w-full bg-gradient-to-r from-brand-pink to-brand-yellow text-white font-bold text-lg py-4 rounded-xl mt-2 group/btn shadow-[0_0_20px_rgba(255,0,85,0.2)] hover:shadow-[0_0_30px_rgba(255,170,0,0.4)] transition-shadow">
                {/* Shine Animation */}
                <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                <span className="relative z-10">Submit Inquiry</span>
              </motion.button>

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}