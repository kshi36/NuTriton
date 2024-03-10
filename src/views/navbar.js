import React from 'react';
import {Link,Route,Routes} from 'react-router-dom'
import Home_icon from "./UI/home 2.png"
import Map_icon from "./UI/MAPS  2.png"
import Profile_icon from "./UI/PROFILE 2.png"



export default function Navbar() {
    return (
        <div className="ui green bottom fixed three item inverted menu" >
            <a className = 'item'><Link to="/"><img src= {Home_icon}  style={{height:50, width:50}} /></Link></a>
            <a className = 'item'><Link to="/map"><img src={Map_icon}  style={{height:50, width:50}} /></Link></a>
            <a className = 'item'><Link to="/profile"><img src={Profile_icon}  style={{height:50, width:50}} /></Link></a>
        </div>
    );
}