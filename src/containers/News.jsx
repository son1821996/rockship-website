import React, { Component, Fragment } from 'react';

import NewsThumbnail from '../components/News/NewsThumbnail';
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
                news
              </div>
            </div>
          </div>
          <div className="list-item">
            <NewsThumbnail />
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default PortfolioContainer;
