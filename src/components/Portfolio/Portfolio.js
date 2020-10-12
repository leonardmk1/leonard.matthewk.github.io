import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div>
      <div className="project-container">
        <div className="project project-1">
          <a className="project-text" href="/">
            Text here
          </a>
          <div className="project-img project-img-1"></div>
        </div>
        <div className="project project-2">
          <a className="project-text" href="/">
            Text here
          </a>
          <div className="project-img project-img-2"></div>
        </div>
        <div className="project project-3">
          <a className="project-text" href="/">
            Text here
          </a>
          <div className="project-img project-img-3"></div>
        </div>
        <div className="project project-4">
          <a className="project-text" href="/">
            Text here
          </a>
          <div className="project-img project-img-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
