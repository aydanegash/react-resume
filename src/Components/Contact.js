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
              <aside className="four columns footer-widgets">
                <div className="widget widget_contact">
                  <h4>Contact Info</h4>
                  <p className="address">
                    {name} <br/>
                    {email} <br/>
                    <span>{phone}</span>
                  </p>
                </div>
              </aside>
            </Slide>
          </Fade>
        </section>

    );
  }
}

export default Contact;
