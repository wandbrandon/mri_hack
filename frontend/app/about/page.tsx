import Austin from "../../assets/austin.png";
import Shawn from "../../assets/shawn.jpg";
import Brandon from "../../assets/brandon.jpeg";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <div id="textWrapper" className="w-1/2 h-full flex flex-col mt-10">
        <div className="text-4xl p-2 text-center">The Model</div>
        <div className="text-lg p-2 pb-8">
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
        </div>
      </div>

      <div className="flex justify-center items-center space-x-32">
        <div className="flex flex-col items-center">
          <img
            src={Austin.src}
            alt="Image 1"
            className="w-48 h-64 border-stone-200 border-x-4 border-y-4"
          />
          <p className="mt-2 text-center">Austin Robertson</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Shawn.src}
            alt="Image 2"
            className="w-48 h-64  border-stone-200 border-x-4 border-y-4"
          />
          <p className="mt-2 text-center">Shuqing (Shawn) Chen</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Brandon.src}
            alt="Image 3"
            className="w-48 h-64  border-stone-200 border-x-4 border-y-4"
          />
          <p className="mt-2 text-center">Brandon Wand</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Austin.src}
            alt="Image 4"
            className="w-48 h-64  border-stone-200 border-x-4 border-y-4"
          />
          <p className="mt-2 text-center">Nathan Wand</p>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-32">
        <p className="mt-2 text-center w-48 h-64">Testing</p>
        <p className="mt-2 text-center w-48 h-64">Testing</p>
        <p className="mt-2 text-center w-48 h-64">Testing</p>
        <p className="mt-2 text-center w-48 h-64">Testing</p>
      </div>
    </main>
  );
};

export default About;
