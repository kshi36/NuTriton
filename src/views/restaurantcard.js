import React, { useState } from 'react';
import { MdOutlineFoodBank, MdOutlineStarPurple500, MdOutlineStarOutline } from "react-icons/md";
import FoodCard from './foodcard';

import { Link } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
    const { id, name, foods_id, hours, wait_time, location } = restaurant;
    
    //TODO: load foods list from Firebase (DB)
    // dummy foods
    const foods = [
        {
          id: 1,
          name: "Apple",
          nutritionInfo: {
            calories: 52,
            carbohydrates: 14,
            protein: 0.3,
            fat: 0.2
          }
        },
        {
          id: 2,
          name: "Banana",
          nutritionInfo: {
            calories: 89,
            carbohydrates: 23,
            protein: 1.1,
            fat: 0.3
          }
        },
        {
          id: 3,
          name: "Orange",
          nutritionInfo: {
            calories: 47,
            carbohydrates: 12,
            protein: 1,
            fat: 0.1
          }
        }
      ];
            

    const [isCollapsed, setIsCollapsed] = useState(true); // State to manage collapsible component visibility

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed); // Toggle the state when clicking on the main component
    };

    const renderList = foods.map((food) => {
        return <FoodCard food={food} key={food.id} />
    });

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
                <div className="ui celled list">
                    {renderList}
                </div>
            </div>
            )}
        </div>
    );
}
