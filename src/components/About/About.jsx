import React, { Component } from 'react';

import '../../stylesheets/About/About.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about-us-container">
        <div className="title">
          About us
        </div>
        <div style={{
          width: '60px', height: '4px', backgroundColor: '#5c5c5c', marginLeft: 'auto', marginRight: 'auto',
        }}
        />
        <div className="about-showcase">
          <div className="about-item">
            <img
              alt="about"
              src="./img/about1.png"
              srcSet="./img/about1@2x.png 2x, ./img/about1@3x.png 3x,"
              style={{ width: '188px', height: '135px' }}
              className="flag-ship"
            />
            <h3>
              Cutting Edge & Specialized
            </h3>
            <p>
            Our engineering embrace latest technology to improve our work efficiency and deliver
            excellent client expectation:
            AI & Machine Learning, Blockchain, Rust, Golang, Docker, etc.
            </p>
            <p style={{ marginTop: '-10px' }}>
            We actively look for projects in those new technologies to horn our specialization
            and build up the portfolio for our engineers
            </p>
          </div>
          <div className="about-item">
            <div style={{
              display: 'flex', position: 'relative', marginLeft: 'auto', marginRight: 'auto',
            }}
            >
              <img
                alt="about"
                src="./img/about2.png"
                srcSet="./img/about2@2x.png 2x, ./img/about2@3x.png 3x,"
                style={{
                  width: '69px', height: '135px', display: 'inline-block', marginLeft: 'unset', marginRight: 'unset',
                }}
              />
              <img
                alt="about"
                src="./img/astronaut.png"
                srcSet="./img/astronaut@2x.png 2x, ./img/astronaut@3x.png 3x,"
                style={{
                  width: '55px',
                  height: '44px',
                  display: 'inline-block',
                  marginLeft: 'unset',
                  marginRight: 'unset',
                  position: 'absolute',
                  bottom: '0',
                  left: '75px',
                }}
                className="astronaut-img"
              />
            </div>
            <h3>
              Agile & Pragmatic
            </h3>
            <p>
            From the founder’s experience of working at various tech companies, it is common
            for developers to hit the wall in churning out good system designs.
            </p>
          </div>
          <div className="about-item">
            <img
              alt="about"
              src="./img/about3.png"
              style={{ width: '90px', height: '135px' }}
              srcSet="./img/about3@2x.png 2x, ./img/about3@3x.png 3x,"
            />
            <h3>
              Hungry & Growth
            </h3>
            <p>
            Rockship nurtures young and energetic software engineering talents
            by welcoming them from diverse backgrounds: gamers, sport athletes,...
            and coaching them to grow their passion for solving hard technical problems.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
