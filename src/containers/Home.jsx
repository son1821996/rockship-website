import React, { Component, Fragment } from 'react';
import { Parallax } from 'react-parallax';

import Navigation from '../components/Navigation/Navigation';
import Service from '../components/Service/Service';
import Clients from '../components/Clients/Clients';
import ScrollButton from '../components/ScrollButton/ScrollButton';

import '../stylesheets/Home/Home.scss';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';

class Home extends Component {
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
        <header
          style={{
            height: `${(width >= 812 && width <= 823) || (width >= 568 && width <= 667) || width === 731 ? '200vh' : ''}`,
          }}
        >
          <Navigation />
          <div
            className="header-content"
          >
            <div
              className="welcome-title"
              // style={{
              //   transform: `${isClickToScroll ? 'translateY(-230%)' : 'unset'}`,
              // }}
            >
            Welcome to Rockship
            </div>
            <div
              className="welcome-sub"
              // style={{
              //   transform: `${isClickToScroll ? 'translateY(-400%)' : 'unset'}`,
              // }}
            >
            We are here to Acelerate Your Business
            and Help you Find The Way
            </div>
            <div className="header-bottom">
              <div className="normal">
                <img
                  alt="ship"
                  src="./img/rockship.png"
                  srcSet="./img/rockship@2x.png 2x, ./img/rockship@3x.png 3x,"
                  className="ship"
                />
                <div
                  className="white-clound"
                />
                <div
                  className="grey-cloud"
                />
              </div>
              <div className="parallax">
                <Parallax
                  blur={0}
                  bgImage="./img/rockship.png"
                  bgImageAlt="the cat"
                  bgStyle={{
                    backgroundPosition: 'center',
                  }}
                  bgClassName="ship-para"
                  strength={-600}
                  // bgImageSizes={100}
                >
                  &nbsp;
                  <div style={{ height: '40vh' }} />
                </Parallax>
                <Parallax
                  blur={0}
                  bgImage="./img/grey-cloud.png"
                  bgImageAlt="the cat"
                  bgClassName="grey-cloud-para"
                  strength={500}
                  // bgImageSizes={100}
                  className="cloud"
                >
                  &nbsp;
                  <div className="clound-height" style={{ height: '60vh' }} />
                </Parallax>
              </div>
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
        <ScrollButton scrollStepInPx="100" delayInMs="16.66" />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
