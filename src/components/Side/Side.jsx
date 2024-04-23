import React from "react";
import { useState } from "react";
import { Button, Layout, theme } from "antd";
import "./Side.css";
import Logo from "./Logo";
import MenuList from "./Menu";
import DarkSun from "./DarkSun";
import {  MenuFoldOutlined, MenuUnfoldOutlined,} from "@ant-design/icons";


const {Header, Sider} = Layout;

const Side = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return(
        <>
        <div className="fondo">
        <Layout>
            <Sider className='sidebar fondo' theme={darkTheme ? 'dark' : 'light'}
            collapsed={collapsed} collapsible trigger={null}
            >
                <Logo/>
                <MenuList darkTheme={darkTheme}/>
                <DarkSun darkTheme={darkTheme} changeTheme={() => setDarkTheme(!darkTheme)}/>
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer}}>
                    <Button className="toogle" onClick={() => setCollapsed(!collapsed)} type="primary" icon={collapsed ? <MenuUnfoldOutlined/>: <MenuFoldOutlined/>}></Button>
                </Header>
            </Layout>
        </Layout>
        </div>
        </>
    )
}

export default Side