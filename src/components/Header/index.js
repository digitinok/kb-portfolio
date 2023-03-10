import React from "react";
import Navbar from "../Navbar";
import "./style.css";

function Header() {
  return (
    <header className="header .bg-info-subtle">
      <h1>KB Portfolio</h1>
      <Navbar/>
    </header>
  );
}

export default Header;
