import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;
    const linkedin = this.props.data.linkedin;
    const github = this.props.data.github;
    const resume = this.props.data.resume;
    const name = this.props.data.name;
    const phone = this.props.data.phone;
    const email = this.props.data.email;

    return (
      <footer>
      <div className="row">
        <section id="contact">
          <Fade bottom duration={1000}>
            <Slide left duration={1000}>
              <aside>
                <div className="row">
                  <div className="twelve columns contact-details">
                      <h2>Contact Details</h2>
                        <p className="address">
                          <span>{name}</span>
                          <br/>
                          <span>{phone}</span>
                          <br/>
                          <span>{email}</span>
                        </p>
                  </div>
                </div>
            <Slide left duration={1300}>
            <div className="twelve columns">
            <ul className="circle-btn">
                <a href={linkedin} className="button-btn">
                  <i className="fa fa-book"></i>
                </a> &nbsp; &nbsp; &nbsp; &nbsp;
                <a href={github} className="button-btn">
                  <i className="fa fa-github"></i>
                </a> &nbsp; &nbsp; &nbsp; &nbsp;
                <a href={resume} className="button-btn">
                      <i className="fa fa-download"></i>
                    </a>
              </ul> 
            </div>
            </Slide>
              </aside>
            </Slide>
          </Fade>
        </section>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
