import React from "react";

import logo from "../logo.svg";

function Home() {
  return (
    <div className="Body">
      <p>
        <img src={logo} alt="logo" />
        Welcome to my first react website!
      </p>
    </div>
  );
}

export default Home;
