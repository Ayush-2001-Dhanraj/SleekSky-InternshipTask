import React from "react";
import Logo from "./Logo";

function SideBar(props) {
  return (<div className="sideBar">
    <Logo/>
    <div className="side">
      <button onClick={props.handleClick}>Click Here</button>
    </div>
  </div>);
}

export default SideBar;
