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
        <div id="leftFlex" className="flex-1 flex h-full w-full">
          {imageInfo ? (
            <div className="m-auto">
              <h1>{imageInfo.tumorType}</h1>
              <h1>{imageInfo.probability}</h1>
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
