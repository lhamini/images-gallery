import requests
from config import config
from flask import Flask, request

app = Flask(__name__)


@app.route("/new_image")
def new_image():
    word = request.args.get("query")
    response = requests.get(
        url="https://api.unsplash.com/photos/random/",
        headers={"Authorization": f"Client-ID {config.UNSPLASH_ACCESS_KEY}"},
        params={"query": word},
    )

    return response.json()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050, debug=True)
