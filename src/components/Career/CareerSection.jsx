import React, { Component } from 'react';

import '../../stylesheets/Career/CareerSection.scss';

class CareerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="career-section">
        <div className="left">
          <div className="career-title-box">
            <div className="title-line">
              <div />
            </div>
            <div className="title">
              Career
            </div>
            <div className="join-rockship">
              Join
              <strong style={{ fontWeight: 'bolder' }}>
              &nbsp;ROCKSHIP&nbsp;
              </strong>
              and explore your unlimited possibilities
            </div>
          </div>
          <div className="team-company-trip">
            <div className="left-side">
              <div className="first-time">
                <img
                  alt="rectangle-copy-3"
                  src="/img/rectangle-copy-3.png"
                  srcSet="/img/rectangle-copy-3@2x.png 2x, /img/rectangle-copy-3@3x.png 3x,"
                />
              </div>
              <div className="left-pic-group">
                <div className="shrimp">
                  <img
                    alt="rectangle-copy-6"
                    src="/img/rectangle-copy-6.png"
                    srcSet="/img/rectangle-copy-6@2x.png 2x, /img/rectangle-copy-6@3x.png 3x,"
                  />
                </div>
                <div className="sea">
                  <img
                    alt="rectangle-copy-5"
                    src="/img/rectangle-copy-5.png"
                    srcSet="/img/rectangle-copy-5@2x.png 2x, /img/rectangle-copy-5@3x.png 3x,"
                  />
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="grape">
                <img
                  alt="rectangle-copy-7"
                  src="/img/rectangle-copy-7.png"
                  srcSet="/img/rectangle-copy-7@2x.png 2x, /img/rectangle-copy-7@3x.png 3x,"
                />
              </div>
              <div className="rock">
                <img
                  alt="rectangle-copy-4"
                  src="/img/rectangle-copy-4.png"
                  srcSet="/img/rectangle-copy-4@2x.png 2x, /img/rectangle-copy-4@3x.png 3x,"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="ideal-teamate">
            <div className="ideal-teamate-group">
              <div className="icon-frame">
                <img
                  alt="about"
                  src="/img/teamate.png"
                  srcSet="/img/teamate@2x.png 2x, /img/teamate@3x.png 3x,"
                  className="icon-frame"
                />
              </div>
              <div className="what-we-want">
                We look for teammates Who
              </div>
              <div className="ideal-teamate-element">
                <div className="element first">
                  <strong>
                    Have Passion:
                  </strong>
                  You can do anything as long as you have the passion,
                  the drive, the focus,
                  and the support
                </div>
                <div className="element second">
                  <strong>
                    Work together:
                  </strong>
                    Talent wins games, but teamwork and intelligence wins championships
                </div>
                <div className="element third">
                  <strong>
                    Take challenges:
                  </strong>
                    Every project has challenges, and every project has its rewards
                </div>
                <div className="element fouth">
                  <strong>
                    Learn everyday:
                  </strong>
                  We believe that everything is a learning process: any time you fall over,
                  it just teaching you to stand up the next time.
                </div>
              </div>
            </div>
          </div>
          <div className="why-chose-us">
            <div className="ideal-teamate-group">
              <div className="icon-frame">
                <img
                  alt="about"
                  src="/img/why-choose.png"
                  srcSet="/img/why-choose@2x.png 2x, /img/why-choose@3x.png 3x,"
                  className="icon-frame"
                />
              </div>
              <div className="what-we-want">
                Why Rockship worth it
              </div>
              <div className="ideal-teamate-element">
                <div className="element first">
                  <strong>
                    Understanding:
                  </strong>
                  It&apos;s easy to listen but hard to understand. At Rockship, we do them both.
                </div>
                <div className="element second">
                  <strong>
                    Facilitation:
                  </strong>
                  Rockship is where you can learn and become better everyday.
                </div>
                <div className="element third">
                  <strong>
                    Recognition:
                  </strong>
                  Your efforts at work will be rewarded in a worthy way.
                </div>
                <div className="element fouth">
                  <strong>
                  Empowerment:
                  </strong>
                  You say you wanna try? We give you the opportunity to do it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CareerSection;
