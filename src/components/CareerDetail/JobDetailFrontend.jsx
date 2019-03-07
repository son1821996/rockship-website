import React, { Component } from 'react';
import ApplySection from './ApplySection';

import '../../stylesheets/CareerDetails/BottomDetailPage.scss';

class JobDetailFrontend extends Component {
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
                  Develop frontend applications in Vue.js using GraphQL
                </div>
                <div className="first-line">
                  <span>•</span>
                  R&D novel and ingenious solutions to unique problems
                </div>
                <div className="first-line">
                  <span>•</span>
                  Ensure the technical feasibility of UI/UX designs
                </div>
                <div className="first-line">
                  <span>•</span>
                  Architect our frontend: localisation, build tools, server-side rendering,
                  component framework
                </div>
                <div className="first-line">
                  <span>•</span>
                  Monitoring user experience and maximising their satisfaction
                </div>
                <div className="first-line">
                  <span>•</span>
                  Collaborate with a diverse multinational team of engineers
                </div>
                <div className="first-line">
                  <span>•</span>
                  Be a vital voice in sprint planning and daily stand up meetings
                </div>
                <div className="first-line">
                  <span>•</span>
                  Automate everything!
                </div>
              </div>
              <div className="expectation">
                We expect from you
              </div>
              <div className="list-of-responesible">
                <div className="first-line">
                  <span>•</span>
                  Deep expertise in Vue.js or ReactJs, ES6 and GraphQL
                </div>
                <div className="first-line">
                  <span>•</span>
                  Familiar with front-end stuffs such as: HTML, CSS/CSS3, Vanilla JS, etc
                </div>
                <div className="first-line">
                  <span>•</span>
                  Linux guru - piped commands with sed easily roll off your fingertips
                </div>
                <div className="first-line">
                  <span>•</span>
                  Sound coding practices - git, unit testing, CI/CD, design patterns, service
                  oriented architecture
                </div>
                <div className="first-line">
                  <span>•</span>
                  Strong sense of user empathy and ownership over the products you&apos;ve
                  created
                </div>
                <div className="first-line">
                  <span>•</span>
                  Sensitivity to website design, and an eye for aesthetics
                  Nice to have
                </div>
                <div className="first-line">
                  <span>•</span>
                  Build your own frontend boilerplate or component library
                </div>
                <div className="first-line">
                  <span>•</span>
                  Your own ideas!
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
                  Working with the team of talented and passionate engineers
                </div>
                <div className="first-line">
                  <span>•</span>
                  Young and dynamic environment combined with supportive and funny
                </div>
                <div className="first-line">
                  <span>•</span>
                  Fully stocked pantry (snacks, noodle, milk, coffee, tea, etc)
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

export default JobDetailFrontend;
