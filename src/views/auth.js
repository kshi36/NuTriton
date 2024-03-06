import Login from './login'
import Signup from './signup'

import { useState } from 'react';

export default function Auth() {

    //toggle between login and signup pages
    const [activePage, setActivePage] = useState(true);

    function togglePage() {
        setActivePage(!activePage);
    }

    return (
        <div className="main">
            <div className="ui secondary pointing two item menu">
                <a className={activePage ? "item active" : "item"} onClick={togglePage}>Login</a>
                <a className={!activePage ? "item active" : "item"} onClick={togglePage}>Register</a>
            </div>
            {activePage ? <Login/> : <Signup/>}
        </div>
    );
}
