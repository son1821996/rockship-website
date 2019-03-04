import React, { Component } from 'react';
import ApplySection from './ApplySection';

import '../../stylesheets/CareerDetails/BottomDetailPage.scss';

class BottomDetailPage extends Component {
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
                  Build efficient, testable, scalable, and reusable modules
                </div>
                <div className="first-line">
                  <span>•</span>
                  Solve complex performance problems and architectural challenges
                </div>
                <div className="first-line">
                  <span>•</span>
                  Not only be cooperative and friendly,
                  but also proactive and responsible and great believer of teamwork
                </div>
                <div className="first-line">
                  <span>•</span>
                  For Senior Engineering Positions:
                </div>
              </div>
              <div className="what-you-do">
                <div className="first-line">
                  <span>-</span>
                  Play a lead role either in terms of technical development and architecture,
                  or in terms of team management
                </div>
                <div className="first-line">
                  <span>-</span>
                  Mentor and nurture engineers.
                </div>
              </div>
              <div className="expectation">
                We expect from you
              </div>
              <div className="list-of-responesible">
                <div className="first-line">
                  <span>•</span>
                  Willing to work with new technologies in big and challenge projects
                </div>
                <div className="first-line">
                  <span>•</span>
                  2+ years experience with programming languages like Golang,
                  Python or NodeJS (We’re open any language)
                </div>
                <div className="first-line">
                  <span>•</span>
                  Participate in the entire application lifecycle, focusing on coding
                </div>
                <div className="first-line">
                  <span>•</span>
                  Write clean code to develop functional web applications
                </div>
                <div className="first-line">
                  <span>•</span>
                  Optimization of the application for maximum speed, scalability and re-usability
                </div>
                <div className="first-line">
                  <span>•</span>
                  Ability to find solutions to the new challenges daily
                </div>
                <div className="first-line">
                  <span>•</span>
                  Always have a willing to learn and can-do attitude
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
                  Participate in the entire application lifecycle, focusing on coding
                </div>
                <div className="first-line">
                  <span>•</span>
                  Write clean code to develop functional web applications
                </div>
                <div className="first-line">
                  <span>•</span>
                  Optimization of the application for maximum speed, scalability and re-usability
                </div>
                <div className="first-line">
                  <span>•</span>
                  Optimization of the application for maximum speed, scalability and re-usability
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

export default BottomDetailPage;
