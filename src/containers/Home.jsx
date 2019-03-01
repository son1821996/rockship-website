import React, { Component, Fragment } from 'react';

import Navigation from '../components/Navigation/Navigation';
import Service from '../components/Service/Service';
import Clients from '../components/Clients/Clients';


import '../stylesheets/Home/Home.scss';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClickToScroll: false,
    };
  }

  handleClick = () => {
    this.setState({
      isClickToScroll: true,
    });
  }

  render() {
    const { isClickToScroll } = this.state;
    return (
      <Fragment>
        <header
          style={{
            height: `${isClickToScroll ? '40vh' : '100vh'}`,
          }}
        >
          <Navigation />
          <div
            className="header-content"
          >
            <div
              className="welcome-title"
              style={{
                transform: `${isClickToScroll ? 'translateY(-230%)' : 'unset'}`,
              }}
            >
            Welcome to Rockship
            </div>
            <div
              className="welcome-sub"
              style={{
                transform: `${isClickToScroll ? 'translateY(-400%)' : 'unset'}`,
              }}
            >
            We are here to Acelerate Your Business
            and Help you Find The Way
            </div>
            <div className="header-bottom">
              <img
                alt="ship"
                src="/img/rockship.png"
                srcSet="/img/rockship@2x.png 2x, /img/rockship@3x.png 3x,"
                className="ship"
              />
              <div
                className="white-clound"
              />
              <div
                className="grey-cloud"
              />
              <div
                className="a"
                onClick={this.handleClick}
              >
                <div className="b" />
              </div>
              <div
                className="scroll-text"
              >
                SCROLL TO EXPLORE
              </div>
            </div>
          </div>
        </header>
        <About />
        <Service />
        <Portfolio />
        <Clients />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
