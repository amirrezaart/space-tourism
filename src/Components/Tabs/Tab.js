/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-fallthrough */
import React, { useState } from "react";
import "./Style.css";

function Tab(props) {
  // Props
  const { children, titles, imageSources, imageType, tabsToggleType } = props;

  // States
  const [selectedTab, setSelectedTab] = useState(0);

  // Functions
  const handleChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="container">
      <div className="image-container">
        {imageSources.map((image, index) => {
          let style = index === selectedTab ? "show" : "";
          return (
            <img key={index} src={image} className={`${imageType} ${style}`} />
          );
        })}
      </div>
      <ul className="tabs">
        {titles.map((data, index) => {
          let style = index === selectedTab ? "selected" : "";
          return (
            <li
              key={index}
              onClick={() => handleChange(index)}
              className={`${style} ${tabsToggleType}`}
            >
              {data}
            </li>
          );
        })}
      </ul>
      {children.map((item, index) => {
        let style = index === selectedTab ? "detail-show" : "";
        return (
          <div key={index} className={`detail ${style}`}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Tab;
