import React from "react";

import './App.css';

import Canvas from "./components/Canvas";
import Description from "./components/Description";


function App() {
  return (
    <div className="App">
      <Description />
      <Canvas />
    </div>
  );
}

export default App;
