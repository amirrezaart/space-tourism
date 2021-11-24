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
        {/* <Panel>
          <div>Hello</div>
        </Panel> */}
      </Tab>
    </div>
  );
}

export default Destination;
