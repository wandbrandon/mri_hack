"use client";
import Austin from "../../assets/austin.jpg";
import Shawn from "../../assets/shawn.jpg";
import Brandon from "../../assets/brandon.jpeg";
import Nathan from "../../assets/nathan.png";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0}, 
    show: { opacity: 1}
  }

  return (
    <motion.main variants={container} initial="hidden" animate="show" className="flex min-h-screen flex-row px-10">
       <motion.div variants={item} className="grid grid-cols-2 gap-0 flex-1 mt-56 px-6">
        
        <motion.div variants={item} className="flex flex-col items-center">
          <Image
            src={Brandon}
            alt="Image 3"
            className="w-48 h-48 border-stone-200 border-x-4 border-y-4 object-cover"
          />
          <p className="mt-2 text-center">Brandon Wand</p>
        </motion.div>

        <motion.div variants={item} className="flex flex-col items-center">
          <Image
            src={Nathan}
            alt="Image 4"
            className="w-48 h-48 border-stone-200 border-x-4 border-y-4 object-cover"
          />
          <p className="mt-2 text-center">Nathan Wand</p>
        </motion.div>
        <motion.div variants={item} className="flex flex-col items-center">
          <Image
            src={Shawn}
            alt="Image 2"
            className="w-48 h-48 border-stone-200 border-x-4 border-y-4 object-cover"
          />
          <p className="mt-2 text-center">Shuqing (Shawn) Chen</p>
        </motion.div>
        <motion.div variants={item} className="flex flex-col items-center">
          <Image
            src={Austin}
            alt="Image 1"
            className="w-48 h-48 border-stone-200 border-x-4 border-y-4 object-cover"
          />
          <p className="mt-2 text-center">Austin Robertson</p>
        </motion.div>
      </motion.div>
      
      <motion.div variants={item} id="textWrapper" className=" flex-1 w-1/2 h-full flex flex-col mt-72 px-6">
        <motion.div variants={item} className="text-6xl p-2 font-bold">The Model</motion.div>
        <motion.div variants={item} className="text-lg p-2 pb-8 text-justify">
          This neural network model is based on EfficientNetB3, comprising
          11,184,179 parameters (approximately 42.66 MB). It's designed for
          image classification with 256x256x3 input images. The model includes a
          Batch Normalization layer, a Dense layer with 256 neurons, dropout for
          regularization, and an output layer with 4 classes. While leveraging a
          pre-trained model like EfficientNetB3 boosts performance, it presents
          challenges such as high parameter count, fine-tuning complexities,
          memory/storage demands, and the need for substantial training data.
          These aspects should be considered when using this model in practice.
          Still we were able to reach an accuracy of 0.9925 on our testing set.
          We got our dataset from
          <a href="https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset/data." target="_blank">
            {" "}
            <u> Kaggle</u>
          </a>
          . We used the
          <a href="https://arxiv.org/abs/1905.11946" target="_blank">
            {" "}
            <u> Effecient Net V3</u>.
          </a>
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default About;
