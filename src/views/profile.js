import user from '../images/user.png'

// export default function Profile() {
//     //TODO: profile info

//     return (
//         <div className="main">
//         </div>
//     );
// }

import React, { Component } from "react";
import Header from "header";

class Profile extends Component {
  componentWillMount() {
    if (
      sessionStorage.getItem("access-token") === null ||
      sessionStorage.getItem("access-token") === "null"
    ) {
      this.props.history.push({
        pathname: "/",
      });
    }
  }

  /* Logout action from Drop Down Menu on Profile Page */
  loginredirect = () => {
    sessionStorage.clear();
    this.props.history.push({
      pathname: "/",
    });
  };

  render() {
    return (
      <div>
        <Header
          logoutHandler={this.loginredirect}
          baseUrl={this.props.baseUrl}
          showSearch={false}
          history={this.props.history}
        />
        <div>Profile Page</div>
      </div>
    );
  }
}

export default Profile;
