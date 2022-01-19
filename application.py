import os

from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, jsonify
from flask_session import Session
from datetime import datetime
import datetime

app = Flask(__name__)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///play.db")

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/")
@app.route("/index", methods=["GET", "POST"])
def index():
    return render_template("index.html")

@app.route("/score", methods=["GET", "POST"])
def score():
    # current score
    fixed = request.form.get("inPlace")
    moves = request.form.get("counter")
    time=request.form.get("timer")
    
    # best score
    result = db.execute("SELECT name, inplace, moves, seconds, recorddate FROM scores ORDER BY inplace DESC, moves ASC, seconds ASC LIMIT 1")
    for r in result:
        bestInPlace = r["inplace"]
        bestCounter = r["moves"]
        bestTimer= r["seconds"]
        
    return render_template("score.html", inPlace=fixed, counter=moves, timer=time, bestInPlace=bestInPlace, bestCounter=bestCounter, bestTimer=bestTimer)

@app.route("/allScores", methods=["GET", "POST"])
def allScores():
    if request.method == "POST":
    
        fixed = request.form.get("inPlace")
        moves = request.form.get("counter")
        time = request.form.get("timer")
        name = request.form.get("name")
        timeStamp = datetime.datetime.now()
        # .strftime('%Y-%m-%d %H:%M:%S')
    
        if not request.form.get("name"):
            name = "Anonymous"
            
        db.execute("INSERT INTO scores(name, inplace, moves, seconds, recorddate) VALUES(?, ?, ?, ?, ?)",
           name, fixed, moves, time, timeStamp)
       
        result = db.execute("SELECT name, inplace, moves, seconds, recorddate FROM scores ORDER BY inplace DESC, moves ASC, seconds ASC LIMIT 10")
    else:
        result = db.execute("SELECT name, inplace, moves, seconds, recorddate FROM scores ORDER BY inplace DESC, moves ASC, seconds ASC LIMIT 10")
        return render_template("allScores.html", result=result, i=0)

    return render_template("allScores.html", result=result, i=1);
