import React, { Component } from 'react';
import ClientItems from './ClientItems';

import '../../stylesheets/Clients/Clients.scss';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="clients-section">
        <div className="clients-container">
          <div className="section-title">
            <div className="dash" style={{ backgroundColor: '#ffffff', height: '4px', width: '57px' }} />
            <div>
              <h1 className="title">
              What clients talk about us
              </h1>
            </div>
          </div>
          <ClientItems />
        </div>
      </section>
    );
  }
}

export default Clients;
