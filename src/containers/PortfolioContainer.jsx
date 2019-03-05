import React, { Component, Fragment } from 'react';

import PortfoliosThumbnail from '../components/Portfolio/PortfoliosThumbnail';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

import '../stylesheets/SubPage.scss';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <section className="page-section">
          <div className="page-header">
            <div className="header-left" style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                className="dash"
                style={{
                  backgroundColor: '#ffffff', height: '4px', width: '57px',
                }}
              />
              <div className="title">
                Portfolio
              </div>
            </div>
          </div>
          <div className="list-item">
            <PortfoliosThumbnail />
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default PortfolioContainer;
