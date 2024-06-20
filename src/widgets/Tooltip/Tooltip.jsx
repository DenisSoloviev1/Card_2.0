import React, { useState } from "react";
import "./Tooltip.scss";
import { NavLink } from "react-router-dom";

export default function Tooltip({ text, children, to }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="tooltip">
          <NavLink to={to}>{text}</NavLink>
        </div>
      )}
    </div>
  );
}
