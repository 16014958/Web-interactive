from flask import Flask, render_template, jsonify, request
import sqlite3

app = Flask(__name__)

SCORESDB = 'weatherData'

@app.route('/', methods=['GET'])
def index():
    return render_template('home.html')

@app.route('/scores', methods=['GET'])
def scores_list():
    con = sqlite3.connect(SCORESDB)
    scores = []
    cur = con.execute('SELECT * FROM Rainfall')

    for row in cur:
        scores.append(list(row))
    con.close()
    return jsonify(scores)
