import React from "react";
import { Button } from "antd";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import "./Side.css";

const DarkSun = ({darkTheme, changeTheme}) => {

    return (
        <>
        <div className="dark-btn">
            <Button onClick={changeTheme}>
                {darkTheme ? <HiOutlineSun/> : <HiOutlineMoon/>}
            </Button>
        </div>
        </>
    )
}

export default DarkSun;