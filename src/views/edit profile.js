import './edit profile.css';
import Home from "./UI/home 2.png"
import Map from "./UI/MAPS  2.png"
import PROFILE from "./UI/PROFILE 2.png"
import left_array from "./UI/left array.png"
function Profile_setting() {
    return (
      <div className="profile_setting">
          <div class="container">
        <a href="profile_setting.html"><img src={left_array} /></a>
        <p>Edit profile           </p>

        </div>
    <p>Name</p>
    <input type="text" placeholder="Type here"/>
    <p>Email</p>
    <input type="text" placeholder="Type here"/>
    <p>Password</p>
    <input type="text" placeholder="Type here"/>
    <h1></h1>
  <button class="styled-button">Save Changes</button>

  <div class="bottom">
   <a href=""><img src= {Home}/></a>
    <a href="maps.js"><img src={Map} /></a>
    <a href="Profile.js"><img src={PROFILE} /></a>
    </div>

      </div>
    );
  }
  
  export default Profile_setting;