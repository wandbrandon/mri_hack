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
        <div id="leftFlex" className="flex-1 flex h-full w-full pt-32 flex-col">
          {imageInfo ? (
            <div className="m-auto">
              <div className="text-5xl mx-auto text-bold justify-center">
                TUMOR TYPE
              </div>
              <div className="text-xl mx-auto justify-center text-center pt-8">
                Our AI model predicts with _% confidence that this MRI image
                shows a _TUMOR_TYPE_ tumor.
              </div>
            </div>
          ) : null}
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
