import React from "react";

import logo from "../logo.svg";

function Home() {
  // useEffect(() => {
  //   console.log("running api call");
  //   fetch("http://localhost:8000/todo/1")
  //     .then((resp) => resp.json())
  //     .then((resp1) => console.log(resp1["Data"]));
  // });

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
