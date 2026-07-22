"use client";
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

export default function Hero({ onOpenModal }) {
  
  // Smooth Scroll Logic
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<section className="relative w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 pb-16 md:py-24 lg:min-h-[90vh] overflow-hidden bg-[#030303]">      
      {/* 1. Base Gradient: Centralized Radial Glow (Blends perfectly with Top Navbar & Bottom Section) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2a0010] via-[#030303_60%] to-[#030303] z-0 pointer-events-none"></div>

      {/* 2. Softer, Centralized Animated Glows (Less Brightness) */}
      <motion.div
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/3 w-[20rem] md:w-[35rem] h-[20rem] md:h-[35rem] bg-brand-pink/10 rounded-full blur-[100px] md:blur-[120px] z-0 pointer-events-none"
      ></motion.div>
      
      <motion.div
        animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/3 w-[20rem] md:w-[35rem] h-[20rem] md:h-[35rem] bg-brand-yellow/10 rounded-full blur-[100px] md:blur-[120px] z-0 pointer-events-none"
      ></motion.div>

      {/* 3. Texture Grid with Centralized Radial Mask (No harsh edges anywhere) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] z-0 pointer-events-none"></div>

      {/* Main Content Area (z-10 par) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-brand-pink/30 mb-8 backdrop-blur-md shadow-[0_4px_20px_rgba(255,0,85,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse"></span>
          <span className="text-[0.65rem] md:text-xs font-bold tracking-[0.2em] text-brand-pink uppercase">Trusted by businesses worldwide</span>
        </motion.div>

        <div className="mb-6 flex flex-col items-center justify-center gap-1 md:gap-2 w-full">
          <AnimatedText text="SMART DIGITAL" className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] justify-center" />
          <AnimatedText text="SOLUTIONS FOR" className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] justify-center" />
          
          <motion.h1
             initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
             animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
             transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
             className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-[#ff5588] to-brand-yellow pb-2"
          >
            MODERN BUSINESSES
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed px-2"
        >
          We Help Brands Grow With <span className="text-brand-pink font-semibold">Web, Apps & Marketing</span> Solutions Across The Globe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-6 sm:px-0 max-w-md sm:max-w-none mx-auto"
        >
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold text-sm md:text-base hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Schedule Meeting
          </button>
          {/* Ye button ab seedha neeche scroll karega */}
          <button
            onClick={scrollToServices}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1a0008]/50 text-white font-bold text-sm md:text-base border border-brand-pink/50 hover:bg-brand-pink hover:text-white transition-all backdrop-blur-md shadow-[0_0_20px_rgba(255,0,85,0.15)]"
          >
            Explore Services
          </button>
        </motion.div>
        
      </div>
    </section>
  );
}