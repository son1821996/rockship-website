import React, { Component, Fragment } from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

import '../stylesheets/Portfolio/PortfolioDetailContainer.scss';

class PortfolioDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <section className="portfolio-detail-container-section">
          <Sidebar />
          <div className="portfolio-detail-section">
            aaaaaaaaaaaaaa
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default PortfolioDetails;
