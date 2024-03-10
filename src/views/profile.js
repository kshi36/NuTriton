import Settings from "./UI/Settings.png"
import right_arrow from "./UI/right arrow.png"
import My_diets from "./UI/My diets.png"

import Billing from "./UI/Billing.png"
import Faq from "./UI/Faq.png"
import {getAuth, deleteUser} from "firebase/auth"
import gonc from "./UI/Guest or no connection.png"
import profile_setting from "./profile_setting"
import {  Route, Link } from 'react-router-dom'

export default function Profile() {
    //link redirection functionality
    const auth = getAuth();
    const user = auth.currentUser;

    function onLogout(){
        auth.signOut().then(() => {
            console.log("User signed out")
        }).catch((error) => {
            console.log(error.message)
        })
    }

    function onDelete(){
        deleteUser(auth.currentUser).then(() => {
            console.log("User deleted")
        }).catch((error) => {
            console.log(error.message)
        })
    }

    if (user){
    return (
        <div className = "main">
       
        <p>My Profile</p>
        
        <section id="greetings">
            <h1>Greetings</h1>

        </section>
                <Link to="/profile_setting">
                <div className="container"><div className="container1">
                    <img src={Settings}  />
                    <p>Settings           </p>
                    <img src={right_arrow}  />
                </div> </div>
                </Link>
                
   
    <div className="container"><div className="container1">
        <img src={My_diets} alt="description of image"/>
        <p>My diets           </p>
        <img src={right_arrow} alt="description of image" />
        </div></div>
    <div className="container"><div className="container1">
            <img src= {Billing}/>
            <p>Billing           </p>
            <img src={right_arrow}  />
            </div></div>
    <div className="container"><div className="container1">
                <img src={Faq} />
                <p>Faq           </p>
                <img src={right_arrow}  />
                </div> </div> 

    <Link to={"/auth"}><button className="ui button green" type="submit" onClick={onLogout}>Logout</button></Link>
    <Link to={"/auth"}><button className="ui right floated button" onClick={onDelete}>Delete Account</button></Link>
    </div>
    );}
    else{
        return(
            <div className="main">
        <div className="guest_page">
        <div className="container"><div className="container1">
          <img   src={gonc} alt="guest" style={{height:300, width:360}}/>
          </div></div>
          <div className="container"><br></br> <h1 className="info_header">Sorry, no profile for a Guest account.</h1></div>
    
          <div className="container"><br></br><Link to= "/auth"><button className="styled-button">Login \ Sign-up </button></Link></div>

 
  </div>
      </div>
        )
    }
}
