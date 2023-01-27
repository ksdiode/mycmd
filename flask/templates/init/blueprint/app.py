from flask import Flask
from ${module}

app = Flask(__name__)

app.config.from_pyfile("settings.py")
app.register_blueprint(${module}.router)

if __name__ == "__main__":
    app.run()


