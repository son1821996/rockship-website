import React, { Component } from 'react';
import Position from '../Possition/Position';

import '../../stylesheets/Career/OpenPositionSection.scss';

class OpenPositionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iosActivated: true,
      androidActivated: false,
      frontEndActivated: false,
      backEndActivated: false,
    };
  }

  activateIos = () => {
    this.setState({
      iosActivated: true,
      androidActivated: false,
      frontEndActivated: false,
      backEndActivated: false,
    });
  }

  activateAndroid = () => {
    this.setState({
      iosActivated: false,
      androidActivated: true,
      frontEndActivated: false,
      backEndActivated: false,
    });
  }

  activateFrontEnd = () => {
    this.setState({
      iosActivated: false,
      androidActivated: false,
      frontEndActivated: true,
      backEndActivated: false,
    });
  }

  activateBackEnd = () => {
    this.setState({
      iosActivated: false,
      androidActivated: false,
      frontEndActivated: false,
      backEndActivated: true,
    });
  }

  render() {
    const {
      iosActivated,
      androidActivated,
      frontEndActivated,
      backEndActivated,
    } = this.state;

    let positionInRockship = null;

    if (iosActivated === true
        || androidActivated === true
        || frontEndActivated === true
        || backEndActivated === true) {
      positionInRockship = <Position {...this.state} />;
    }

    return (
      <div className="open-position-section">
        <div className="position-at-rockship">
          <div className="left">
            <div className="open-position-title-box">
              <div className="title-line">
                <div />
              </div>
              <div className="title">
                Open Positions
              </div>
              <div className="line one">
                Getting on board
              </div>
              <div className="line two">
                Joining our team to do something awesome.
              </div>
            </div>
          </div>
          <div className="right">
            <div className="open-position-group">
              <div className="position-group">
                <div className="position ios">
                  <div className="position-clicking-area">
                    <img
                      alt="why-choose-copy"
                      src="./img/why-choose-copy.png"
                      srcSet="./img/why-choose-copy@2x.png 2x, ./img/why-choose-copy@3x.png 3x,"
                      className="position-icon"
                      onClick={this.activateIos}
                      style={{
                        opacity: `${iosActivated ? '1' : '0.1'}`,
                      }}
                    />
                  </div>
                  <div
                    className="title"
                    style={{
                      opacity: `${iosActivated ? '1' : '0.1'}`,
                    }}
                  >
                    IOS
                  </div>
                </div>
                <div className="position android">
                  <div className="position-clicking-area">
                    <img
                      alt="why-choose-copy"
                      src="./img/android.png"
                      srcSet="./img/android@2x.png 2x, ./img/android@3x.png 3x,"
                      className="position-icon"
                      onClick={this.activateAndroid}
                      style={{
                        opacity: `${androidActivated ? '1' : '0.1'}`,
                      }}
                    />
                  </div>
                  <div
                    className="title"
                    style={{
                      opacity: `${androidActivated ? '1' : '0.1'}`,
                    }}
                  >
                    Android
                  </div>
                </div>
                <div
                  className="position frontend"
                >
                  <div className="position-clicking-area">
                    <img
                      alt="why-choose-copy"
                      src="./img/frontend.png"
                      srcSet="./img/frontend@2x.png 2x, ./img/frontend@3x.png 3x,"
                      className="position-icon"
                      onClick={this.activateFrontEnd}
                      style={{
                        opacity: `${frontEndActivated ? '1' : '0.1'}`,
                      }}
                    />
                  </div>
                  <div
                    className="title"
                    style={{
                      opacity: `${frontEndActivated ? '1' : '0.1'}`,
                    }}
                  >
                    Frontend
                  </div>
                </div>
                <div
                  className="position backend"
                >
                  <div className="position-clicking-area">
                    <img
                      alt="why-choose-copy"
                      src="./img/backend.png"
                      srcSet="./img/backend@2x.png 2x, ./img/backend@3x.png 3x,"
                      className="position-icon"
                      onClick={this.activateBackEnd}
                      style={{
                        opacity: `${backEndActivated ? '1' : '0.1'}`,
                      }}
                    />
                  </div>
                  <div
                    className="title"
                    style={{
                      opacity: `${backEndActivated ? '1' : '0.1'}`,
                    }}
                  >
                    Backend
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="apply-position">
          {positionInRockship}
        </div>
      </div>
    );
  }
}

export default OpenPositionSection;
