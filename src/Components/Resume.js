import React, { Component } from "react";
import Slide from "react-reveal";
import { Row, Col } from "react-bootstrap";

class Resume extends Component {

  render() {
    if (!this.props.data) return null;

    const languages = this.props.data.languages.map((languages) => {

      return (
        <li key={languages.name}>
          <em>{languages.name}</em>
        </li>
      );
    });


    return (
      <section id="resume">
        <Slide left duration={200}>
        {/* <div class="skills-row"> */}
        <div class="row">
          <div class="column">
          <h1>SKILLS:</h1>
          </div>
        <div class="column">
          LANGUAGES:
          <ul>
            <li>React.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Jquery</li>
            <li>Materialize</li>
            <li>Bootsrap</li>
          </ul>
        </div>
        <div class="column">
          DATABASES:
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div class="column">
          SERVER SIDE:
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MVC</li>
            <li>ORM</li>
            <li>Sessions</li>
          </ul>
        </div>
        <div class="column">
          DEV TOOLS:
          <ul>
            <li>Heroku</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
      {/* </div> */}
        </Slide>
      </section>
    );
  }
}

export default Resume;
