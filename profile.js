import './Profile.css';
import Settings from "./UI/Settings.png"
import right_arrow from "./UI/right arrow.png"
import My_diets from "./UI/My diets.png"

import Billing from "./UI/Billing.png"
import Faq from "./UI/Faq.png"
import Home from "./UI/home 2.png"
import Map from "./UI/MAPS  2.png"
import PROFILE from "./UI/PROFILE 2.png"

import profile_setting from "./profile setting"
import {  Route, Link } from 'react-router-dom';

const profile1 = () => {
    
    <div className="profile">
        <p>My Profile</p>
        
        <section id="greetings">
            <h1>Greetings</h1>
        </section>
                <Link to = "\profile_settings">
                <div class="container">
                    <img src={Settings}  />
                    <p>Settings           </p>
                    <img src={right_arrow}  />
                </div>
                </Link>
   
    <div class="container">
        <img src={My_diets} />
        <p>My diets           </p>
        <img src={right_arrow}  />
        </div>
    <div class="container">
            <img src= {Billing}/>
            <p>Billing           </p>
            <img src={right_arrow}  />
            </div>
    <div class="container">
                <img src={Faq} />
                <p>Faq           </p>
                <img src={right_arrow}  />
                </div>
   
   <div class="bottom">
   

    <Link to="/home"><img src= {Home}/></Link>
    <Link to="/map"><img src={Map} /></Link>
    <Link to="/profile"><img src={PROFILE} /></Link>
    </div>
   
    </div>
  
}

export default profile1

