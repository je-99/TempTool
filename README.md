# TempTool - Climate Dashboard

Ein Projekt im Rahmen der Vorlesung "Einführung in Einplatinencomputer" im Studiengang Praktische Informatik an der HTW Saar.

## Übersicht
TempTool bietet eine Weboberfläche zum Anzeigen von aktuellen und historischen Sensordaten von einem SenseHAT.

## How to build
### Hardware Dependencies
- Raspberry Pi
- SenseHAT

### Python Dependencies
- python3
- flask
- requests
- sense-hat

### Software Dependencies
- Grafana
- InfluxDB

### Setup (Step-by-Step)
1. Connect SenseHAT to RaspberryPi
2. Download Python and the dependencies needed for this project
3. Download and install Grafana (https://grafana.com/grafana/download)
4. Download and install InfluxDB (https://portal.influxdata.com/downloads/)
5. Copy scripts/flaskApp.service into /lib/systemd/system  
5.1. Run: sudo chmod 644 /lib/systemd/system/flaskApp.service  
5.2. Run: sudo systemctl daemon-reload  
5.3. Run: sudo systemctl enable flaskApp.service  
6. Run: chrontab -e  
6.1 Add: * * * * * python3 .../TempTool/scripts/DbSensorPush.py
7. Setup Grafana Dashboard
