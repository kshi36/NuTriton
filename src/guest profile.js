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
    
  <Link to= "/login"><button class="styled-button">Login \ Sign-up </button></Link>

  <div class="bottom">
    <Link to="/home"><img src= {Home}/></Link>
    <Link to="/map"><img src={Map} /></Link>
    <Link to="/profile"><img src={PROFILE} /></Link>
    </div>

      </div>
    );
  }
  
  export default Profile_setting;