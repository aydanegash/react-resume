import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const github = this.props.data.github;
    const resumeDownload = this.props.data.resume;

     return (

      <section id="contact">
          <Fade bottom duration={1000}>
            <Slide right duration={1000}>
              <aside>
                <div className="row">
                  <div className="columns contact-details">
                      <h2>Contact Details</h2>
                        <p className="address">
                          <span>{name}</span>
                          <br/>
                          <span>{phone}</span>
                          <br/>
                          <span>{email}</span>
                        </p>
                  </div>
                  <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
                </div>
              </aside>
            </Slide>
          </Fade>
        </section>

    );
  }
}

export default Contact;
