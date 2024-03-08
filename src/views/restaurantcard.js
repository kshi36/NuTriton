import React, { useState } from 'react';
import { MdOutlineFoodBank, MdOutlineStarPurple500, MdOutlineStarOutline } from "react-icons/md";
import FoodCard from './foodcard';

import { Link } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
    const { id, Name, Hours, menu, wait_time, location } = restaurant;            

    const [isCollapsed, setIsCollapsed] = useState(true); // State to manage collapsible component visibility
    const [isHovered, setIsHovered] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed); // Toggle the state when clicking on the main component
    };

    const toggleHover = () => {
      setIsHovered(!isHovered);
    }

    const renderList = menu.map((food) => {
        return <FoodCard food={food} key={food.Name} />
    });

    function InnerFav({ onClick }) {
      const handleClick = (event) => {
        // Prevent the click event from bubbling up to the outer component
        event.stopPropagation();
        
        // Handle click event for inner component
        if (onClick) {
          onClick();
        }
      };
    
      return (
        <div className="fav" onClick={handleClick}>
        {isHovered?<MdOutlineStarOutline size={20}/>:<MdOutlineStarPurple500 size={20}/>}
        </div>
      );
    }

    const daysOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const index = Hours.indexOf(dayOfWeek);
    var open_time = "";
    if (index !== -1) {
      const startIndex = index + dayOfWeek.length + 2;
      let endIndex = startIndex;
      for (let i = startIndex; i < Hours.length; i++) {
        if (Hours[i] !== Hours[i].toLowerCase()) { // Check if uppercase letter
          break;
        }
        endIndex++;
      }
      open_time = Hours.substring(startIndex, endIndex);
    }

    return (
        <div>
            <div className="card restaurant"  onClick={toggleCollapse}>
                {/* {<MdOutlineFoodBank />} */}
                <div className="content">
                    <div style={{fontSize:'16px',paddingLeft:'10px'}}>{Name}</div>
                    {<div>{"Today Hours: " + open_time}</div>}
                </div>
                <InnerFav className="fav" onClick={toggleHover} />
            </div>               
            {!isCollapsed && (
            <div className="collapsible">
                <div style={{paddingTop:'0px',paddingBottom:'2px'}}>
                    {renderList}
                </div>
            </div>
            )}
      </div>
    );
}
