import React, {useEffect, useState} from 'react';
import {Content} from "antd/es/layout/layout";
import {Col, Row, Card, Space} from "antd";
import 'antd/dist/antd.css'
import './home.css'
import '../../App.css'
import {LoadingOutlined} from '@ant-design/icons'
import {StatCard} from "../elements/StatCard";



export function Home(){

    const loadingIcon = <LoadingOutlined spin/>

    const [temperature, setTemperature] = useState();
    const [humidity, setHumidity] = useState();
    const [pressure, setPressure] = useState();
    const [spin, setSpin] = useState();

    const iframeTemp = () => {
        return {
            __html: '<iframe src="http://raspberrypi.fritz.box:3000/d-solo/uMYK1czRz/sensors?orgId=1&refresh=30s&theme=light&panelId=2" height=100% width=100% frameborder="0"></iframe>'
        }
    }

    const iframeHumi = () => {
        return {
            __html: '<iframe src="http://raspberrypi.fritz.box:3000/d-solo/uMYK1czRz/sensors?orgId=1&refresh=30s&theme=light&panelId=4" height=100% width=100% frameborder="0"></iframe>'
        }
    }

    const iframePres = () => {
        return {
            __html: '<iframe src="http://raspberrypi.fritz.box:3000/d-solo/uMYK1czRz/sensors?orgId=1&refresh=30s&theme=light&panelId=6" height=100% width=100% frameborder="0"></iframe>'
        }
    }

    useEffect(() => {
        fetch("http://raspberrypi.fritz.box:5000/api/v1/temperature")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setTemperature(result.value)
                }
            );
        fetch("http://raspberrypi.fritz.box:5000/api/v1/humidity")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setHumidity(result.value)
                }
            );
        fetch("http://raspberrypi.fritz.box:5000/api/v1/pressure")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setPressure(result.value)
                }
            );
    }, [])

    return(
    <Content className="appContent">
        <Row style={{padding: 10}}>
            <Col span={8} style={{padding: 3}}>
                <StatCard title="Aktuelle Temperatur" value={temperature}/>
            </Col>
            <Col span={8} style={{padding: 3}}>
                <StatCard title="Aktuelle Luftfeuchtigkeit" value={humidity}/>
            </Col>
            <Col span={8} style={{padding: 3}}>
                <StatCard title="Aktueller Luftdruck" value={pressure}/>
            </Col>
        </Row>
        <Space className='graphContainer' direction="vertical" size="small">
            <Card bordered={true}>
                <div className='grafana' dangerouslySetInnerHTML={iframeTemp()}/>
            </Card>
            <Card bordered={true}>
                <div className='grafana' dangerouslySetInnerHTML={iframeHumi()}/>
            </Card>
            <Card bordered={true}>
                <div className='grafana' dangerouslySetInnerHTML={iframePres()}/>
            </Card>
        </Space>
        
        
        
    </Content>
    )
}
