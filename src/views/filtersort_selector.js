import {useEffect, useState} from "react";
import {useContextProvider} from "../controllers/restaurantcontext";
import {IoArrowDown, IoArrowUp, IoFilter} from "react-icons/io5";

export default function FilterSortSelector() {

    const [filterParams, setFilterParams] = useState([]);
    const { restaurants, getRestaurants, searchTerm, setSearchTerm, searchRes, searchHandler, filterHandler } = useContextProvider();

    function ToggleButton({id, text}) {
        // button toggle functionality (highlight/activate), for filters
        const [isActive, setActive] = useState(false);
        // TODO: persistent state for filters
        // if (filterParams.includes(id)) {
        //     setActive(true);
        // }
        const handleClick = () => {
            setActive(!isActive);
        };
        const buttonClass = isActive ? 'active' : '';

        return (
            <button className={`ui toggle button filter_btn ${buttonClass}`} value={id} onClick={handleClick}>
                {text}
            </button>
        );
    }

    function ToggleSortButton({id, active, text, onToggle}) {
        // button toggle functionality for grouped sort buttons
        const handleGroupClick = () => {
            onToggle(id);
        };

        const buttonClass = active ? 'active' : '';

        return (
            <button className={`ui toggle button sort_btn ${buttonClass} ${id === "Calories" ? "disabled" : ""}`} value={id} onClick={handleGroupClick}>
                {text}
            </button>
        );
    }

    function SortGroup() {
        // grouped sort buttons, single toggle
        const [selectedSort, setSelectedSort] = useState(null);
        const handleSortToggle = (buttonId) => {
            setSelectedSort(buttonId === selectedSort ? null : buttonId)
        };

        return (
            <div className="ui vertical buttons sort_btns">
                <ToggleSortButton id={"Price"} active={selectedSort === "Price"} text={"Price"} onToggle={handleSortToggle} />
                <ToggleSortButton id={"Calories"} active={selectedSort === "Calories"} text={"Calories"} onToggle={handleSortToggle} />
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
    }

    function UpdateSelectors() {
        function UpdateFilter() {
            // update filters
            const active_filter_buttons = document.getElementsByClassName("active toggle button filter_btn")

            var active_filters = []
            for (let btn of active_filter_buttons) {
                active_filters.push(btn.getAttribute("value"))
            }

            setFilterParams(active_filters);
            return active_filters;
        }

        function UpdateSort() {
            // update sort (if selected) with sort direction
            const active_sort_buttons = document.getElementsByClassName("active toggle button sort_btn")

            if (active_sort_buttons.length > 0) {
                const selectedSortVal = active_sort_buttons[0].getAttribute("value");
                const selectedSortDir = document.getElementById("sort_dir_btn").getAttribute("value");
                // setSelectedSort(selectedSortVal);
                return [selectedSortVal, selectedSortDir];
            }
            else {
                return [null, null];
            }
        }

        //reset searchbar
        setSearchTerm("");

        // update filters state
        const active_filters = UpdateFilter();
        const active_sort = UpdateSort();
        filterHandler(active_filters, active_sort);

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

            <div className={`ui fixed sticky modal ${show ? 'visible active' : ''}`}>
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
                        <h2 className="selector_heading">Allergens:</h2>
                        <ToggleButton id={"dairy"} text={"Dairy-Free"} />
                        <ToggleButton id={"gluten"} text={"Gluten-Free"} />
                        <ToggleButton id={"peanuts"} text={"No Peanuts"} />
                        <ToggleButton id={"sesame"} text={"No Sesame"} />
                        <ToggleButton id={"shell_fish"} text={"No Shell Fish"} />
                        <ToggleButton id={"soy"} text={"No Soy"} />
                        <ToggleButton id={"eggs"} text={"No Eggs"} />
                        <ToggleButton id={"fish"} text={"No Fish"} />
                        <ToggleButton id={"tree_nuts"} text={"No Tree Nuts"} />
                        <ToggleButton id={"wheat"} text={"No Wheat"} />
                    </div>
                    <div className="selector_section">
                        <h2 className="selector_heading">Sort by:</h2>
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