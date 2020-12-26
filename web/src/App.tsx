import React, {useState} from 'react';
import {Home} from "./components/Home/Home";
import {Header} from "antd/es/layout/layout";
import {Menu} from "antd";
import { Dashboard } from './components/Dashboard/Dashboard';


function App() {

const [menuSelection, setMenuSelection] = useState(1);

const handleClickMenu = (e: any) => {
  setMenuSelection(e.key);
}

return (
  <div>
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} onSelect={handleClickMenu}>
        <Menu.Item key="1">Überblick</Menu.Item>
        <Menu.Item key="2">Dashboard</Menu.Item>
      </Menu>
    </Header>
    {menuSelection == 1 && <Home/>}
    {menuSelection == 2 && <Dashboard/>}
  </div>
  );
}

export default App;
