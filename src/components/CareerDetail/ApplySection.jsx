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
        <div className="button-apply">
          <Link to="/career/apply-page">
            <div className="button-title">
              Apply now
            </div>
          </Link>
        </div>
        <div className="benefit">
          Benefit
        </div>
        <div className="benefits">
          <img
            alt="salary"
            src="/img/salary.png"
            srcSet="/img/salary@2x.png 2x, /img/salary@3x.png 3x,"
            className="icon"
          />
          <div className="name-icon">
            13th month salary
          </div>
        </div>
        <div className="benefits">
          <img
            alt="review"
            src="/img/review.png"
            srcSet="/img/review@2x.png 2x, /img/review@3x.png 3x,"
            className="icon"
          />
          <div className="name-icon">
            2 times/year review salary
          </div>
        </div>
        <div className="benefits">
          <img
            alt="leave"
            src="/img/salary.png"
            srcSet="/img/salary@2x.png 2x, /img/salary@3x.png 3x,"
            className="icon"
          />
          <div className="name-icon">
            15 days leave
          </div>
        </div>
        <div className="benefits">
          <img
            alt="insurance"
            src="/img/insurance.png"
            srcSet="/img/insurance@2x.png 2x, /img/insurance@3x.png 3x,"
            className="icon"
          />
          <div className="name-icon">
            Insurance
          </div>
        </div>
        <div className="benefits">
          <img
            alt="parking"
            src="/img/parking.png"
            srcSet="/img/parking@2x.png 2x, /img/parking@3x.png 3x,"
            className="icon"
          />
          <div className="name-icon">
            Parking free
          </div>
        </div>
        <div className="benefits">
          <img
            alt="company-trip"
            src="/img/company-trip.png"
            srcSet="/img/company-trip@2x.png 2x, /img/company-trip@3x.png 3x,"
            className="icon"
          />
          <div className="name-icon">
            Company trip
          </div>
        </div>
        <div className="benefits">
          <img
            alt="pantry"
            src="/img/pantry.png"
            srcSet="/img/pantry@2x.png 2x, /img/pantry@3x.png 3x,"
            className="icon"
          />
          <div className="name-icon">
            Fully stocked pantry
          </div>
        </div>
        <div className="benefits">
          <img
            alt="sharing"
            src="/img/sharing.png"
            srcSet="/img/sharing@2x.png 2x, /img/sharing@3x.png 3x,"
            className="icon"
          />
          <div className="name-icon">
            Sharing & Talking technical
          </div>
        </div>
      </div>
    );
  }
}

export default ApplySection;
