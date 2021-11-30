import React from "react";
import "./Style.css";

function Panel(props) {
  return <div className="destination-panel">{props.children}</div>;
}

export default Panel;
