import React, { Component, Fragment } from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';

import '../../stylesheets/Portfolio/PortfolioDetailContainer.scss';

class Liveo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
    });
  }

  render() {
    const { width } = this.state;
    return (
      <Fragment>
        {width <= 1024 ? <Navigation /> : ''}
        <section className="portfolio-detail-container-section">
          <Sidebar />
          <div className="portfolio-detail-section">
            <embed src="/Liveo_Casestudy.pdf#view=FitH" type="application/pdf" width="100vh" height="100%" />
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default Liveo;
