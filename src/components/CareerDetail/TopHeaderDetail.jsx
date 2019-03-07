import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';

import '../../stylesheets/CareerDetails/TopHeaderDetail.scss';

class TopHeaderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;

    let logoChange;
    let titleOfJob;
    let tech;
    if (match.url === '/career/back-end/details') {
      logoChange = '/img/Backend-icon.png';
      titleOfJob = 'Backend';
      tech = 'Python - Golang - NodeJS';
    } else if (match.url === '/career/ios/details') {
      logoChange = '/img/Why-choose-copy2.png';
      titleOfJob = 'IOs';
      tech = 'Swift';
    } else if (match.url === '/career/android/details') {
      logoChange = '/img/Android-icon.png';
      titleOfJob = 'Android';
      tech = 'Java';
    } else if (match.url === '/career/front-end/details') {
      logoChange = '/img/Frontend-icon.png';
      titleOfJob = 'Frontend';
      tech = 'ReactJS - VueJS';
    }
    return (
      <div className="career-detail-apply-header">
        <div className="top-header-wraper">
          <div className="job-title-group">
            <div className="job-logo">
              <img
                alt="why-choose-copy2"
                src={logoChange}
              />
            </div>
            <div className="job-title">
              {titleOfJob}
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
              {tech}
            </div>
          </div>
          <img alt="big-img" src="/img/mac.jpg" className="giant-img" />
        </div>
      </div>
    );
  }
}

TopHeaderDetail.propTypes = {
  match: object.isRequired,
};

export default withRouter(TopHeaderDetail);
