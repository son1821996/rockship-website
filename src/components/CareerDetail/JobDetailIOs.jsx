import React, { Component } from 'react';
import ApplySection from './ApplySection';

import '../../stylesheets/CareerDetails/BottomDetailPage.scss';

class JobDetailIOs extends Component {
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
                  Advanced knowledge in mobile development with Objective-C and Swift
                </div>
                <div className="first-line">
                  <span>•</span>
                  Strong OOP knowledge. Familiar with Clean Architecture, Unit-testing
                  and best practices in software development, algorithm design, design
                  patterns, performance tuning.
                </div>
                <div className="first-line">
                  <span>•</span>
                  Experience in Reactive Programming using RxSwift, RxCocoa ...etc
                </div>
                <div className="first-line">
                  <span>•</span>
                  Some 3rd party library we use: Facebook SDK, Alamofire, Moya,
                  Kingfisher, SDWebImage, Google Maps SDK, Fabric, Google Analytics
                  Services, SocketIO, Stripe...etc
                </div>
                <div className="first-line">
                  <span>•</span>
                  Tools we use: Github, GitLab, Jenkins, Zeplin, Jira, Basecamp,
                  Confluence, Slack, latest XCode, Fastlane, Postman, Sketch.
                </div>
                <div className="first-line">
                  <span>•</span>
                  Hands-on experience with advanced custom UI controls/animations,
                  concurrency (GCD, thread, queue, and scheduling technique), database
                  (Core Data or Realm) and memory management (ARC)
                </div>
                <div className="first-line">
                  <span>•</span>
                  Understanding of software quality assurance principles
                </div>
                <div className="first-line">
                  <span>•</span>
                  Excellent analytical, problem-solving, code optimization, code
                  organization, and debugging skills
                </div>
                <div className="first-line">
                  <span>•</span>
                  Strong English communication skill across teams (management, product,
                  software, review code, etc.)
                </div>
                <div className="first-line">
                  <span>•</span>
                  Understanding of mobile development security
                </div>
                <div className="first-line">
                  <span>•</span>
                  Experience in Continuous Delivery for iOS using Fastlane and Jenkins
                </div>
                <div className="first-line">
                  <span>•</span>
                  A technical mindset with great attention to detail
                </div>
                <div className="first-line">
                  <span>•</span>
                  High quality organizational and leadership skills
                </div>
                <div className="first-line">
                  <span>•</span>
                  Outstanding communication and presentation abilities
                </div>
              </div>
              <div className="expectation">
                We expect from you
              </div>
              <div className="list-of-responesible">
                <div className="first-line">
                  <span>•</span>
                  Design and build advanced applications on iOS
                </div>
                <div className="first-line">
                  <span>•</span>
                  Ensure the performance, quality, and responsiveness of applications
                </div>
                <div className="first-line">
                  <span>•</span>
                  Collaborate with a team to define, design, and ship new features
                </div>
                <div className="first-line">
                  <span>•</span>
                  Identify and correct bottlenecks
                </div>
                <div className="first-line">
                  <span>•</span>
                  Continuously discover, evaluate, and implement new technologies to
                  maximize development efficiency
                </div>
                <div className="first-line">
                  <span>•</span>
                  For Senior Engineering Positions: Supervise and support other junior
                  developers in fulfilling tasks as well as improving their skills
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

export default JobDetailIOs;
