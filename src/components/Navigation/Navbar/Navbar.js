import React from "react";
import "./Navbar.css";
import "../SideDrawer/DrawerToggleButton";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const navbar = (props) => (
  <header className="navbar">
    <nav className="navbar__navigation">
      <div className="navbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navbar__logo">
        <a href="/">Matthew Leonard</a>
      </div>
      <div className="spacer" />
      <div className="navbar_navigation-items">
        <ul>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
