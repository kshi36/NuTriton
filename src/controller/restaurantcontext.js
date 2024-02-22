import { createContext, useContext, useState } from 'react';


const restaurantContext = createContext({});

export function ContextProvider({ children }) {
    //restaurants list
    const [restaurants, setRestaurants] = useState([]);

    //search terms & results
    const [searchTerm, setSearchTerm] = useState("");
    const [searchRes, setSearchRes] = useState([]);
    
    //TODO: retrieve restaurants list from DB
    function getRestaurants() {
    }

    //TODO: handle searching for restaurants & foods
    function searchHandler(searchTerm) {
        setSearchTerm(searchTerm);
        //non-empty search term
        if (searchTerm !== "") {
            const newRestaurantList = restaurants.filter((restaurant) => {
                //TODO: functionality to search for restaurants

                // return Object.values(restaurant)
                //     .join(' ')
                //     .toLowerCase()
                //     .includes(searchTerm.toString().toLowerCase());    //includes() matches string
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

export function useContextProvider() {
    return useContext(restaurantContext);
}
