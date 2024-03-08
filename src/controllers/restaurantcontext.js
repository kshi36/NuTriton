import { createContext, useContext, useState } from 'react';

import app from '../firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

//Retrieve Firestore (Firebase DB)
const db = getFirestore(app);

const restaurantContext = createContext({});

/** Context provider "view" */
export function ContextProvider({ children }) {
    //restaurants list
    const [restaurants, setRestaurants] = useState([]);

    //search terms & results
    const [searchTerm, setSearchTerm] = useState("");
    const [searchRes, setSearchRes] = useState([]);
    const [filterParams, setFilterParams] = useState([]);
    const [sortParam, setSortParam] = useState("");

    
    //TODO: retrieve restaurants list from Firestore
    async function getRestaurants() {
        const res = await getDocs(collection(db, "restaurants"));
        if (res) {
            //console logging
            // res.forEach((doc) => {
            //     // doc.data() is never undefined for query doc snapshots
            //     console.log(doc.id, " => ", doc.data());
            // });

    // const resdb_name = "restaurant_test";
    const resdb_name = "restaurants";
    const menudb_name = "menu";
    
    // retrieve restaurants list and food for each from Firestore
    async function getRestaurants() {
        // const res = await getDocs(collection(db, "restaurants"));
        // if (res) {
        //     setRestaurants(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        // }

        const res = await getDocs(collection(db, resdb_name));
        if (res) {
            const res_list = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            for (let r of res_list) {
                const foods = await getDocs(collection(db, resdb_name, r.id, menudb_name));
                if (foods) { r.menu = foods.docs.map((doc) => ({ id: doc.id, ...doc.data() })) }
            }
            setRestaurants(res_list);
        }

    }

    //TODO: retrieve foods list from Firestore


    //TODO: handle searching for restaurants & foods
    // also add filters/sorting if specified
    function searchHandler(searchTerm) {
        var newRestaurantList = structuredClone(restaurants);

        // --- apply search filter
        setSearchTerm(searchTerm);
        //non-empty search term
        if (searchTerm !== "") {
            newRestaurantList = restaurants.filter((restaurant) => {
                //TODO: functionality to search for restaurants

                return restaurant.name
                    .toLowerCase()
                    .includes(searchTerm.toString().toLowerCase());    //includes() matches string
            });
            // setSearchRes(newRestaurantList);
        }
        // else setSearchRes(restaurants);

        // --- apply selector filters
        const filterMap = new Map([
            ["dairy", ["Contains Dairy", "FALSE"]],
            ["eggs", ["Contains Eggs", "FALSE]"]],
            ["fish", ["Contains Fish", "FALSE"]],
            ["gluten", ["Contains Gluten", "FALSE"]],
            ["peanuts", ["Contains Peanuts", "FALSE"]],
            ["sesame", ["Contains Seasame", "FALSE"]],
            ["shell_fish", ["Contains Shell Fish", "FALSE"]],
            ["soy", ["Contains Soy", "FALSE"]],
            ["tree_nuts", ["Contains Tree Nuts", "FALSE"]],
            ["wheat", ["Contains Wheat", "FALSE"]],
            ["vegan", ["Vegan", "TRUE"]],
            ["vegetarian", ["Vegetarian", "TRUE"]],
            ["wellness", ["Wellness", "TRUE"]],
            ["sustainability", ["Sustainability", "TRUE"]],
        ])
        if (filterParams.length > 0) {
            // newRestaurantList = newRestaurantList.filter((restaurant) => {
            for (var restaurant in newRestaurantList) {
                // filter "menu" foods
                var this_menu = restaurant.menu
                for (let j = 0; j < filterParams.length; j++) {
                    const filter_tuple = filterMap[filterParams[j]]
                    this_menu.filter(food => food[filter_tuple[0]] == filter_tuple[1])
                }
                restaurant.menu = this_menu;
                
                // return restaurant.menu.filter(
                //     food => food["Contains Dairy"] == "FALSE"
                // )
            };

             // specified sort
            // if (params.sort_by) {
                
            // }
            setSearchRes(newRestaurantList);
        }
    }

    // Update filters and sorting
    function filterHandler(params) {    
        setFilterParams(params);
        return searchHandler("");
    
        // non-empty filters
        // if (params) {
        //     var newRestaurantList = searchRes.filter((restaurant) => {
        //         // filter "menu" foods
        //         var this_manu = restaurant.menu
        //         for (filter in filters) {
        //             if (params.filter) {
        //                 this_menu.filter(food => food[filter] == )
        //             }
        //         }
        //         return restaurant.menu.filter(
        //             food => food["Contains Dairy"] == "FALSE"
        //         )
        //     });

        //      // specified sort
        //     if (params.sort_by) {
                
        //     }
        //     setSearchRes(newRestaurantList);
        // }

       
    }
    
    const value = {
        restaurants,
        getRestaurants,
        searchTerm,
        searchRes,
        searchHandler,
        filterHandler,        
    }

    return <restaurantContext.Provider value={ value }>
        {children}
    </restaurantContext.Provider>
}

/** Context provider "functionality" */
export function useContextProvider() {
    return useContext(restaurantContext);
}
