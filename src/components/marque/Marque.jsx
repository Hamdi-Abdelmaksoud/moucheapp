'use client';
import { AnimatedTestimonials } from "../ui/AnimatedTestimonials";
import { motion } from "framer-motion";
import Branding from "./Branding";
import BrandingMobile from "./BrandingMobile";
export default function Marque({ pics }) {
  return (
    <div   className="bg-black/70 flex flex-col  md:mx-auto p-8 md:w-full lg:justify-center md:flex-row md:gap-4 items-center gap-6  ">
      {/* Version pc */}
    <Branding />
      {/* Version mobile */}
      <BrandingMobile />

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
  className=" branding-color text-2xl font-semibold w-[320px] md:w-[220px] leading-relaxed md:text-justify lg:flex-col">
          Créez une identité visuelle unique qui marque les esprits.
        </motion.p>
        
      </div>
    </div>
  );
}
