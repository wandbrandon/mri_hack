"use client";
import UploadBox from "./uploadComponent";
import React, { useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";

const Test = () => {
  const [imageInfo, setImageInfo] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
      <main className="flex h-screen flex-col items-center justify-between pt-24">

      <div className="flex w-screen h-full">
              <div id="leftFlex" className="flex-1 flex h-full w-full flex-col">

        
                  {imageInfo ? (
                      <div className="my-40">
                          <div className="text-8xl mx-40 w-3/4 text-bold justify-center">
                              {imageInfo.tumorType}
                          </div>
                          <div className="text-4xl mx-40 justify-center text-bold pt-8">
                              Our AI model predicts with{" "}
                              <u>{(parseFloat(imageInfo.probability) * 100).toFixed(0)}%</u>{" "}
                              confidence that this MRI image
                              {imageInfo.tumorType === "No Tumor"
                                  ? " shows no tumor."
                                  : ` shows a ${imageInfo.tumorType} tumor.`}
                          </div>
                      </div>
                  ) : null}
                      {loading ? null :
                              <div className="my-40">
                                  <div className="text-8xl mx-40 w-3/4 text-bold justify-center">
                                      {"Welcome to Medscan AI"}
                                  </div>
                                  <div className="text-4xl mx-40 justify-center text-bold pt-8">
                                      {"Upload an MRI scan to get started!"}
                                  </div>
                                  <div className="text-2xl mx-40 justify-center text-bold pt-8">
                                      {"Please note our AI model was trained on 512x512 images. Please upload images of this size for best results."}
                                  </div>
                              </div>
                      }
          <MoonLoader
            className="m-auto"
            loading={loading}
            size={100}
            color={"#000000"}
          />
        </div>
        <div
          id="rightFlex"
          className="flex-1 flex justify-center h-full w-full"
        >
          <UploadBox setImageInfo={setImageInfo} setLoading={setLoading} />
        </div>
      </div>
    </main>
  );
};

export default Test;
