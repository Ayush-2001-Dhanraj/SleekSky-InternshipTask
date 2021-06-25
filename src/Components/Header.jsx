import React from "react";

function Header(props) {

  return (<div className="header">
    <h1>Current Time is: {props.time}</h1>
  </div>)
}

export default Header;
