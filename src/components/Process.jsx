"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedText from './AnimatedText';

const steps = [
  { id: "01", name: "Discovery", sub: "Business & Market Analysis", desc: "We understand your business goals, target audience, and competitors. This helps us define the right strategy to build a strong digital foundation." },
  { id: "02", name: "Planning", sub: "Strategy & Architecture", desc: "We create detailed project plans, user flows, and system architecture to ensure smooth development and clear execution." },
  { id: "03", name: "Design", sub: "UI/UX & Branding", desc: "Our team designs modern, user-friendly interfaces that enhance user experience and reflect your brand identity." },
  { id: "04", name: "Development", sub: "Web & App Development", desc: "We build fast, scalable, and secure websites and applications using modern technologies tailored to your business needs." }
];

export default function Process() {
  const containerRef = useRef(null);
  
  // Ye hook scroll ke hisaab se line ko draw karega
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Line ki height 0% se 100% tak badhegi scroll karne par
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-[#030303] overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* Left Sticky Header (Mobile pe normal, Desktop pe sticky) */}
        <div className="lg:sticky lg:top-32 z-10">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-pink text-[0.65rem] md:text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Our Process, Your Growth
          </motion.h3>
          
          {/* Yahan AnimatedText ka final use! */}
          <div className="mb-6">
             <AnimatedText text="From Idea to" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight" />
             <AnimatedText text="Scalable Digital" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight" />
             <AnimatedText text="Solution" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight" />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-sm md:text-lg max-w-md leading-relaxed"
          >
            At Tcongs Infotech, we follow a proven process to transform your ideas into high-performing digital products.
          </motion.p>
        </div>

        {/* Right Timeline (Animated & Responsive) */}
        <div className="relative pl-6 md:pl-10">
          
          {/* Faded Background Line (Static) */}
          <div className="absolute left-[11px] md:left-[19px] top-0 bottom-0 w-[2px] bg-white/5"></div>
          
          {/* Glowing Animated Line (Scroll-linked) */}
          <motion.div 
            className="absolute left-[11px] md:left-[19px] top-0 w-[2px] bg-gradient-to-b from-brand-pink to-brand-yellow origin-top"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, index) => (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                key={index} 
                className="relative group"
              >
                {/* Number Bullet */}
                <div className="absolute -left-[30px] md:-left-[45px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#050505] border-2 border-white/20 group-hover:border-brand-yellow flex items-center justify-center text-xs md:text-sm font-bold text-gray-400 group-hover:text-brand-yellow transition-all duration-300 z-10 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,170,0,0.4)]">
                  {step.id}
                </div>
                
                {/* Content Box */}
                <div className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 rounded-2xl p-5 md:p-8 transition-colors duration-300">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:translate-x-2 transition-transform duration-300">{step.name}</h4>
                  <span className="text-brand-yellow text-xs md:text-sm font-medium tracking-wide block mb-3 md:mb-4">{step.sub}</span>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}