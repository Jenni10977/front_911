import React from "react";
import { FaHome, FaUserAlt, FaBriefcase, FaGlasses } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Menu } from 'antd';
import { TfiHelpAlt } from "react-icons/tfi";
import './Side.css';

const MenuList = ({ darkTheme }) => {
    const items = [
        { key: "home", icon: <FaHome />, label: "HOME" },
        { key: "profile", icon: <FaUserAlt />, label: "PROFILE" },
        { key: "jobs", icon: <FaBriefcase />, label: "JOBS" },
        { key: "notifications", icon: <FaGlasses />, label: "NOTIFICATIONS" },
        { key: "settings", icon: <IoSettingsOutline />, label: "SETTINGS" },
        { key: "help", icon: <TfiHelpAlt />, label: "HELP" },
        { key: "logout", icon: <CiLogout />, label: "LOGOUT" }
    ];

    return (
        <Menu mode="inline" className="menu-bar" theme={darkTheme ? 'dark' : 'light'} items={items}>
            {items.map(item => (
                <Menu.Item key={item.key} icon={item.icon} className="hover">{item.label}</Menu.Item>
            ))}
        </Menu>
    )
}

export default MenuList;