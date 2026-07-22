"use client";
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import CtaSection from "../components/CtaSection";
import Faq from "../components/Faq";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import LetsTalkModal from "../components/LetsTalkModal";
import ScrollReveal from "../components/ScrollReveal"; // Ye naya import kiya

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar onOpenModal={handleOpenModal} />
      
      {/* Har section ko ScrollReveal mein daal diya */}
      <ScrollReveal><Hero onOpenModal={handleOpenModal} /></ScrollReveal>
      <ScrollReveal><Services /></ScrollReveal>
      <ScrollReveal><Process /></ScrollReveal>
      <ScrollReveal><CtaSection onOpenModal={handleOpenModal} /></ScrollReveal>
      <ScrollReveal><Faq onOpenModal={handleOpenModal} /></ScrollReveal>
      <ScrollReveal><ContactSection /></ScrollReveal>
      
      <Footer />
      <LetsTalkModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}