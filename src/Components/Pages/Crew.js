import React from "react";
import Navbar from "../Navigation/Navbar";
import Panel from "../Tabs/Panel";
import Tab from "../Tabs/Tab";
import Viktor from "../../assets/crew/image-victor-glover.png";
import Mark from "../../assets/crew/image-mark-shuttleworth.png";
import Douglas from "../../assets/crew/image-douglas-hurley.png";
import Anousheh from "../../assets/crew/image-anousheh-ansari.png";

function Crew() {
  const tabTitles = [1, 2, 3, 4];
  const crewImages = [Viktor, Mark, Douglas, Anousheh];
  return (
    <div className="crew">
      <Navbar />
      <h4>
        <span>02</span> MIT YOUR CREW
      </h4>
      <Tab
        titles={tabTitles}
        imageSources={crewImages}
        imageType="crew-image"
        tabsToggleType="disk"
      >
        <Panel>
          <div>HIIIIII</div>
        </Panel>
        <Panel>
          <div>HIIIIII</div>
        </Panel>
      </Tab>
    </div>
  );
}

export default Crew;
