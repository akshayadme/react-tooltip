import React, { useState } from "react";

const TooltipComponent = ({ children, title, placement }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* passing children component */}
      {children}

      {/* showing tooltip on hover */}
      {active && (
        <div className={`tooltip ${placement || "bottom"}`}>{title}</div>
      )}
    </div>
  );
};

export default TooltipComponent;
