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
    
    //TODO: retrieve restaurants list from Firestore
    async function getRestaurants() {
        const res = await getDocs(collection(db, "restaurants"));
        if (res) {
            //restaurant data console logging
            // res.forEach((doc) => {
            //     // doc.data() is never undefined for query doc snapshots
            //     console.log(doc.id, " => ", doc.data());
            // });

            const fulldocs = [];
            for (const doc of res.docs) {
                //TODO: retrieve foods list from Firestore
                //retrieve food menu from every restaurant
                const foodRes = await getDocs(collection(db, "restaurants", doc.id, "menu"));

                //food data console logging
                // foodRes.forEach((foodDoc) => {
                //     // doc.data() is never undefined for query doc snapshots
                //     console.log(foodDoc.id, " => ", foodDoc.data());
                // });

                const foods = foodRes.docs.map((foodDoc) => ({ id: foodDoc.id, ...foodDoc.data() }));

                fulldocs.push({id: doc.id, foods, ...doc.data()});

                setRestaurants(fulldocs);
            }
            // console.log("fulldocs:",fulldocs);
            // await setRestaurants(fulldocs);
        }
    }

    //TODO: handle searching for restaurants & foods
    function searchHandler(searchTerm) {
        setSearchTerm(searchTerm);
        //non-empty search term
        if (searchTerm !== "") {
            const newRestaurantList = restaurants.filter((restaurant) => {
                //TODO: functionality to search for restaurants

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
