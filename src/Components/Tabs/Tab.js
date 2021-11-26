/* eslint-disable no-fallthrough */
import React, { useState } from "react";
import './Style.css'
import { CSSTransitionGroup } from 'react-transition-group';

function Tab(props) {
  const { titles } = props;
  const [selectedTab, setSelectedTab] = useState(0);


  const handleChange = (index) => {
    setSelectedTab(index);
  }

  return (
    <div className="container">
      <div className={`planet ${titles[selectedTab]}`} ></div>
      <ul className="tabs">
        {titles.map((data, index) => {
          let style = index === selectedTab ? "selected" : "";
          return (
            <li key={index}
              onClick={() => handleChange(index)}
              className={style}
            >
              {data}
            </li>
          );
        })}
      </ul>
      <CSSTransitionGroup
        transitionName="slide"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <div>

          {props.children[selectedTab]}
        </div>
      </CSSTransitionGroup>
    </div>
  );
}

export default Tab;
