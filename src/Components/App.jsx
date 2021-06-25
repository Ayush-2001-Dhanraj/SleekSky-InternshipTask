import React, {useState} from "react";
import SideBar from "./SideBar"; //contains logo and sidebar
import MainContent from "./MainContent" //containes header content and footer section

function App() {
  function reload() {
    window.location.reload()
  }

  setInterval(reload, 300000); //reload app in 5 mins

  const time = new Date().toLocaleTimeString([], {hour12: false});

  const [currentTime, setCurrentTime] = useState(time);
  const [count, setCount] = useState(0);
  const [log, setLog] = useState([]);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString([], {hour12: false});
    setCurrentTime(newTime);
  }

  function handleClick() {
    updateCount();
    logTime();
  }

  function updateCount() {
    setCount(count + 1);
  }

  function logTime() {
    let newLog = "You clicked at: " + currentTime;
    setLog((preValue) => {
      return [
        ...preValue,
        newLog
      ]
    })
  }

  return (<div className="app"><SideBar handleClick={handleClick}/><MainContent updateTime={updateTime} time={time} count={count} log={log}/></div>);
}

export default App;
