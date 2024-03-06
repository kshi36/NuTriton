// import './edit profile.css';

import left_array from "./UI/left array.png"
import {Link} from 'react-router-dom'
function Edit() {
    return (
      <div className="main">
          <div class="container">
        <Link to="/profile_setting"><img src={left_array} /></Link>
        <p>Edit profile           </p>

        </div>
        <br></br>
    <p>Name</p>
    <input type="text" placeholder="Type here"/>
    <br></br><p>Email</p>
    <input type="text" placeholder="Type here"/>
    <br></br><p>Password</p>
    <input type="text" placeholder="Type here"/>
    <h1></h1>
  <button class="styled-button">Save Changes</button>

 

      </div>
    );
  }
  
  export default Edit;