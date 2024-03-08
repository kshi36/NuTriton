import RestaurantCard from './restaurantcard';
import { useContextProvider } from "../controllers/restaurantcontext";

import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import { IoArrowDown, IoArrowUp, IoFilter } from "react-icons/io5";


export function FilterSortSelector() {

    const { filterHandler } = useContextProvider();

    function ToggleButton({id, text}) {
        // button toggle functionality (highlight/activate), for filters
        const [isActive, setActive] = useState(false);
        const handleClick = () => {
          setActive(!isActive);
        };
        const buttonClass = isActive ? 'active' : '';

        return (
          <button className={`ui toggle button filter_btn ${buttonClass}`} value={id} onClick={handleClick}>
            {text}
          </button>
        );
    };

    function ToggleSortButton({id, active, text, onToggle}) {
        // button toggle functionality for grouped sort buttons
        const handleGroupClick = () => {
            onToggle(id);
        };
        
        const buttonClass = active ? 'active' : '';
        
        return (
            <button className={`ui toggle button sort_btn ${buttonClass}`} value={id} onClick={handleGroupClick}>
                {text}
            </button>
        );
    };

    function SortGroup() {
        // grouped sort buttons, single toggle
        const [selectedSort, setSelectedSort] = useState(null);
        const handleSortToggle = (buttonId) => {
            setSelectedSort(buttonId === selectedSort ? null : buttonId)
        };

        return (
            <div className="ui vertical buttons sort_btns">
                <ToggleSortButton id={"price"} active={selectedSort === "price"} text={"Price"} onToggle={handleSortToggle} />
                <ToggleSortButton id={"calories"} active={selectedSort === "calories"} text={"Calories"} onToggle={handleSortToggle} />
            </div>
        )
    }

    function SortDirButton() {
        // button toggle functionality for sort direction (asc/desc)
        const [SortAsc, setSortAsc] = useState(true);
        const handleSortDir = () => {
            setSortAsc(!SortAsc);
        };

        return (          
          <button className="ui icon button gray left" id="sort_dir_btn" value={SortAsc ? "asc" : "desc"} onClick={handleSortDir}>{SortAsc ? <IoArrowUp/> : <IoArrowDown/>}</button>
        );
    };

    function UpdateSelectors() {
        function UpdateFilter() {
            // update filters
            const active_filter_buttons = document.getElementsByClassName("active toggle button filter_btn")

            var active_filters = []
            for (let btn of active_filter_buttons) {
                active_filters.push(btn.getAttribute("value"))
            }

            return active_filters;
        }

        function UpdateSort() {
            // update sort (if selected) with sort direction
            const active_sort_buttons = document.getElementsByClassName("active toggle button filter_btn")

            if (active_sort_buttons.length > 0) {
                const selectedSort = active_sort_buttons[0].getAttribute("value");
                const selectedSortDir = document.getElementById("sort_dir_btn").getAttribute("value");
                return [selectedSort, selectedSortDir];
            }
            else {
                return ["", ""];
            }
        }

        // TODO reset searchbar


        // update filters state
        const active_filters = UpdateFilter();
        const active_sort = UpdateSort();
        filterHandler(active_filters, active_sort[0], active_sort[1]);

        // close modal
        handleClose();
    }

    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (show && !document.querySelector('.ui.modal').contains(event.target)) {
            // Close the modal when clicking outside of it
            handleClose();
          }
        };
    
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [show]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <button className="ui icon button gray right" onClick={handleShow}><IoFilter/></button>

        <div className={`ui modal ${show ? 'visible active' : ''}`}>
            <i className="close icon" onClick={handleClose}></i>
            <div className="header">Filters</div>
            <div className="content">
                <div className="selector_section">
                    <ToggleButton id={"vegan"} text={"Vegan"} />
                    <ToggleButton id={"vegetarian"} text={"Vegetarian"} />
                    <ToggleButton id={"wellness"} text={"Healthy"} />
                    <ToggleButton id={"sustainability"} text={"Sustainable"} />
                </div>
                <div className="selector_section">
                    <p className="selector_heading">Allergens:</p>
                    <ToggleButton id={"dairy"} text={"Dairy-Free"} />
                    <ToggleButton id={"gluten"} text={"Gluten-Free"} />
                    <ToggleButton id={"peanuts"} text={"No Peanuts"} />
                    <ToggleButton id={"sesame"} text={"No Sesame"} />
                    <ToggleButton id={"shell_fish"} text={"No Shell Fish"} />
                    <ToggleButton id={"soy"} text={"No Soy"} />
                    <ToggleButton id={"egg"} text={"No Eggs"} />
                    <ToggleButton id={"fish"} text={"No Fish"} />
                    <ToggleButton id={"tree_nuts"} text={"No Tree Nuts"} />
                    <ToggleButton id={"wheat"} text={"No Wheat"} />
                </div>
                <div className="selector_section">
                    <p className="selector_heading">Sort by:</p>
                    <SortGroup />
                    <SortDirButton />
                </div>
                <div className="selector_section">
                    <button className="ui primary button" onClick={UpdateSelectors}>Apply</button>
                    <button className="ui button" onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default function RestaurantList() {
    const { restaurants, getRestaurants, searchTerm, searchRes, searchHandler, filterHandler } = useContextProvider();

    // TODO: load restaurants list from Firebase (DB)
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

    return (
        <div className="main">
            <div className="ui container">
                <h2>Restaurants
                    <FilterSortSelector />
                </h2>
                <div className="ui search">
                    <div className="ui icon input">
                        <input id="search_input" type="text" placeholder="Search by restaurant or entrée"
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