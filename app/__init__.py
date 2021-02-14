from flask import Flask, render_template


app = Flask(__name__)

@app.route('/hello')
def hello():
    return "<h1>Hello World!</h1>"

@app.route('/')
def index():
    return render_template('index.html')
