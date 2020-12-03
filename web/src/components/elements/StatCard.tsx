import React, {FunctionComponent} from 'react';
import {Card} from "antd";
import 'antd/dist/antd.css'

type StatCardProps = {
    title: string,
    value: any
}

export const StatCard: FunctionComponent<StatCardProps> = ({title, value}: StatCardProps) =>
    <Card title={title} bordered={true}>
        {value}
    </Card>
