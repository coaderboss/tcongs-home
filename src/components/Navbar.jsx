import React from 'react';

// Yahan humne prop receive kiya
export default function Navbar({ onOpenModal }) {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
      
      <div className="flex items-center cursor-pointer">
        <div className="flex flex-col">
          <span className="text-2xl font-extrabold text-[#1ea7d5] tracking-wide leading-none flex items-center gap-1">
            <span className="text-brand-pink text-3xl leading-none">t</span>
            TCONGS
          </span>
          <span className="text-brand-yellow text-[0.65rem] font-bold tracking-[0.2em] uppercase ml-4">
            Infotech
          </span>
        </div>
      </div>

      {/* Yahan onClick add kar diya */}
      <button 
        onClick={onOpenModal} 
        className="bg-brand-pink text-white px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:bg-pink-600 transition-colors duration-300"
      >
        Lets Talk <span className="text-lg">💬</span>
      </button>

    </nav>
  );
}