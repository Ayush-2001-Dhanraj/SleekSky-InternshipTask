import React from "react";

function Content(props) {
  return (<div className="content">
    {
      props.log.map((item, index) => {
        return (<h3 key={index}>{item}</h3>)
      })
    }
  </div>)
}

export default Content;
