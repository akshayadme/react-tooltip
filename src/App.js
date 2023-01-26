import React from "react";
import Tooltip from "./TooltipComponent";

function App() {
  return (
    <div className="App">
      {/* top heading */}
      <h1> React Tooltip </h1>
      <h4> Hover on button to show tooltip</h4>

      {/* button components */}
      <div className="button-component">
        {/* top tooltip */}
        <Tooltip title="Hovered Top!" placement="top">
          <button className="hover-button">Hover Me</button>
        </Tooltip>

        {/* right tooltip */}
        <Tooltip title="Hovered Right!" placement="right">
          <button className="hover-button">Hover Me</button>
        </Tooltip>

        {/* bottom tooltip */}
        <Tooltip title="Hovered Bottom!" placement="bottom">
          <button className="hover-button">Hover Me</button>
        </Tooltip>

        {/* left tooltip */}
        <Tooltip title="Hovered Left!" placement="left">
          <button className="hover-button">Hover Me</button>
        </Tooltip>

        {/* default tooltip */}
        <Tooltip title="Hovered Bottom!">
          <button className="hover-button">Hover Me</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
