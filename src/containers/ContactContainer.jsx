import React, { Component, Fragment } from 'react';
import ContactFrom from '../components/Contact/ContactForm';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

import '../stylesheets/Contact/ContactContainer.scss';

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <section className="contact-section-container">
          <div className="contact-content">
            <ContactFrom />
            <div className="contact-content" style={{ position: 'relative', height: '600px' }}>
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
              <iframe
                title="map"
                src="https://snazzymaps.com/embed/497"
              />
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default ContactContainer;
