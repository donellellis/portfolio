import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="colorBlock1">
          <div className="home-text-area">
            <h1 className="home-title">
              Amuse-
              <br />
              bouche.
            </h1>
            <h2 className="home-subtitle">
              I’m Donell, a front-end engineer and art + design enthusiast
              building digital products.
            </h2>
            <div className="home-cta">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/donell-ellis/"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/donellellis"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="colorBlock2">
          <div className="home-about-me">
            <p className="home-about-me-emphasized">
              I believe that good design and user experience, whether in the
              built environment or digital realm improves the lives of people
              and inspires community and connection.
            </p>
            <p>
              As a front-end engineer I enjoy analyzing and solving complex
              technical problems and approach building user interfaces with an
              attention to detail. I value design, creativity, and learning and
              am happiest when having engaging conversations about code or
              building polished designs. I have a background in architecture,
              where I delivered projects from conceptual design through to
              construction and was a leader in design technology and
              point-person for virtual reality content creation and strategy.
              When not coding you can find me biking around the city, strolling
              though an art museum, sewing, or listening to New Orleans jazz.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
