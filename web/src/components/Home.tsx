import React, {useEffect, useState} from 'react';
import {Content, Header} from "antd/es/layout/layout";
import {Col, Menu, Row, Spin} from "antd";
import 'antd/dist/antd.css'
import {LoadingOutlined} from '@ant-design/icons'
import {StatCard} from "./elements/StatCard";



export function Home(){

    const loadingIcon = <LoadingOutlined spin/>

    const [temperature, setTemperature] = useState();
    const [humidity, setHumidity] = useState();
    const [pressure, setPressure] = useState();
    const [spin, setSpin] = useState();

    useEffect(() => {
        fetch("http://raspberrypi.fritz.box:5000/api/v1/temperature")
            .then(res => res.json())
            .then(
                (result) => {
                    setTemperature(result)
                }
            );
        fetch("http://raspberrypi.fritz.box:5000/api/v1/humidity")
            .then(res => res.json())
            .then(
                (result) => {
                    setHumidity(result)
                }
            );
        fetch("http://raspberrypi.fritz.box:5000/api/v1/pressure")
            .then(res => res.json())
            .then(
                (result) => {
                    setPressure(result)
                }
            );
    })

    return(
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">Überblick</Menu.Item>
            </Menu>
            <Content>
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
            </Content>
        </Header>
    )
}
