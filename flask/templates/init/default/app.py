from flask import Flask

app = Flask(__name__)

app.config['DEBUG']=True
app.config['TEMPLATES_AUTO_RELOAD'] = True

if __name__ == "__main__":
    app.run()


