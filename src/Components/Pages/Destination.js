import React, { useState, useEffect } from "react";
import Tab from "../Tabs/Tab";
import Navbar from './../Navigation/Navbar';
import Panel from './../Tabs/Panel';

function Destination() {
  const [tabData, setTabData] = useState([
    { name: "Amir Reza", phonenumber: "09125202507", city: "Tehran" },
    { name: "Amir", phonenumber: "09125202507", city: "Dusseldorf" },
    { name: "Amir Reza", phonenumber: "09125202507", city: "Tehran" },
    { name: "Amir Reza", phonenumber: "09125202507", city: "Tehran" },
    { name: "Amir Reza", phonenumber: "09125202507", city: "Tehran" },
    { name: "Amir Reza", phonenumber: "09125202507", city: "Tehran" },
    { name: "Amir Reza", phonenumber: "09125202507", city: "Tehran" },
  ]);

  const tabTitles = ['moon', 'mars', 'europa', 'titan'];


  return (
    <div className="destination">
      <Navbar />
      <h4><span>01</span> PICK YOUR DESTINATION</h4>
      <Tab titles={tabTitles}>
        <Panel>
          <h1>MOON</h1>
          <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed.
            While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        </Panel>
      </Tab>
    </div>
  );
}

export default Destination;
