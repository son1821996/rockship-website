import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import Form from './Form';

import '../../stylesheets/ApplicationPage/ApplicationForm.scss';

class ApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;

    let logo;
    let titleJob;
    let technical;
    if (match.url === '/career/back-end/details/apply-page') {
      logo = '/img/Backend-icon.png';
      titleJob = 'Backend';
      technical = 'Python - Golang - NodeJS';
    } else if (match.url === '/career/ios/details/apply-page') {
      logo = '/img/Why-choose-copy2.png';
      titleJob = 'IOs';
      technical = 'Swift';
    } else if (match.url === '/career/android/details/apply-page') {
      logo = '/img/Android-icon.png';
      titleJob = 'Android';
      technical = 'Java';
    } else if (match.url === '/career/front-end/details/apply-page') {
      logo = '/img/Frontend-icon.png';
      titleJob = 'Frontend';
      technical = 'ReactJS - VueJS';
    }
    return (
      <div className="application-form">
        <div className="apply-header">
          <div className="top-header-wraper-form">
            <div className="title-group">
              <img
                alt="logo"
                src={logo}
                className="logo"
              />
              <div className="title">
                {titleJob}
              </div>
            </div>
            <div className="title-group-head">
              <div className="title-of-job">
                <div className="line" />
                <div className="head-title">
                  APPLICATION FORM
                </div>
              </div>
              <div className="what-we-want">
                {technical}
              </div>
            </div>
          </div>
        </div>
        <div className="form-container-apply">
          <Form />
        </div>
        <div className="button-container">
          <div className="button">
            Submit
          </div>
        </div>
      </div>
    );
  }
}

ApplicationForm.propTypes = {
  match: object.isRequired,
};

export default withRouter(ApplicationForm);
