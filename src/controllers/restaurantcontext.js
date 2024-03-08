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
    
    //TODO: retrieve restaurants list from Firestore
    async function getRestaurants() {
        const res = await getDocs(collection(db, "restaurants"));
        if (res) {
            //console logging
            // res.forEach((doc) => {
            //     // doc.data() is never undefined for query doc snapshots
            //     console.log(doc.id, " => ", doc.data());
            // });

            setRestaurants(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
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
