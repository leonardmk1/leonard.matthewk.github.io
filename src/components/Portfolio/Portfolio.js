import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div>
      <div className="project-container">
        <div className="project project-1">
          <a
            className="project-text"
            target="blank"
            href="http://moviestream1.herokuapp.com/"
          >
            Movie Stream
          </a>
          <div className="project-img project-img-1"></div>
          <small className="project-bio">
            Find Movies on Streaming Channels
          </small>
        </div>
        <div className="project project-2">
          <a
            className="project-text"
            target="blank"
            href="https://reeledin.herokuapp.com/members"
          >
            ReeledIn
          </a>
          <div className="project-img project-img-2"></div>
          <small className="project-bio">An app for fisherfolk</small>
        </div>
        <div className="project project-3">
          <a
            className="project-text"
            target="blank"
            href="https://leonardmk1.github.io/React-Employee-Directory-The-Office/"
          >
            The Office Employee Directory
          </a>
          <div className="project-img project-img-3"></div>
          <small className="project-bio">
            Search and Sort Employee Directory
          </small>
        </div>
        <div className="project project-4">
          <a
            className="project-text"
            target="blank"
            href="https://leonardmk1-express-handlebars.herokuapp.com/"
          >
            Burger App
          </a>
          <div className="project-img project-img-4"></div>
          <small className="project-bio">Node Express Handlebars</small>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
