import RestaurantList from './restaurantlist'
import Map from './map'
import Profile from './profile'
import Navbar from "./navbar";

import { useLocation } from 'react-router-dom';

export default function Home() {
    //page state (for navigation)
    const { state } = useLocation();
    var page = 0;
    if (state) {
        page = state.page;
    }

    return (
        <div className="main">
            { (page === 0) && <RestaurantList/> }
            { (page === 1) && <Map/> }
            { (page === 2) && <Profile/> }
            <Navbar activePage={page}/>
        </div>
    );
}
