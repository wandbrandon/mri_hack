import os

os.environ["KERAS_BACKEND"] = "torch"

import keras_core


import numpy as np
from flask import Flask, request
from predict import make_prediction

app = Flask(__name__)

base_model = keras_core.applications.efficientnet.EfficientNetB3(
    weights="imagenet",  # Load weights pre-trained on ImageNet.
    input_shape=(256, 256, 3),
    include_top=False,
    pooling="max",
)

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

model.load_weights("weight.weights.h5")


model.compile(
    keras_core.optimizers.Adamax(learning_rate=0.001),
    loss="categorical_crossentropy",
    metrics=["accuracy"],
)


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
    data_json = request.get_json()

    prediction = model.predict(np.array(data_json["data"]))

    return str(prediction)


if __name__ == "__main__":
    app.run()
