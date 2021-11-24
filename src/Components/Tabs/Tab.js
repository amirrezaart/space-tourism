import React, { useState } from "react";
import './Style.css'

function Tab(props) {
  const { titles } = props;
  const [selectedTab, setSelectedTab] = useState(0);
  const planets = ['moon', 'mars', 'europa', 'titan'];

  const handleChange = (index) => {
    setSelectedTab(index);
  }
  return (
    <div className="container">

      <div className={`planet ${planets[selectedTab]}`} ></div>
      <ul className="tabs">
        {titles.map((data, index) => {
          return (
            <li key={index}
              onClick={() => handleChange(index)}
            >
              {data}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tab;
