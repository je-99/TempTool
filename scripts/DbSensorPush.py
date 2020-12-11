import requests

temperature = 18.98
humidity = 51.23
pressure = 998.21

def postDataToDb:
    payload = 'temperature value=' + temperature

    r = requests.post("http://localhost:8086/write?db=sensor", data=payload)