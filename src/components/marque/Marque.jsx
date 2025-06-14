'use client';
import Btn from "../btn";
import { AnimatedTestimonials } from "../ui/AnimatedTestimonials";
import { motion } from "framer-motion";
export default function Marque({ pics }) {

  return (
    <div className="flex flex-col mt-4 md:mx-auto md:w-[760px] md:flex-row md:gap-4 items-center gap-6  ">
      {/* Version pc */}
      <div className="hidden md:flex flex-col items-center w-[200px] lg:w-[300px]">
      <motion.p
        className="lg:text-9xl md:text-8xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}  // Animation activée lorsque l'élément est dans la vue
        transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }} // L'animation se déclenche une seule fois
      >
        BR
      </motion.p>
      <motion.p
        className="lg:text-9xl md:text-8xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        AN
      </motion.p>
      <motion.p
        className="lg:text-9xl md:text-8xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        DI
      </motion.p>
      <motion.p
        className="lg:text-9xl md:text-8xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        NG
      </motion.p>
    </div>


      {/* Version mobile*/}
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

      {/* Bloc texte */}

      {/* Bloc slider */}
      <div className="w-[350px]  lg:min-w-[450px] lg:mx-8">
        {pics?.length > 0 && <AnimatedTestimonials testimonials={pics} autoplay={true} />}
      </div>

      {/* Bloc contact */}
      <div  >
        <motion.p 
      initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
  className="text-2xl font-semibold w-[320px] md:w-[200px] leading-relaxed md:text-pretty lg:flex-col">
          Créez une identité visuelle qui marque les esprits.
        </motion.p>
        
      </div>
    </div>
  );
}
