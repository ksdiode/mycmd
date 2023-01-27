from flask import Flask
import gpio.led
app = Flask(__name__)

app.config.from_pyfile("settings.py")


app.register_blueprint(gpio.led.router)

if __name__ == "__main__":
    app.run()


