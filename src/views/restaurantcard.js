import React, { useState } from 'react';
import { MdOutlineFoodBank, MdOutlineStarPurple500, MdOutlineStarOutline } from "react-icons/md";
import FoodCard from './foodcard';

import { Link } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  const foods = restaurant.menu;
  // const d_restaurant = {
  //   id: "sssssS",
  //   Name: "Good restaurant",
  //   wait_time: "0"
  // }
  // const { id, Name, hours, wait_time, location } = d_restaurant;
    
=======
  const foods = restaurant.menu;
  // const d_restaurant = {
  //   id: "sssssS",
  //   Name: "Good restaurant",
  //   wait_time: "0"
  // }
  // const { id, Name, hours, wait_time, location } = d_restaurant;
    
>>>>>>> d98e5ec0c47d91c8efe62b00907ce8025f493fb5
  //   //TODO: load foods list from Firebase (DB)
  //   // dummy foods
  //   const foods = [
  //     {
  //       id: 1,
  //       Name: "Apple",
  //       nutritionInfo: {
  //         calories: 52,
  //         carbohydrates: 14,
  //         protein: 0.3,
  //         fat: 0.2,
  //         contains_soy: "True",
  //         vegetarian: "True"
  //       }
  //     },
  //     {
  //       id: 2,
  //       Name: "Banana",
  //       nutritionInfo: {
  //         calories: 89,
  //         carbohydrates: 23,
  //         protein: 1.1,
  //         fat: 0.3,
  //         contains_soy: "False",
  //         vegetarian: "False"
  //       }
  //     },
  //     {
  //       id: 3,
  //       Name: "Orange",
  //       nutritionInfo: {
  //         calories: 47,
  //         carbohydrates: 12,
  //         protein: 1,
  //         fat: 0.0,
  //         contains_soy: "True",
  //         vegetarian: "False"
  //       }
  //     }
  //   ];
<<<<<<< HEAD
>>>>>>> 85ddac95 (debugging filter not filtering)
=======
>>>>>>> d98e5ec0c47d91c8efe62b00907ce8025f493fb5
            

    const [isCollapsed, setIsCollapsed] = useState(true); // State to manage collapsible component visibility
    const [isHovered, setIsHovered] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed); // Toggle the state when clicking on the main component
    };

    const toggleHover = () => {
      setIsHovered(!isHovered);
    }

<<<<<<< HEAD
    const renderList = menu.map((food) => {
=======
    const renderList = foods.map((food) => {
>>>>>>> d98e5ec0c47d91c8efe62b00907ce8025f493fb5
        return <FoodCard food={food} key={food.Name} />
    });

    function InnerFav({ onClick }) {
      const handleClick = (event) => {
        // Prevent the click event from bubbling up to the outer component
        event.stopPropagation();
<<<<<<< HEAD
        
=======

>>>>>>> d98e5ec0c47d91c8efe62b00907ce8025f493fb5
        // Handle click event for inner component
        if (onClick) {
          onClick();
        }
      };
<<<<<<< HEAD
    
=======

>>>>>>> d98e5ec0c47d91c8efe62b00907ce8025f493fb5
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
                    <div style={{fontSize:'16px'}}>{restaurant.Name}</div>
                    <div>{"Hours: " + restaurant.Hours}</div>
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
