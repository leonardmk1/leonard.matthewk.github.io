import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div>
      <div className="project-container">
        <a
          className="project-text project project-1"
          target="blank"
          href="http://moviestream1.herokuapp.com/"
        >
          Movie Stream
          <div className="project-img project-img-1"></div>
          <p className="project-bio">Find Movies on Streaming Channels</p>
        </a>
        <a
          className="project-text project project-2"
          target="blank"
          href="https://reeledin.herokuapp.com/members"
        >
          ReeledIn
          <div className="project-img project-img-2"></div>
          <p className="project-bio">An app for fisherfolk</p>
        </a>

        <a
          className="project-text project project-3"
          target="blank"
          href="https://leonardmk1.github.io/React-Employee-Directory-The-Office/"
        >
          The Office Employee Directory
          <div className="project-img project-img-3"></div>
          <p className="project-bio">Search and Sort Employee Directory</p>
        </a>

        <a
          className="project-text project project-4"
          target="blank"
          href="https://leonardmk1-express-handlebars.herokuapp.com/"
        >
          Burger App
          <div className="project-img project-img-4"></div>
          <p className="project-bio">Node Express Handlebars</p>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
