import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Mynavbar from "./components/Mynavbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Mynavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
