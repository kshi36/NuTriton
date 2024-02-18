import { MdOutlineFoodBank } from "react-icons/md";

import { Link } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
    //TODO: add fields according to DB

    // const { id, name, foods, hours, wait_time, location } = restaurant;

    const name = restaurant;

    return (
        <div className="item">
            <MdOutlineFoodBank />
            <div className="content">
                {name}
            </div>
        </div>
    );
}
