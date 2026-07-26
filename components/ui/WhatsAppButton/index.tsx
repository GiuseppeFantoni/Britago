"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { WHATSAPP_PRIMARY } from "@/lib/config/site";

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_PRIMARY}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg shadow-black/30 transition-colors duration-200 hover:bg-whatsapp-dark"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={28} className="text-white" aria-hidden />
    </motion.a>
  );
}
