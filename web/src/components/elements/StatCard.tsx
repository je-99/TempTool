import React, {FunctionComponent} from 'react';
import {Card} from "antd";
import 'antd/dist/antd.css'
import { Typography } from 'antd';

type StatCardProps = {
    title: string,
    value: any
}

const { Title } = Typography;

export const StatCard: FunctionComponent<StatCardProps> = ({title, value}: StatCardProps) =>
    <Card title={title} bordered={true}>
        <Title level={2}>{value}</Title>
    </Card>
