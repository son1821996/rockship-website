import React, { Component, Fragment } from 'react';

import Navigation from '../components/Navigation/Navigation';
import CareerSection from '../components/Career/CareerSection';
import OpenPositionSection from '../components/Career/OpenPositionSection';

import '../stylesheets/Career/Career.scss';
import Footer from '../components/Footer/Footer';

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="career">
        <Fragment>
          <Navigation />
          <CareerSection />
          <OpenPositionSection />
          <Footer />
        </Fragment>
      </div>
    );
  }
}

export default Career;
