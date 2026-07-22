import React from 'react';

export default function LetsTalkModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Blur Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-[#0a0a0a] rounded-3xl border border-white/10 p-8 shadow-2xl z-10 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors text-2xl leading-none"
        >
          &times;
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <span className="text-brand-pink text-3xl leading-none">t</span> TCONGS
          </h3>
          <h4 className="text-xl font-bold text-white mb-2">Let's Talk</h4>
          <p className="text-sm text-gray-400">Tell us a bit about your project and we'll reach out shortly.</p>
        </div>

        {/* Shortened Form for Modal */}
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name*" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-brand-pink" />
          <input type="email" placeholder="Email Address*" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-brand-pink" />
          <textarea placeholder="Tell us about your project*" rows="3" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-brand-pink resize-none"></textarea>
          
          <button className="w-full bg-gradient-to-r from-brand-pink to-brand-yellow text-white font-bold py-3 rounded-xl mt-2 hover:opacity-90 transition-opacity">
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}