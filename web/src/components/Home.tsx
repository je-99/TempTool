import React, {FunctionComponent} from 'react';
import {Content, Header} from "antd/es/layout/layout";
import {Col, Menu, Row} from "antd";
import 'antd/dist/antd.css'
import {StatCard} from "./elements/StatCard";

export const Home: FunctionComponent = () =>
    <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Überblick</Menu.Item>
        </Menu>
        <Content>
            <Row style={{padding: 10}}>
                <Col span={8} style={{padding: 3}}>
                    <StatCard title="Aktuelle Temperatur" value="23,7 C"/>
                </Col>
                <Col span={8} style={{padding: 3}}>
                    <StatCard title="Aktuelle Luftfeuchtigkeit" value="43%"/>
                </Col>
                <Col span={8} style={{padding: 3}}>
                    <StatCard title="Aktueller Luftdruck" value="1017.0 hPa"/>
                </Col>
            </Row>
        </Content>
    </Header>