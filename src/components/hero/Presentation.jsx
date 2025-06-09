"use client" 
import { motion } from "framer-motion";
import SplitText from "@/components/split";
export default function Presentation(){
  return(
        <motion.div
        className="text-white z-[2] ml-[10vw] md:ml-[20vw] mt-[20vh]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
    <SplitText
  text="Studio Mouche By Ahmed Tlili"
  className="text-xl font-semibold text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
   
/>
        <div className="flex flex-col  gap-4">
          {/* <h2 className="text-xl md:text-5xl font-bold">Studio Mouche By Ahmed Tlili</h2> */}
          <p className="text-base">Capturer l’instant, révéler l’émotion.</p>
          <div className="flex items-center gap-3">
            <button >contactez nous </button>
            <span>voir mon travail</span>
          </div>
        </div>
      </motion.div>
  )
}