import requests
from sense_hat import SenseHat


def postDataToDb(temp, humid, pres):
    payload = 'temperature value=' + temp + '\n' + 'humidity value=' + humid + '\n' + 'pressure value=' + pres

    r = requests.post("http://localhost:8086/write?db=sensor", data=payload)


sense = SenseHat()

temperature = sense.temp
humidity = sense.humidity
pressure = sense.pressure

postDataToDb(str(round(temperature, 2)), str(round(humidity, 2)), str(round(pressure, 2)))
