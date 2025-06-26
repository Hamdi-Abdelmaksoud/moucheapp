"use client";

import { motion } from "framer-motion";
import { FlipWords } from "../ui/FlipWord";
import Btn from "../btn";
// import SplitText from "@/components/split";

export default function Presentation() {
  const words = [
    'Photographie de Mariage',
    'Shooting professionnel',
    'Portrait créatif',
    'Spot publicitaire',
  ];

  return (
    <div className="bg-black/70 whiteColor flex flex-col items-center lg:items-start gap-4 p-5 mt-[25rem] w-[310px] rounded-2xl md:w-[500px] ">
      <FlipWords words={words} className="text-xl md:text-2xl font-bold" />
      <p className="md:text-xl whiteColor">Capturer l’instant, révéler l’émotion.</p>
      <div className="flex items-center gap-3">
      <Btn />
        <span className="whiteColor"> voir mon travail</span>
      </div>
    </div>
  );
}
