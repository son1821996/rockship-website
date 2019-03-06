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
              <div style={{ width: '100%' }}>
                <iframe title="map" width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=64%2F1%20vo%20oanh%20+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                  <a href="https://www.maps.ie/map-my-route/">
                    Draw map route
                  </a>
                </iframe>
              </div>
              <br />
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default ContactContainer;
