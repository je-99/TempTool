import React from 'react';
import {Content} from "antd/es/layout/layout";
import 'antd/dist/antd.css'
import '../../App.css'


export function Dashboard(){ 

    const hostname = window.location.hostname;

    const iframe = () => {
        return {
            __html: '<iframe src="http://' + hostname + ':3000/d/uMYK1czRz/sensors?orgId=1&refresh=30s" height=100% width=100% frameborder="0"></iframe>'
        }
    }

    return(
    <Content className='grafanaDashboard'>
        <div className='grafanaDashboard' dangerouslySetInnerHTML={iframe()}/>
    </Content>
    )
}