import React, { Component } from 'react';
import ApplySection from './ApplySection';

import '../../stylesheets/CareerDetails/BottomDetailPage.scss';

class JobDetailAndroid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="career-detail-apply-bottom">
        <div className="giant-wraper">
          <div className="bottom-wraper">
            <div className="left-content">
              <div className="responsibility">
                What you will be resonsible for
              </div>
              <div className="list-of-responesible">
                <div className="first-line">
                  <span>•</span>
                  Design and build advanced applications for the Android platform
                </div>
                <div className="first-line">
                  <span>•</span>
                  Work on bug fixing and improving application performance
                </div>
                <div className="first-line">
                  <span>•</span>
                  Ensuring the best possible performance, the quality of the application
                </div>
                <div className="first-line">
                  <span>•</span>
                  Helping maintain code.
                </div>
              </div>
              <div className="expectation">
                We expect from you
              </div>
              <div className="list-of-responesible">
                <div className="first-line">
                  <span>•</span>
                  Skillful in developing Android application
                </div>
                <div className="first-line">
                  <span>•</span>
                  Proficiency in Java
                </div>
                <div className="first-line">
                  <span>•</span>
                  Excellent logic skills
                </div>
                <div className="first-line">
                  <span>•</span>
                  Able to communicate and collaborate effectively with the team
                </div>
                <div className="first-line">
                  <span>•</span>
                  Have 1 years’ experience in Android development.
                </div>
              </div>
              <div className="what-we-give">
                Why you&apos;ll love working here
              </div>
              <div className="enviroment">
                Working environment
              </div>
              <div className="enviroment-list">
                <div className="first-line">
                  <span>•</span>
                  Working time: From Monday to Friday (9:00AM – 6:00PM)
                </div>
                <div className="first-line">
                  <span>•</span>
                  Flexible working environment
                </div>
                <div className="first-line">
                  <span>•</span>
                  Casual office environment (Gym, Swimming Pool, BBQ every weekends)
                </div>
                <div className="first-line">
                  <span>•</span>
                  Opportunity to work with other excellent & hungry engineers
                </div>
                <div className="first-line">
                  <span>•</span>
                  Opportunity to learn about Software Engineering best practices
                </div>
                <div className="first-line">
                  <span>•</span>
                  Opportunity to experience various technology stacks and learn from experts in
                  that technology stack
                </div>
                <div className="first-line">
                  <span>•</span>
                  Opportunity to work on different business models and understand how
                  choosing a technological solution will impact the business decision
                </div>
                <div className="first-line">
                  <span>•</span>
                  Annual salary reviews based on performance and contribution
                </div>
              </div>
              <div className="enviroment">
                Growth Opportunity
              </div>
              <div className="enviroment-list">
                <div className="first-line">
                  <span>•</span>
                  Working with new technologies in challenge projects
                </div>
                <div className="first-line">
                  <span>•</span>
                  Sharing & Talking technical with wide range of topics each month
                </div>
                <div className="first-line">
                  <span>•</span>
                  Supporting individual career development through the task & training benefits
                </div>
              </div>
            </div>
            <div className="right-content">
              <ApplySection />
            </div>
          </div>
          <div className="temporary-footer" />
        </div>
      </div>
    );
  }
}

export default JobDetailAndroid;
