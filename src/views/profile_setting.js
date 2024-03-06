// import './profile_setting.css';
// import './edit profile.css';
import {Link,Route,BrowserRouter} from "react-router-dom"
// import My_diets from "UI/My diets.png"

import left_array from "./UI/left array.png"

import Security from "./UI/Security.png"
import Edit_profile from "./UI/Edit profile.png"
import Notifications from "./UI/Notifications.png"
import Privacy from "./UI/Privacy.png"
import Help from "./UI/Help and support.png"
import Terms from "./UI/Terms and policies.png"
import Free from "./UI/Free up space.png"
import Data from "./UI/Data saver.png"
import Report from "./UI/Report a problem.png"
import Add from "./UI/Add an account.png"



function Profile_setting() {
  return (
    <div class="main">
    <div className="profile_setting">
        <div class="container">
        <Link to="/profile"><img src={left_array} /></Link>
        <p>Settings  </p>

        </div>
   
   <p >Account</p>
   <Link to="/edit">
    <div class="container2">
        <img src={Edit_profile} />
        <p>Edit profile           </p>
        </div>
        </Link>
    <div class="container2">
    <img src= {Security}/>
    <p>Security           </p>
    </div>
    <div class="container2">
        <img src={Notifications} />
        <p>Notifications           </p>
        </div>
    <div class="container2">
            <img src={Privacy} />
            <p>Privacy           </p>
            </div>
    

   <p>Support & About</p>
   <div class="container2">
    <img src={Help} />
    <p>Help and Support </p>
    </div>
    <div class="container2">
        <img src={Terms} />
        <p>Terms and Policies </p>
        </div>

   <p>Cache & celluar</p>
   <div class="container2">
    <img src={Free}/>
    <p>Free up space           </p>
    </div>
    <div class="container2">
        <img src={Data}/>
        <p>Data Saver           </p>
        </div>

   <p>Actions</p>
   <div class="container2">
    <img src= {Report}/>
    <p>Repoet a problem           </p>
    </div>
    <div class="container2">
        <img src={Add} />
        <p>Add account           </p>
        </div>

        </div>
    </div>
  );
}

export default Profile_setting