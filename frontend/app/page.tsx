"use client";
import Image from "next/image";
import Mri from "../assets/mri.png";
import { motion } from "framer-motion";

export default function Home() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, x: -100 }, 
    show: { opacity: 1, x: 0}
  }

  return (
    <main className="transition-all flex h-screen flex-col items-center justify-between pt-24">
      <div className="flex w-screen h-full">
        <div id="leftFlex" className="flex-1 flex justify-center h-full">
          <motion.div variants={container} initial="hidden" animate="show" className="w-auto my-auto ml-36">
            <motion.h1 variants={item} className="text-4xl p-2 font-medium">Medscan AI</motion.h1>
            <motion.h1 variants={item} className="text-6xl
             font-bold p-2">
              Exploring AI Precision in Brain Tumor Detection
            </motion.h1>
            <motion.p variants={item} className="text-base p-2 text-justify">
              Medscan AI is a hackathon submission that focuses on the potential
              for AI models used as diagnostic tools to support doctors and
              other healthcare professionals. In this example, we use a brain
              MRI dataset to predict tumor types with a certian confidence. Feel
              free to test it out yourself!
            </motion.p>
          </motion.div>
        </div>
        <div id="rightFlex" className="flex-1 flex justify-center h-full">
          <div className="w-auto my-auto justify-start">
            <img src={Mri.src} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}
