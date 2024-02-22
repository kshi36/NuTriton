import { MdOutlineFoodBank } from "react-icons/md";

import { Link } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
    const { id, name, foods, hours, wait_time, location } = restaurant;

    return (
        <div className="item">
            <MdOutlineFoodBank />
            <div className="content">
                <div>{name}</div>
                <div>{"wait time: " + wait_time}</div>
            </div>
        </div>
    );
}
