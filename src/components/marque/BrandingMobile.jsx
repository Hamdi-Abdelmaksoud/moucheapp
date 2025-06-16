"use client"
import { motion } from "framer-motion";

export default function BrandingMobile(){
  return(
      <motion.div
        className="min-h-24 pt-6 block md:hidden"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          ease: [0.25, 0.1, 0.25, 1], // cubic-bezier pour fluidité naturelle
        }}
        viewport={{ once: true, amount: 0.6 }} // déclenche plus tôt et qu'une seule fois
      >
        <h3 className="text-5xl font-extrabold ">BRANDING</h3>
      </motion.div>
  )
}