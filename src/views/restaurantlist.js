import RestaurantCard from './restaurantcard';
import { useContextProvider } from "../controllers/restaurantcontext";

import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import { IoFilter } from "react-icons/io5";

export function FilterSortSelector() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (show && !document.querySelector('.ui.modal').contains(event.target)) {
            // Close the modal when clicking outside of it
            handleClose();
          }
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [show]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <button className="ui icon button gray right" onClick={handleShow}><IoFilter/></button>

        <div className={`ui modal ${show ? 'visible active' : ''}`}>
            <i className="close icon" onClick={handleClose}></i>
            <div className="header">Filters</div>
            <div className="content">
                <div className="selector_section">
                    <button className="ui toggle button">Vegan</button>
                    <button className="ui toggle button">Vegetarian</button>
                    <button className="ui toggle button">Halal</button>
                    <button className="ui toggle button">Kosher</button>
                    <button className="ui toggle button">No Pork</button>
                    <button className="ui toggle button">No Beef</button>
                    <button className="ui toggle button">No Seafood</button>
                </div>
                <div className="selector_section">
                    <p className="selector_heading">Allergens:</p>
                    <button className="ui toggle button">Dairy Free</button>
                    <button className="ui toggle button">Gluten Free</button>
                    <button className="ui toggle button">No Peanuts</button>
                </div>
                <div className="selector_section">
                    <p className="selector_heading">Sort by:</p>
                    <div className="ui vertical buttons sort_btns">
                        <button className="ui button">Price</button>
                        <button className="ui button">Time</button>
                        <button className="ui button">Distance</button>
                        <button className="ui button">Calories</button>
                        <button className="ui button">Protein</button>
                    </div>
                </div>
                <div className="selector_section">
                    <button className="ui primary button" onClick={handleClose}>Apply</button>
                    <button className="ui button" onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default function RestaurantList() {
    const { restaurants, getRestaurants, searchTerm, searchRes, searchHandler } = useContextProvider();

    //TODO: load restaurants list from Firebase (DB)
    useEffect(() => {
        getRestaurants();

        console.log('incoming restaurant data:', restaurants.length);
        //logging
        restaurants.forEach((restaurant) => {console.log("restaurant data: ", restaurant)});
    }, []);

    // const dummy_restaurants = ["Dirty Birds", "Margherita Pizza", "Tapioca Express", "Taco Villa", "Croutons", "64 degrees", "AI Dente", "Bird Rock", "Blue Bowl"];
    // const renderDummyList = dummy_restaurants.map((restaurant) => {
    //     return <RestaurantCard restaurant={restaurant}
    //                            key={restaurant} />
    // });

    //TODO: render restaurant cards for entire list
    //TODO: filter/sort restaurants will decrease overall list
    const renderList = (searchTerm.length < 1 ? restaurants : searchRes)
        .map((restaurant) => {
        return <RestaurantCard restaurant={restaurant}
                               key={restaurant.id} />
    });

    //TODO: add UI - filter/sort popup menu
    return (
        <div className="main">
            <div className="ui container">
                <h2>Restaurants
                    <FilterSortSelector />
                    {/*<Link to="/add">*/}
                    {/* <button className="ui icon button gray right"><IoFilter/></button> */}
                    {/*</Link>*/}
                </h2>
                <div className="ui search">
                    <div className="ui icon input">
                        <input type="text" placeholder="Search by restaurant or entrée"
                               value={searchTerm}
                               onChange={(e) => {
                                   searchHandler(e.target.value)
                               }}/>
                        <i className="search icon"></i>
                    </div>
                </div>
            </div>
            <div className="ui celled list">
                {renderList.length > 0
                    ? renderList
                    : "No Restaurants/Foods Available"}
            </div>
        </div>
    );
}