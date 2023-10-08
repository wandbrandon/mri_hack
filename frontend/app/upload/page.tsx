"use client";
import UploadBox from "./uploadComponent";
import React, { useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { motion } from "framer-motion";

const Test = () => {
  const [imageInfo, setImageInfo] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 }, 
    show: { opacity: 1 }
  }

  return (
      <main className="flex h-screen flex-col items-center pt-24">
      <div className="flex w-screen h-full">
              <div id="leftFlex" className="flex-1 flex flex-col">
                  {!loading && imageInfo ? (
                      <div className="my-auto ml-36">
                          <div className={`${imageInfo.tumorType === "No Tumor" ? "bg-gradient-to-tr from-mriGreenDark to-mriGreenLight" : "bg-gradient-to-tr from-mriRedDark to-mriRedDark" 
                          } w-4/6 text-6xl font-extrabold p-3 text-center rounded-2xl`}>
                              {imageInfo.tumorType}
                          </div>
                          <div className="text-3xl font-medium pt-6">
                              Our AI model predicts with{" "}
                              <u>{(parseFloat(imageInfo.probability) * 100).toFixed(0)}%</u>{" "}
                              confidence that this MRI image
                              {imageInfo.tumorType === "No Tumor"
                                  ? " shows no tumor."
                                  : ` shows a ${imageInfo.tumorType} tumor.`}
                          </div>
                      </div>
                  ) : null}
                      {loading || imageInfo ? null :
                              <motion.div variants={container} initial="hidden" animate="show"className="my-auto ml-36">
                                  <motion.div variants={item} className="w-auto text-6xl font-extrabold p-2">
                                      {"Medscan AI"}
                                  </motion.div>
                                  <motion.div variants={item} className="text-3xl font-bold p-2">
                                      {"Please upload an MRI scan to get started."}
                                  </motion.div>
                                  <motion.div variants={item} className="text- p-2">
                                      {"Please note our AI model was trained on 512x512 images. Please upload images of this size for best results."}
                                  </motion.div>
                              </motion.div>
                      }
          <MoonLoader
            className="m-auto"
            loading={loading}
            size={100}
            color={"#000000"}
          />
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          id="rightFlex"
          className="flex-1 flex justify-center h-full w-full"
        >
          <UploadBox setImageInfo={setImageInfo} setLoading={setLoading} />
        </motion.div>
      </div>
    </main>
  );
};

export default Test;
