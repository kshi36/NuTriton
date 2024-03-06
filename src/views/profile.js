
import Settings from "./UI/Settings.png"
import right_arrow from "./UI/right arrow.png"
import My_diets from "./UI/My diets.png"

import Billing from "./UI/Billing.png"
import Faq from "./UI/Faq.png"
import {getAuth} from "firebase/auth"
import gonc from "./UI/Guest or no connection.png"
import profile_setting from "./profile_setting"
import {  Route, Link } from 'react-router-dom'



export default function     Profile() {
    //link redirection functionality
    const auth = getAuth();
    const user = auth.currentUser;


    if (user){
    return (
        <div class = "main">
       
        <p>My Profile</p>
        
        <section id="greetings">
            <h1>Greetings</h1>
        </section>
                <Link to="/profile_setting">
                <div class="container">
                    <img src={Settings}  />
                    <p>Settings           </p>
                    <img src={right_arrow}  />
                </div>
                </Link>
                
   
    <div class="container">
        <img src={My_diets} alt="description of image"/>
        <p>My diets           </p>
        <img src={right_arrow} alt="description of image" />
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
    </div>
    );}
    else{
        return(
            <div className="main">
        <div className="guest_page">
          <div className="container1">
          <img   src={gonc} alt="guest" style={{height:300, width:360,marginLeft:240}}/>
          </div>
   <br></br> <h1>Sorry, no profile for a Guest account.</h1>
    
  <br></br><Link to= "/auth"><button class="styled-button">Login \ Sign-up </button></Link>

 
  </div>
      </div>
        )
    }
}


