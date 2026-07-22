"use client";
import { motion } from "framer-motion";

export default function ScrollReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }} // Start mein dhundla aur neeche
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} // Screen par aate hi clear
      viewport={{ once: true, margin: "-100px" }} // Thoda scroll hone par chalega
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}