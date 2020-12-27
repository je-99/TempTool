import React, {useEffect, useState} from 'react';
import {Content} from "antd/es/layout/layout";
import {Col, Row, Card, Space, Skeleton} from "antd";
import 'antd/dist/antd.css'
import './home.css'
import '../../App.css'
import {StatCard} from "../elements/StatCard";
import { Typography } from 'antd';



export function Home(){

    const { Title } = Typography;

    const [temperature, setTemperature] = useState(<Skeleton title active paragraph={false}/>);
    const [humidity, setHumidity] = useState(<Skeleton title active paragraph={false}/>);
    const [pressure, setPressure] = useState(<Skeleton title active paragraph={false}/>);

    const hostname = window.location.hostname;

    const iframeTemp = () => {
        return {
            __html: '<iframe src="http://' + hostname + ':3000/d-solo/uMYK1czRz/sensors?orgId=1&refresh=30s&theme=light&panelId=2" height=100% width=100% frameborder="0"></iframe>'
        }
    }

    const iframeHumi = () => {
        return {
            __html: '<iframe src="http://' + hostname + ':3000/d-solo/uMYK1czRz/sensors?orgId=1&refresh=30s&theme=light&panelId=4" height=100% width=100% frameborder="0"></iframe>'
        }
    }

    const iframePres = () => {
        return {
            __html: '<iframe src="http://' + hostname + ':3000/d-solo/uMYK1czRz/sensors?orgId=1&refresh=30s&theme=light&panelId=6" height=100% width=100% frameborder="0"></iframe>'
        }
    }

    useEffect(() => {
        fetch("http://' + hostname + ':5000/api/v1/temperature")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setTemperature(<Title level={2}>{result.value + " °C"}</Title>)
                }
            );
        fetch("http://' + hostname + ':5000/api/v1/humidity")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setHumidity(<Title level={2}>{result.value + " %"}</Title>)
                }
            );
        fetch("http://' + hostname + ':5000/api/v1/pressure")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setPressure(<Title level={2}>{result.value + " hPa"}</Title>)
                }
            );
    }, [])

    return(
    <Content className="appContent">
        <Row className="homeRow">
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
