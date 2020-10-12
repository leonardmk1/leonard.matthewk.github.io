import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div>
          <h2 className="home-title">
            <span className="home-hello">Hello,</span> I'm a Full Stack
            Developer
          </h2>
          <small>Currently looking for a job in web development</small>
          <div>
            <Link to="/porfolio">
              <button className="home-button">View Projects</button>
            </Link>
            <Link to="/contact">
              <button className="home-button">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
