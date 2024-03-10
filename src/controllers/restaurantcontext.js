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
    const [filterParams, setFilterParams] = useState([]);
    const [sortParam, setSortParam] = useState(null);
    const [sortAsc, setSortAsc] = useState(true);
        
    // const resdb_name = "restaurant_test";
    const resdb_name = "restaurants";
    const menudb_name = "menu";
    
    // retrieve restaurants list and food for each from Firestore
    async function getRestaurants() {
        // change this to false to use Firebase data
        const TESTING = true;
        if (TESTING) {
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
        }
        else {
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

    }

    //handle searching for restaurants
    //also add filters/sorting if specified
    function searchHandler(searchTerm) {
        let newRestaurantList = structuredClone(restaurants);

        // --- apply search filter
        setSearchTerm(searchTerm);
        //non-empty search term
        if (searchTerm !== "") {
            const newRestaurantList = restaurants.filter((restaurant) => {
                // console.log('restaurant',restaurant);

                return restaurant.Name
                    .toLowerCase()
                    .includes(searchTerm.toString().toLowerCase());    //includes() matches string
            });
            setSearchRes(newRestaurantList);
        }
        // else setSearchRes(restaurants);
    }

    function filterHandler(filter_params, sort_params) {    
        // Update filters and sorting

        // --- apply selector filters
        const filterMap = new Map([
            ["dairy", ["Contains Dairy", "FALSE"]],
            ["eggs", ["Contains Eggs", "FALSE"]],
            ["fish", ["Contains Fish", "FALSE"]],
            ["gluten", ["Contains Gluten", "FALSE"]],
            ["peanuts", ["Contains Peanuts", "FALSE"]],
            ["sesame", ["Contains Sesame", "FALSE"]],
            ["shell_fish", ["Contains Shell Fish", "FALSE"]],
            ["soy", ["Contains Soy", "FALSE"]],
            ["tree_nuts", ["Contains Tree Nuts", "FALSE"]],
            ["wheat", ["Contains Wheat", "FALSE"]],
            ["vegan", ["Vegan", "TRUE"]],
            ["vegetarian", ["Vegetarian", "TRUE"]],
            ["wellness", ["Wellness", "TRUE"]],
            ["sustainability", ["Sustainability", "TRUE"]],
        ])
        setFilterParams(filter_params);
        let newRestaurantList = structuredClone(restaurants);
        if (filter_params.length > 0) {
            // newRestaurantList = newRestaurantList.filter((restaurant) => {
            newRestaurantList.forEach((restaurant, i) => {
                // filter "menu" foods
                for (let j = 0; j < filter_params.length; j++) {
                    const filter_tuple = filterMap.get(filter_params[j]);
                    console.log("filter tuple: ", filter_tuple);
                    // this_menu.filter(food => food[filter_tuple[0]] == filter_tuple[1])
                    newRestaurantList[i].menu = newRestaurantList[i]["menu"].filter(food => food[filter_tuple[0]] == filter_tuple[1])
                }
                console.log("filtered: ", newRestaurantList[i].menu);
                // restaurant.menu = this_menu;
            })
            // setSearchRes(newRestaurantList);
        }

        // sort, if specified        
        function compareSort(a, b) {
            // generic sorting logic
            if (a[sort_params[0]] == null) {
                return 1;
            }
            else if (b[sort_params[0]] == null) {
                return -1;
            }
            const num_a = Number(a[sort_params[0]].replace(/[^0-9.-]+/g,""));
            const num_b = Number(b[sort_params[0]].replace(/[^0-9.-]+/g,""));
            
            return num_b - num_a;
        }

        setSortParam(sort_params[0]);
        if (sort_params[0] !== null) {
            setSortAsc(sort_params[1] === "asc");
            newRestaurantList.forEach((restaurant, i) => {
                newRestaurantList[i].menu = restaurant.menu.sort(compareSort);
                if (sort_params[1] === "desc") {
                    newRestaurantList[i].menu = newRestaurantList[i].menu.reverse();
                }
                console.log("sorted: ", newRestaurantList[i].menu)
            });
            // setSearchRes(newRestaurantList);
        }

        console.log("final: ", newRestaurantList);
        setSearchRes(newRestaurantList);
    }
    
    const value = {
        restaurants,
        getRestaurants,
        searchTerm,
        searchRes,
        setSearchTerm,
        searchHandler,
        filterHandler,
        filterParams,
        sortParam,
    }

    return <restaurantContext.Provider value={ value }>
        {children}
    </restaurantContext.Provider>
}

/** Context provider "functionality" */
export function useContextProvider() {
    return useContext(restaurantContext);
}
