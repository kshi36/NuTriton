import React from 'react';
import {Link,Route,Routes} from 'react-router-dom'
import Home_icon from "./UI/home 2.png"
import Map_icon from "./UI/MAPS  2.png"
import Profile_icon from "./UI/PROFILE 2.png"
import {useState} from "react";

export default function Navbar() {

    //toggle between home pages
    const [activePage, setActivePage] = useState(0);

    function togglePage(page_num) {
        setActivePage(page_num);
    }
    return (
        <div className="ui green bottom fixed three item inverted menu" >
            <a className={activePage === 0 ? "item active" : "item"} onClick={() => togglePage(0)}><Link to="/home" state={{page:0}}><img src= {Home_icon}  style={{height:50, width:50}} /></Link></a>
            <a className={activePage === 1 ? "item active" : "item"} onClick={() => togglePage(1)}><Link to="/map" state={{page:1}}><img src={Map_icon}  style={{height:50, width:50}} /></Link></a>
            <a className={activePage === 2 ? "item active" : "item"} onClick={() => togglePage(2)}><Link to="/profile" state={{page:2}}><img src={Profile_icon}  style={{height:50, width:50}} /></Link></a>
        </div>
    );
}