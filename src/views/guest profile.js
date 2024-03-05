import './guest profile.css';
import Home from "./UI/home 2.png"
import Map from "./UI/MAPS  2.png"
import PROFILE from "./UI/PROFILE 2.png"
import Guest from "./UI/Guest or no connection.png"
function Profile_setting() {
    return (
      <div className="profile_setting">
          <img class="styled_img" src={Guest} />
    
    <p>Sorry, no profile for a Guest account.</p>
    
  <button class="styled-button">Login \ Sign-up </button>
  <div class="bottom">
   <a href=""><img src= {Home}/></a>
    <a href="maps.js"><img src={Map} /></a>
    <a href="Profile.js"><img src={PROFILE} /></a>
    </div>

      </div>
    );
  }
  
  export default Profile_setting;