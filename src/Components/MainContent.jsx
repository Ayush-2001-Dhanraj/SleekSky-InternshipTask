import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function MainContent(props) {

  setInterval(props.updateTime, 1000);

  return (<div className="MainContent">
    <Header time={props.time}/>
    <Content log={props.log}/>
    <Footer count={props.count}/>
  </div>)
}

export default MainContent;
