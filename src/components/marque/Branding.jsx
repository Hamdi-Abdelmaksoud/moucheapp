"use client"
import { motion } from "framer-motion";

export default function Branding(){
  return(
      <div className="hidden md:flex flex-col items-center w-[200px] lg:w-[300px]">
      <motion.p
        className=" branding-color lg:text-9xl md:text-8xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}  // Animation activée lorsque l'élément est dans la vue
        transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }} // L'animation se déclenche une seule fois
      >
        BR
      </motion.p>
      <motion.p
        className=" branding-color  lg:text-9xl md:text-8xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        AN
      </motion.p>
      <motion.p
        className=" branding-color  lg:text-9xl md:text-8xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        DI
      </motion.p>
      <motion.p
        className=" branding-color lg:text-9xl md:text-8xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        NG
      </motion.p>
    </div>

  )
}