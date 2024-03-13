import RestaurantCard from './restaurantcard';
import { useContextProvider } from "../controllers/restaurantcontext";
import FilterSortSelector from "./filtersort_selector";

import React from 'react'
import { useEffect, useState } from 'react';
export default function RestaurantList() {
    const { restaurants, getRestaurants, searchTerm, searchRes, searchHandler, filterHandler, filterParams, sortParam } = useContextProvider();

    //load restaurants list from Firebase (DB)
    useEffect(() => {
        getRestaurants();
        
        //logging
        // console.log('incoming restaurant data:', restaurants.length);
        // restaurants.forEach((restaurant) => {console.log("restaurant data: ", restaurant)});
    }, []);

    // const dummy_restaurants = ["Dirty Birds", "Margherita Pizza", "Tapioca Express", "Taco Villa", "Croutons", "64 degrees", "AI Dente", "Bird Rock", "Blue Bowl"];
    // const renderDummyList = dummy_restaurants.map((restaurant) => {
    //     return <RestaurantCard restaurant={restaurant}
    //                            key={restaurant} />
    // });

    const renderList = (searchTerm.length < 1 && filterParams.length < 1 && sortParam == null ? restaurants : searchRes)
    // const renderList = searchRes
        .map((restaurant) => {
        return <RestaurantCard restaurant={restaurant}
                               key={restaurant.id} />
    });

    return (
        <div className="main">
            <div className="ui segment">
                <h2>Restaurants
                    <FilterSortSelector />
                </h2>
                <div className="ui search">
                    <div className="ui icon input">
                        <input id="search_input" type="text" placeholder="Search by restaurant"
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
                <div className='invisible-placeholder'>restaurant</div>
            </div>
        </div>
    );
}