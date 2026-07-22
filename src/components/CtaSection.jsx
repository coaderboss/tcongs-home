"use client";
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

export default function CtaSection({ onOpenModal }) {
  return (
    <section className="w-full py-24 px-6 bg-[#050505] relative overflow-hidden border-t border-white/5">
      
      {/* 1. Premium Background: Subtle Grid & Rotating Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-brand-yellow/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"
      />
      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-brand-pink/10 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3"
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">

        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          
          {/* Animated Heading */}
          <div className="mb-6 flex flex-col gap-2">
            <AnimatedText text="Build. Scale." className="text-5xl md:text-7xl font-extrabold text-white leading-tight" />
            <AnimatedText text="Grow" className="text-5xl md:text-7xl font-extrabold text-white leading-tight" />
            <AnimatedText text="Your Digital" className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-pink to-brand-pink leading-tight" />
            <AnimatedText text="Business." className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-pink to-brand-pink leading-tight" />
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            At Tcongs Infotech, we deliver powerful web, app, and marketing solutions designed to help your business grow faster, scale smarter, and succeed globally.
          </motion.p>

          {/* Action Area with Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start"
          >
            <button 
              onClick={onOpenModal}
              className="relative group overflow-hidden bg-brand-pink text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,0,85,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative flex items-center gap-2">
                Lets Talk <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">🚀</span>
              </span>
            </button>

            {/* Subtle Stats */}
            <div className="flex items-center gap-4 text-left border-l border-white/10 pl-6">
              <div className="text-sm">
                <p className="text-white font-bold text-lg">8+ Years</p>
                <p className="text-gray-500">Of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: The Premium Video Interface */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex-1 w-full flex justify-center lg:justify-end relative"
        >
          {/* 2. Floating UI Badges (Framer Motion Magic) */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-4 md:-left-12 z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xl">📈</div>
            <div>
              <p className="text-white font-bold text-sm">200% Growth</p>
              <p className="text-gray-400 text-xs">Client Average</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 -right-4 md:-right-8 z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow text-xl">⭐</div>
            <div>
              <p className="text-white font-bold text-sm">Top Rated</p>
              <p className="text-gray-400 text-xs">Agency</p>
            </div>
          </motion.div>

          {/* 3. The Video Mockup */}
          <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-2">
            
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative group bg-gradient-to-br from-gray-900 to-[#050505]">
              {/* Play Button Interface */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                
                {/* Glowing Play Button */}
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-brand-pink/20 backdrop-blur-md border border-brand-pink/50 rounded-full flex items-center justify-center cursor-pointer group-hover:bg-brand-pink/40 transition-colors relative"
                >
                  {/* Pulse Rings */}
                  <motion.div 
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full border border-brand-pink"
                  ></motion.div>
                  
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2 relative z-10"></div>
                </motion.div>
                
                <p className="text-white font-mono text-sm mt-6 tracking-[0.2em] uppercase opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  Watch Reel
                </p>
              </div>
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}