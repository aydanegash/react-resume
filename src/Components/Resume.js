import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {

  render() {
    if (!this.props.data) return null;

    const skills = this.props.data.skills.map((skills) => {

      return (
        <li key={skills.name}>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Technologies</span></h1>
            </div>
            <div className="nine columns main-col">
            <ul className="skills">{skills}</ul>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
