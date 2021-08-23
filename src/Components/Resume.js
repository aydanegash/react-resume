import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {

  render() {
    if (!this.props.data) return null;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });


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
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>



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
