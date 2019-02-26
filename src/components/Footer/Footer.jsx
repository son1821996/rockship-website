import React, { Component } from 'react';

import '../../stylesheets/Footer/Footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="footer-container">
        <div className="footer-left">
        Copyright © 2019 Rockship Co., Ltd. All Rights Reserved.
        </div>
        <div className="footer-right">
          <div className="footer-right-text">
          Connect with us
          </div>
          <div style={{
            width: '103px', height: '1px', backgroundColor: '#848484', marginRight: '24px',
          }}
          />
          <div className="logo">
            <a href="http://facebook.com">
              <img
                alt="logo"
                src="./img/facebook.png"
                srcSet="./img/facebook@2x.png 2x, ./img/facebook@3x.png 3x,"
                className="logo"
              />
            </a>
            <a href="http://google.com">
              <img
                alt="logo"
                src="./img/medium.png"
                srcSet="./img/medium@2x.png 2x, ./img/medium@3x.png 3x,"
                className="logo"
              />
            </a>
            <a href="https://www.linkedin.com/">
              <img
                alt="logo"
                src="./img/linked.png"
                srcSet="./img/linked@2x.png 2x, ./img/linked@3x.png 3x,"
                className="logo"
              />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
