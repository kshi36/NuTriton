import React, { useState } from 'react';
import { MdOutlineFoodBank, MdOutlineStarPurple500, MdOutlineStarOutline } from "react-icons/md";
import FoodCard from './foodcard';

import { Link } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
    const { id, Name, hours, menu, wait_time, location } = restaurant;

    
    //TODO: load foods list from Firebase (DB)
    // dummy foods
    // const menu = [
    //     {
    //       id: 1,
    //       Name: "Apple",
    //       calories: 52,
    //       carbohydrates: 14,
    //       protein: 0.3,
    //       fat: 0.2,
    //       Price: "$0.1",
    //       Contains_soy: "True",
    //       Vegetarian: "True"
    //     },
    //     {
    //       id: 2,
    //       Name: "Banana",
    //       calories: 52,
    //       carbohydrates: 14,
    //       protein: 0.3,
    //       fat: 0.2,
    //       Price: "$0.1",
    //       Contains_soy: "True",
    //       Vegetarian: "True"
    //     },
    //     {
    //       id: 3,
    //       Name: "Orange",
    //       calories: 52,
    //       carbohydrates: 14,
    //       protein: 0.3,
    //       fat: 0.2,
    //       Price: "$0.1",
    //       Contains_soy: "True",
    //       Vegetarian: "True"
    //     }
    //   ];
            

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

    return (
        <div>
            <div className="card restaurant"  onClick={toggleCollapse}>
                {/* {<MdOutlineFoodBank />} */}
                <div className="content">
                    <div style={{fontSize:'16px'}}>{Name}</div>
                    <div>{"wait time: " + wait_time}</div>
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