from flask import Flask

app = Flask(__name__)

app.DEBUG = True

if __name__ == "__main__":
    app.run()