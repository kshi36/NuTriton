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
    const [sortAsc, setSortAsc] = useState(true);

    
    //TODO: retrieve restaurants list from Firestore
    async function getRestaurants() {
        const test_data = [
            {
                Name: 'Foodworx',
                Hours: 'Monday:?8:00 a.m. – 9:00 a.m.Tuesday:?8:00 a.m. – 9:00 a.m.Wednesday:?8:00 a.m. – 9:00 a.m.Thursday:?8:00 a.m. – 9:00 a.m.Friday:?8:00 a.m. – 8:00 a.m.Saturday:?10:00 a.m. – 8:00 a.m.Sunday:?10:00 a.m. – 8:00 a.m',
                menu: [
                    {
                        Name: 'Soy Sauce',
                        Price: '$7.25',
                        'Contains Dairy': 'FALSE',
                        'Contains Eggs': 'FALSE',
                        'Contains Fish': 'FALSE',
                        'Contains Gluten': 'FALSE',
                        'Contains Peanuts': 'FALSE',
                        'Contains Sesame': 'FALSE',
                        'Contains Shell Fish': 'FALSE',
                        'Contains Soy': 'TRUE',
                        'Contains Tree Nuts': 'FALSE',
                        'Sustainability': 'FALSE',
                        'Vegan': 'FALSE',
                        'Vegetarian': 'FALSE',
                        'Wellness': 'FALSE',
                    },
                    {
                        Name: 'Seasame Sauce',
                        Price: '$9.00',
                        'Contains Dairy': 'FALSE',
                        'Contains Eggs': 'FALSE',
                        'Contains Fish': 'FALSE',
                        'Contains Gluten': 'FALSE',
                        'Contains Peanuts': 'FALSE',
                        'Contains Sesame': 'TRUE',
                        'Contains Shell Fish': 'FALSE',
                        'Contains Soy': 'FALSE',
                        'Contains Tree Nuts': 'FALSE',
                        'Sustainability': 'FALSE',
                        'Vegan': 'FALSE',
                        'Vegetarian': 'FALSE',
                        'Wellness': 'FALSE',
                    },
                    {
                        Name: 'Egg Salad',
                        Price: '$4.99',
                        'Contains Dairy': 'FALSE',
                        'Contains Eggs': 'TRUE',
                        'Contains Fish': 'FALSE',
                        'Contains Gluten': 'FALSE',
                        'Contains Peanuts': 'FALSE',
                        'Contains Sesame': 'FALSE',
                        'Contains Shell Fish': 'FALSE',
                        'Contains Soy': 'FALSE',
                        'Contains Tree Nuts': 'FALSE',
                        'Sustainability': 'FALSE',
                        'Vegan': 'FALSE',
                        'Vegetarian': 'TRUE',
                        'Wellness': 'FALSE',
                    },
                ],
            },
        ];
        setRestaurants(test_data);

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
        function compareSort(a, b, property, asc) {
            // generic sorting logic
            return sortAsc ? a[sortParam] - b[sortParam] : b[sortParam] - a[sortParam];
        }

        var newRestaurantList = structuredClone(restaurants);
        console.log('clone, ', newRestaurantList);

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
            newRestaurantList.forEach((restaurant) => {
                // filter "menu" foods
                // var this_menu = restaurant.foods
                for (let j = 0; j < filterParams.length; j++) {
                    console.log("food: ", restaurant["foods"]);
                    const filter_tuple = filterMap.get(filterParams[j]);
                    // this_menu.filter(food => food[filter_tuple[0]] == filter_tuple[1])
                    restaurant.foods.filter(food => food[filter_tuple[0]] == filter_tuple[1])
                }
                // restaurant.foods = this_menu;
            })
                
        }

        // sort, if specified
        if (sortParam != "") {
            newRestaurantList.forEach((restaurant) => {
                restaurant.foods.sort(compareSort);
            })
        }

        setSearchRes(newRestaurantList);
    }

    function filterHandler(filter_params, sort_params) {    
        // Update filters and sorting
        setFilterParams(filter_params);
        setSortParam(sort_params[0]);
        if (sort_params[0] != "") {
            setSortAsc(sort_params[1] == "asc");
        }

        return searchHandler("");       
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
