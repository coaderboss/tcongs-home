"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  
  // Footer ke columns ko ek-ek karke animate karne ke liye variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", damping: 15 } }
  };

  return (
    <footer className="w-full bg-[#020202] pt-20 pb-8 px-6 border-t border-white/5 relative overflow-hidden z-10">
      
      {/* Subtle Bottom Glow jisse website ka end premium lage */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-brand-pink/5 blur-[120px] pointer-events-none -z-10"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 relative z-10"
      >
        
        {/* Column 1: Brand & Bio */}
        <motion.div variants={itemVariants} className="flex flex-col">
          <div className="flex flex-col mb-6">
            <span className="text-3xl font-extrabold text-[#1ea7d5] tracking-wide leading-none flex items-center gap-1">
              <span className="text-brand-pink text-4xl leading-none">t</span>TCONGS
            </span>
            <span className="text-brand-yellow text-xs font-bold tracking-[0.2em] uppercase ml-5 mt-1">Infotech</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-0 lg:pr-4">
            Empowering global brands with 8+ years of expertise in custom web development, e-commerce marketplace optimization, and Generative Engine Optimization (GEO). We turn complex challenges into seamless digital growth.
          </p>
        </motion.div>

        {/* Column 2: Company Links */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink shadow-[0_0_10px_rgba(255,0,85,0.8)]"></span> Company
          </h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {['Home', 'Company', 'Solution', 'Connect'].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-brand-pink hover:translate-x-2 transition-all duration-300 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 3: Specialized Services */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shadow-[0_0_10px_rgba(255,170,0,0.8)]"></span> Specialized Services
          </h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {['Web & App Development', 'Software Development', 'E-commerce Solutions', 'Digital Marketing'].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-brand-yellow hover:translate-x-2 transition-all duration-300 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 4: Scale Your Business */}
        <motion.div variants={itemVariants}>
          <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span> Scale Your Business
          </h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {['Launch on Top Marketplaces', 'Build High-Converting Stores', 'Optimize Listings for Sales', 'Run Profitable Ad Campaigns'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 group cursor-pointer">
                <span className="text-brand-yellow mt-0.5 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="group-hover:text-white transition-colors duration-300">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </motion.div>

      {/* Bottom Copyright Bar with Fade In */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500"
      >
        <p className="text-center md:text-left">
          <strong className="text-gray-300">Mumbai Office:</strong> Based in Mumbai, India. Serving clients worldwide.
        </p>
        <p className="text-center md:text-right">
          © 2026 Tcongs Infotech. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}