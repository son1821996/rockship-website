import React, { Component } from 'react';
import Form from './Form';

import '../../stylesheets/ApplicationPage/ApplicationForm.scss';

class ApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: '/img/backend.png',
    };
  }

  render() {
    const { logo } = this.state;
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
                Backend
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
                Python - Golang - NodeJS
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

export default ApplicationForm;
