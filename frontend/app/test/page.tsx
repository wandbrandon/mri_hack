'use client'
import UploadBox from "./uploadComponent";
import React, { useState } from "react";

const Test = () => {
    const [imageInfo, setImageInfo] = useState<any | null>(null);

  return (
    <main className="flex h-screen flex-col items-center justify-between pt-24 bg-mriCyan">
      <div className="flex w-screen h-full">
        <div id="leftFlex" className="flex-1 flex justif y-end h-full">
          <div className="w-auto my-auto ml-36">
            <h1 className="text-2xl p-2">TumorFinders</h1>
            <h1 className="text-5xl text-bold p-2">
              Exploring AI Precision in Brain Tumor Detection
            </h1>
            <p className="text-base p-2">
              At TumorFinders, we delve deep into AI precision. Our app is a
              playground for testing and optimizing custom AI models for brain
              tumor identification from MRI scans. Join us on a journey through
              the technical frontier of medical AI at TumorFinders.
            </p>
          </div>
        </div>
        <div id="rightFlex" className="flex-1 flex justify-center h-full w-full">
            <UploadBox setImageInfo={setImageInfo}/>
        </div>
      </div>
    </main>
  );
};

export default Test;
