import React, { Component } from "react";
import Fade from "react-reveal";
import { Card, Button } from "react-bootstrap";


let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;


      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
          <a href={projects.url}>
          <img alt={projects.title} src={projectImage} />
                </a> 
            <div style={{ textAlign: "center" }}>{projects.title}</div>
         </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade bottom duration={800}>
        <h2> My Work</h2>
        </Fade>
        <Fade bottom duration={1000}>
          <div class="row">
            <div class="column">
            <a href="https://sprout-of-this-world.herokuapp.com/"> 
              <img alt="Sprouts of this World" src="/images/portfolio/sprouts-of-this-world.jpg"></img>
             <h1> Sprouts of this World</h1>
             </a>
            </div>
            <div class="column">
            <a href="https://jonathan-jablonski.github.io/got-munchies/">
              <img alt="Got Munchies" src="/images/portfolio/got-munchies.jpg"></img>
              <h1> Got Munchies</h1>
             </a>
            </div>
            <div class="column">
            <a href="https://aydanegash.github.io/password-generator/">
              <img alt="Password Generator" src="/images/portfolio/password-generator.jpg"></img>
              <h1> Password Generator</h1>
             </a>
            </div>
            <div class="column">
            <a href="https://aydanegash.github.io/quiz-quiz/">
              <img alt="Coding Quiz" src="/images/portfolio/coding-quiz.jpg"></img>
              <h1> Coding Quiz</h1>
             </a>
            </div>
            <div class="column">
            <a href="https://nameless-brook-20588.herokuapp.com/">
              <img alt="Note Taker" src="/images/portfolio/note-taker.jpg"></img>
              <h1> Note Taker</h1>
             </a>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
