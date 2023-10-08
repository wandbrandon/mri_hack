"use client";
import Austin from "../../assets/austin.jpeg";
import Shawn from "../../assets/shawn.jpg";
import Brandon from "../../assets/brandon.jpeg";
import Nathan from "../../assets/nathan.png";
import { motion } from "framer-motion";
import Image from "next/image";
import LinkedIn from "../../assets/linkedin-in.svg";

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
          <a href="https://www.linkedin.com/in/wandbrandon/" target="_blank">
            <img
              src={Brandon.src}
              alt="Image 3"
              className="w-48 h-48 border-stone-200 border-x-4 border-y-4 object-cover"
            />
          </a>
          <a href="https://www.linkedin.com/in/wandbrandon/" target="_blank" className="w-9/12 mt-2 text-center">
            Brandon Wand
          </a>
        </motion.div>

        <motion.div variants={item} className="flex flex-col items-center">
          <a href="https://nathanwand.com/" target="_blank">
            <img
              src={Nathan.src}
              alt="Image 4"
              className="w-48 h-48 border-stone-200 border-x-4 border-y-4 object-cover"
            />
          </a>
          <a href="https://nathanwand.com/" target="_blank" className="w-9/12 mt-2 text-center">
            Nathan Wand
          </a>
        </motion.div>
        <motion.div variants={item} className="flex flex-col items-center">
          <a href="https://www.linkedin.com/in/shawn-shuqing-chen/" target="_blank">
            <img
              src={Shawn.src}
              alt="Image 3"
              className="w-48 h-48 border-stone-200 border-x-4 border-y-4 object-cover"
            />
          </a>
          <a href="https://www.linkedin.com/in/shawn-shuqing-chen/" target="_blank" className="w-10/12 mt-2 text-center">
            Shuqing (Shawn) Chen
          </a>
        </motion.div>
        <motion.div variants={item} className="flex flex-col items-center">
          <a href="https://www.linkedin.com/in/austin-robertson-784b18207/" target="_blank">
            <img
              src={Austin.src}
              alt="Image 3"
              className="w-48 h-48 border-stone-200 border-x-4 border-y-4 object-cover"
            />
          </a>
          <a href="https://www.linkedin.com/in/austin-robertson-784b18207/" target="_blank" className="w-9/12 mt-2 text-center">
            Austin Robertson
          </a>
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
