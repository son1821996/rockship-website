import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/CareerDetails/ApplySection.scss';

class ApplySection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="apply-section">
        <div className="what-user-see">
          <div className="info">
            Salary:
          </div>
          <span>
            negotiate
          </span>
        </div>
        <div className="what-user-see one">
          <div className="info">
            Experience:
          </div>
          <span>
            3 years
          </span>
        </div>
        <div className="what-user-see two">
          <div className="info">
            Deadline:
          </div>
          <span>
            12/8/2019
          </span>
        </div>
        <div className="button-apply">
          <Link to="/Career/Appy-page">
            <div className="button-title">
              Apply now
            </div>
          </Link>
        </div>
        <div className="benefit">
          Benefit
        </div>
        <div className="benefits">
          <div className="icon" />
          <div className="name-icon">
            13th month salary
          </div>
        </div>
        <div className="benefits">
          <div className="icon" />
          <div className="name-icon">
            2 times/year review salary
          </div>
        </div>
        <div className="benefits">
          <div className="icon" />
          <div className="name-icon">
            15 days leave
          </div>
        </div>
        <div className="benefits">
          <div className="icon" />
          <div className="name-icon">
            Insurance
          </div>
        </div>
        <div className="benefits">
          <div className="icon" />
          <div className="name-icon">
            Parking free
          </div>
        </div>
        <div className="benefits">
          <div className="icon" />
          <div className="name-icon">
            13th month salary
          </div>
        </div>
        <div className="benefits">
          <div className="icon" />
          <div className="name-icon">
            Company trip
          </div>
        </div>
        <div className="benefits">
          <div className="icon" />
          <div className="name-icon">
            Fully stocked pantry
          </div>
        </div>
        <div className="benefits">
          <div className="icon" />
          <div className="name-icon">
            Sharing & Talking technical
          </div>
        </div>
      </div>
    );
  }
}

export default ApplySection;
