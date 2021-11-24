import React from "react";
import Navbar from './../Navigation/Navbar';

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />
      <header>
        <p class="travel">So, you want to travel to</p>
        <h1>Space</h1>
        <p class="let">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </header>
      <div class="explore">
        <div class="explore-radius">
          <h1>explore</h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
