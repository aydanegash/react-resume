import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const phone = this.props.data.phone;
    const email = this.props.data.email;

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
                </div>
              </aside>
            </Slide>
          </Fade>
        </section>

    );
  }
}

export default Contact;
