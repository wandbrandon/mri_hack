import Image from "next/image";
import Mri from "../assets/mri.png"

export default function Home() {
  return (
    <main className="transition-all flex h-screen flex-col items-center justify-between pt-24">
      <div className="flex w-screen h-full">
        <div id="leftFlex" className="flex-1 flex justify-center h-full">
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
        <div id="rightFlex" className="flex-1 flex justify-center h-full">
          <div className="w-auto my-auto justify-start"><img src={Mri.src} alt="" /></div>
        </div>
      </div>
    </main>
  );
}
