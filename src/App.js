import "./App.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Mynavbar from "./components/Mynavbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <HashRouter>
      <Mynavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
