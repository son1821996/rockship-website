import React, { Component } from 'react';

import '../../stylesheets/CareerDetails/TopHeaderDetail.scss';

class TopHeaderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="career-detail-apply-header">
        <div className="top-header-wraper">
          <div className="job-title-group">
            <div className="job-logo">
              <div />
            </div>
            <div className="job-title">
              Backend
            </div>
          </div>
          <div className="title-group-head">
            <div className="title-of-job">
              <div className="line" />
              <div className="head-title">
                SOFTWARE ENGINEERING
              </div>
            </div>
            <div className="what-we-want">
              Python - Golang - NodeJS
            </div>
          </div>
          <img alt="big-img" src="/img/mac.jpg" className="giant-img" />
        </div>
      </div>
    );
  }
}

export default TopHeaderDetail;
