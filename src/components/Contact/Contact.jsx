import React, { Component } from 'react';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import ContactFrom from './ContactForm';

import '../../stylesheets/Contact/Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="contact-section">
        <ScrollAnimation
          animateIn="zoomIn"
          animateOnce
        >
          <div className="contact-content">
            <ContactFrom />
            <div className="contact-content">
              <div
                className="dash"
                style={{
                  backgroundColor: '#ffffff', height: '4px', width: '60px', position: 'relative', right: '190px',
                }}
              />
              <div className="contact-title">
                Contact
              </div>
              <p>
              64/1K Vo Oanh Street, 25 Ward,
              Binh Thanh District, Ho Chi Minh City
              </p>
              <p>
              +84 28 3620 5144
              </p>
              <p>
              contact@rockship.co
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    );
  }
}

export default Contact;
