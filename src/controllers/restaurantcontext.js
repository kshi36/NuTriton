import { createContext, useContext, useState } from 'react';

import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

const restaurantContext = createContext({});

/** Context provider "view" */
export function ContextProvider({ children }) {
    //restaurants list
    const [restaurants, setRestaurants] = useState([]);

    //search terms & results
    const [searchTerm, setSearchTerm] = useState("");
    const [searchRes, setSearchRes] = useState([]);

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
    function searchHandler(searchTerm) {
        setSearchTerm(searchTerm);
        //non-empty search term
        if (searchTerm !== "") {
            const newRestaurantList = restaurants.filter((restaurant) => {
                return restaurant.name
                    .toLowerCase()
                    .includes(searchTerm.toString().toLowerCase());    //includes() matches string
            });
            setSearchRes(newRestaurantList);
        }
        else setSearchRes(restaurants);
    }
    
    const value = {
        restaurants,
        searchTerm,
        searchRes,
        searchHandler,
        getRestaurants,
    }

    return <restaurantContext.Provider value={ value }>
        {children}
    </restaurantContext.Provider>
}

/** Context provider "functionality" */
export function useContextProvider() {
    return useContext(restaurantContext);
}
