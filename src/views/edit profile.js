// import './edit profile.css';

import left_array from "./UI/left array.png"
import {Link} from 'react-router-dom'
function Edit() {
    return (
      <div className="main">
          <div className="container1">
        <Link to="/profile_setting" style={{marginLeft:260}}><img src={left_array} /></Link>
        <p >Edit profile           </p>

        </div>
        <br></br>
        
        <div className="container">
    <p>Name</p>
    <input type="text" placeholder="Type here"/></div>
    <div className="container">
    <br></br><p>Email</p>
    <input type="text" placeholder="Type here"/></div>
    <div className="container"><br></br><p>Password</p>
    <input type="text" placeholder="Type here"/></div>
    <h1></h1>
  <div className="container"><button className="styled-button">Save Changes</button></div>

 

      </div>
    );
  }
  
  export default Edit;