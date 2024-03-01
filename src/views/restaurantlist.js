import RestaurantCard from './restaurantcard';
import { useContextProvider } from "../controllers/restaurantcontext";

import {Link} from "react-router-dom";
import { useEffect } from 'react';
import { IoFilter } from "react-icons/io5";


export default function RestaurantList() {
    const { restaurants, getRestaurants, searchTerm, searchRes, searchHandler } = useContextProvider();

    //TODO: load restaurants list from Firebase (DB)
    useEffect(() => {
        getRestaurants();

        //logging
        // restaurants.forEach((restaurant) => {console.log("restaurant data: ", restaurant)});
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
                    {/*<Link to="/add">*/}
                    <button className="ui icon button gray right"><IoFilter/></button>
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