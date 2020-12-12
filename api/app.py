from flask import Flask, send_from_directory
from flask import render_template
from flask import request
from sense_hat import SenseHat
import datetime
import json
import os
app = Flask(__name__, static_folder='../build', static_url_path='/')

sense = SenseHat()

def apiTemperature():
    temp = {
        "type": "temperature",
        "value": str(round(sense.temp, 2)),
        "timestamp": str(datetime.datetime.now())
    }

    return json.dumps(temp)

def apiPressure():
    temp = {
        "type": "pressure",
        "value": str(round(sense.pressure, 2)),
        "timestamp": str(datetime.datetime.now())
    }

    return json.dumps(temp)

def apiHumidity():
    temp = {
        "type": "humidity",
        "value": str(round(sense.humidity, 2)),
        "timestamp": str(datetime.datetime.now())
    }

    return json.dumps(temp)

def apiAll():
    temp = {
        "temperature": str(sense.temp),
        "humidity": str(sense.humidity),
        "pressure": str(sense.pressure),
        "timestamp": str(datetime.datetime.now())
    }

    return json.dumps(temp)

@app.route('/api/v1/temperature', methods=["GET"])
def routeTemperature():
    return apiTemperature()

@app.route('/api/v1/humidity', methods=["GET"])
def routeHumidity():
    return apiHumidity()

@app.route('/api/v1/pressure', methods=["GET"])
def routePressure():
    return apiPressure()

@app.route('/api/debug', methods=["GET"])
def routeAll():
    return apiAll()

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')