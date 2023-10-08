import json
import os

os.environ["KERAS_BACKEND"] = "torch"
import keras_core
import numpy as np
from flask import Flask, request, jsonify
from PIL import Image
from google.cloud import storage

storage_client = storage.Client()
bucket = storage_client.get_bucket("mri_brain_tumor_classification")
blob1 = bucket.blob("weight2.weights.h5")

mappings = ["Glioma", "Meningioma", "No Tumor", "Pituitary"]

print("Loading base model...")
base_model = keras_core.applications.efficientnet.EfficientNetB3(
    weights="imagenet",  # Load weights pre-trained on ImageNet.
    input_shape=(256, 256, 3),
    include_top=False,
    pooling="max",
)

print("Creating Sequential Model...")
model = keras_core.Sequential(
    [
        keras_core.layers.Input(shape=(256, 256, 3)),
        base_model,
        keras_core.layers.BatchNormalization(axis=-1, momentum=0.99, epsilon=0.001),
        keras_core.layers.Dense(
            256,
            kernel_regularizer=keras_core.regularizers.l2(0.016),
            activity_regularizer=keras_core.regularizers.l1(0.006),
            bias_regularizer=keras_core.regularizers.l1(0.006),
            activation="relu",
        ),
        keras_core.layers.Dropout(rate=0.45, seed=123),
        keras_core.layers.Dense(
            4,
            activation="softmax",
        ),
    ]
)

print("Load Weights...")
model.load_weights("weight2.weights.h5")

print("Compiling Model...")
model.compile(
    keras_core.optimizers.Adamax(learning_rate=0.001),
    loss="categorical_crossentropy",
    metrics=["accuracy"],
)


app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
    """Basic HTML response."""
    body = (
        "<html>"
        "<body style='padding: 10px;'>"
        "<h1>Welcome to my Flask API</h1>"
        "</body>"
        "</html>"
    )
    return body


@app.route("/predict", methods=["POST"])
def predict():
    print("Predicting...")
    imagefile = request.files.get("sentImg")
    img = Image.open(imagefile).resize((256, 256)).convert("RGB")
    img_array = np.array(img)
    img_array_2d = img_array.reshape(1, 256, 256, 3)
    print("Image uploaded successfully")
    prediction = model.predict(img_array_2d)
    i = np.argmax(prediction[0])
    return jsonify(
        {
            "prediction": str(i),
            "tumorType": str(mappings[i]),
            "probability": str(prediction[0][i]),
        }
    )


if __name__ == "__main__":
    app.run()
