import React, { useLayoutEffect, useState } from "react";

import './App.css';

import Canvas from "./components/Canvas";
import Description from "./components/Description";
import Mobileinfo from "./components/Mobileinfo";


function App() {
  const [mobile, setMobile] = useState(true);
  
  useLayoutEffect(() => {
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [])


  return (
    <div className="App">

      {mobile === false ? (
          <>
            <Description />
            <Canvas />
          </>
        ) : (
          <>
            <Mobileinfo />
          </>
      )}
    </div>
  );
}

export default App;
