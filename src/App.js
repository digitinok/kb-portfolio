import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
      
      <Router>
      <div>
        <Header />
        <Navbar />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/kb-portfolio" element={<Home />} />
          <Route path="/kb-portfolio/projects" element={<Projects />} />
          <Route path="/kb-portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
