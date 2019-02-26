import React, { Component } from 'react';

import '../../stylesheets/Career/OpenPositionSection.scss';

class OpenPositionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="open-position-section">
        <div className="position-at-rockship">
          <div className="left">
            <div className="open-position-title-box">
              <div className="title-line">
                <div />
              </div>
              <div className="title">
                Open Positions
              </div>
              <div className="line one">
                Getting on board
              </div>
              <div className="line two">
                Joining our team to do something awesome.
              </div>
            </div>
          </div>
          <div className="right">
            <div className="open-position-group">
              <div className="position-group">
                <div className="position ios">
                  <div />
                </div>
                <div className="position android">
                  <div />
                </div>
                <div className="position frontend">
                  <div />
                </div>
                <div className="position backend">
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="apply-position">
          <div className="apply-position-first">
            <div className="apply-for one">
              <div />
            </div>
            <div className="apply-for two">
              <div />
            </div>
            <div className="apply-for three">
              <div />
            </div>
          </div>
          <div className="apply-position-second">
            <div className="apply-for four">
              <div />
            </div>
            <div className="apply-for five">
              <div />
            </div>
            <div className="apply-for six">
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpenPositionSection;
