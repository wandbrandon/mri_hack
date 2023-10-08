"use client";
import React, { useState } from "react";
import { FileInput, Label } from "flowbite-react";

const UploadBox = ({
  setLoading,
  setImageInfo,
}: {
  setLoading: (loading: boolean) => void;
  setImageInfo: (info: any) => void;
}) => {
  const [image, setImage] = useState<any | null>(null);
  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));

      // POST image to backend and pass response to setImageInfo
      const formData = new FormData();
      formData.append("sentImg", event.target.files[0]);
      setLoading(true);
      fetch("http://34.23.12.91:5000/predict", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          setImageInfo(result);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="flex flex-col align-middle w-full">
      <div className=" w-1/2 aspect-square flex mx-auto mt-auto mb-3 border-dashed border border-b-cyan-50">
        {image ? <img src={image} alt="image preview" /> : null}
      </div>
          <div className="mb-auto mt-2 w-1/2 mx-auto">
        <div className="pl-px">
                  {/* <Label htmlFor="file" value="Upload file" /> */}
        </div>
        <FileInput
          onChange={onImageChange}
          accept="image/*"
          // helperText="Select a MRI image to scan"
          id="file"
              />
        {/* <div className="text-xs text-black pl-px mt-1">Choose MRI Image</div> */}
          </div>
    </div>
  );
};
export default UploadBox;
