import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Mynavbar from "./components/Mynavbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Mynavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
