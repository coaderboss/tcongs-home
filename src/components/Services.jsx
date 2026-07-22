"use client";
import React from 'react';
import { motion } from "framer-motion";
import AnimatedText from './AnimatedText';

// Premium SVG Icons instead of bulky emojis
const servicesList = [
  { 
    title: "Web & App Development", category: "FOR BUSINESSES", 
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg> 
  },
  { 
    title: "Software Development", category: "CUSTOM SOLUTIONS", 
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> 
  },
  { 
    title: "E-commerce Solutions", category: "ONLINE SELLERS", 
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> 
  },
  { 
    title: "Digital Marketing", category: "GROWTH FOCUSED", 
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg> 
  },
  { 
    title: "Branding & UI/UX", category: "CREATIVE DESIGN", 
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg> 
  },
  { 
    title: "Business Growth", category: "SCALING BUSINESS", 
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> 
  }
];

export default function Services() {
  // Staggered animation for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, type: "spring", stiffness: 80 }
    })
  };

  return (
<section id="services" className="w-full py-20 md:py-28 px-4 md:px-6 border-t border-white/5 relative bg-[#030303] overflow-hidden">      
      {/* Subtle Premium Background Glow */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-12 md:mb-16">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-pink text-[0.65rem] md:text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            We Are Great At
          </motion.h3>
          
          <div className="max-w-2xl flex flex-col gap-1">
             <AnimatedText text="Digital Solutions &" className="text-3xl md:text-5xl font-extrabold text-white leading-tight" />
             <AnimatedText text="Development Services" className="text-3xl md:text-5xl font-extrabold text-white leading-tight" />
          </div>
        </div>

        {/* Improved Compact & Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -5 }} // Subtle lift on hover
              className="group relative rounded-xl md:rounded-2xl border border-white/5 bg-white/[0.02] p-5 md:p-8 transition-all duration-300 hover:border-brand-pink/40 hover:bg-white/[0.04] cursor-pointer hover:shadow-[0_8px_30px_rgb(255,0,85,0.08)]"
            >
              
              <span className="text-[0.6rem] md:text-xs font-bold text-gray-500 uppercase block mb-3 md:mb-4 tracking-wider">
                {service.category}
              </span>
              
              <h3 className="text-lg md:text-2xl font-bold text-white mb-6 md:mb-10 group-hover:text-brand-pink transition-colors duration-300 pr-4">
                {service.title}
              </h3>
              
              {/* Animated SVG Icon Wrapper */}
              <div className="text-gray-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}