import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Mynavbar from "./components/Mynavbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Mynavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
