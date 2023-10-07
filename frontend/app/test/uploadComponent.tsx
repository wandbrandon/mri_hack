"use client";
import React, { useState } from "react";
import { FileInput, Label } from "flowbite-react";

const UploadBox = (setImageInfo: any) => {
  const [image, setImage] = useState<any | null>(null);

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));

      // POST image to backend and pass response to setImageInfo
        const formData = new FormData();
        formData.append("file", event.target.files[0]);
        fetch("http://localhost:5000/api/v1/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((result) => {
                setImageInfo(result);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
  };

  return (
    <div className="flex flex-col align-middle w-full">
      <div className=" w-1/2 aspect-square flex mx-auto mt-auto mb-3 border-dashed border border-mriSlate">
        {image ? <img src={image} alt="image preview" /> : null}
      </div>
      <div className="mb-auto mt-2 w-1/2 mx-auto">
          <Label htmlFor="file" value="Upload file" />
          <FileInput
            onChange={onImageChange}
            accept="image/*"
            helperText="Select a MRI image to scan"
            id="file"
          />
      </div>
    </div>
  );
};
export default UploadBox;
