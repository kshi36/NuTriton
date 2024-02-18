import RestaurantCard from './restaurantcard';
import { useContextProvider } from "../controller/restaurantcontext";

import {Link} from "react-router-dom";
import { IoFilter } from "react-icons/io5";


export default function RestaurantList() {
    const { contacts, getContacts, searchTerm, searchRes, searchHandler } = useContextProvider();

    //TODO: load restaurants list from Firebase (DB)
    const dummy_restaurants = ["Dirty Birds", "Margherita Pizza", "Tapioca Express", "Taco Villa", "Croutons", "64 degrees", "AI Dente", "Bird Rock", "Blue Bowl"];

    //TODO: render restaurant cards for entire list
    const renderList = dummy_restaurants
                        .map((restaurant) => {
                            return <RestaurantCard restaurant={restaurant}
                                                    key={restaurant} /> //TODO: change key to id
                        })

    return (
        <div className="main">
            <h2>Restaurants
                {/*<Link to="/add">*/}
                    <button className="ui icon button gray right"><IoFilter /></button>
                {/*</Link>*/}
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input type="text" placeholder="Search by restaurant or entrée"
                           value={searchTerm}
                           onChange={(e) => {searchHandler(e.target.value)}}/>
                    <i className="search icon"></i>
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