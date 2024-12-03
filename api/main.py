import requests
from config import config
from flask import Flask, request, jsonify
from flask_cors import CORS
from mongo_client import mongo_client

gallery = mongo_client.gallery
images_collection = gallery.images


app = Flask(__name__)
CORS(app)


@app.route("/new_image")
def new_image():
    word = request.args.get("query")
    response = requests.get(
        url="https://api.unsplash.com/photos/random/",
        headers={"Authorization": f"Client-ID {config.UNSPLASH_ACCESS_KEY}"},
        params={"query": word},
    )

    return response.json()

@app.route("/images", methods=["GET", "POST"])
def images():
    if request.method == "GET":
        ## read images from db
        images = images_collection.find({})
        return jsonify([image for image in images])

    if request.method == "POST":
        ## save images to db
        image = request.get_json()
        image["_id"] = image.get("id")
        result = images_collection.insert_one(image)
        inserted_id = result.inserted_id
        return {"inserted_id": inserted_id}

@app.route("/images/<image_id>", methods=["DELETE"])
def delete_image(image_id):
    if request.method == "DELETE":
        result = images_collection.delete_one({"_id": image_id})
        return {"deleted_id": image_id}






if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050, debug=True)
