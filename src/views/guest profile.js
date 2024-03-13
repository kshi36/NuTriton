
import {Link} from "react-router-dom"
import gonc from "./UI/Guest or no connection.png"

function Guest() {
    return (
      <div className="main">
        <div className="guest_page">
          <div className="container1">
          <img   src={gonc} alt="guest" style={{height:300, width:300,marginLeft:200}}/>
          <br></br> <h1>Sorry, no profile for a Guest account.</h1>
          <br></br><Link to= "/"><button className="styled-button">Login \ Sign-up </button></Link>

          </div>

    
  
 
  </div>
      </div>
    );
  }
  
  export default Guest;