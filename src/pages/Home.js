import logo from "./../logo.svg";
import React from "react";
const Home = () => {
  return (
    <div className="Body">
      <p>
        <img src={logo} alt="logo" />
        Welcome to my first react website!
      </p>
    </div>
  );
};
export default Home;
