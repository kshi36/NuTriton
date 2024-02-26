import React, { useState } from 'react';
import { MdOutlineFoodBank, MdOutlineStarPurple500, MdOutlineStarOutline } from "react-icons/md";

import { Link } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
    const { id, name, foods, hours, wait_time, location } = restaurant;
    // foods

    const [isCollapsed, setIsCollapsed] = useState(true); // State to manage collapsible component visibility

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed); // Toggle the state when clicking on the main component
    };

    return (
        <div>
            <div className="card"  onClick={toggleCollapse}>
                {/* {<MdOutlineFoodBank />} */}
                <div className="content">
                    <div>{name}</div>
                    <div>{"wait time: " + wait_time}</div>
                </div>
                <div className="fav">
                    <MdOutlineStarOutline />
                </div>
            </div>
            {!isCollapsed && (
            <div className="collapsible">
            {/* Collapsible content */}
            Here comes the food list...
            </div>
            )}
        </div>
    );
}
