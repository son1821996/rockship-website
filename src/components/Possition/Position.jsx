import React, { Component, Fragment } from 'react';
import { bool } from 'prop-types';
import '../../stylesheets/Possition/Position.scss';
import { Link } from 'react-router-dom';

class position extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'career/ios/details',
      jobTitle: 'IOs developer',
      openingPosition: [
        {
          id: '1',
          location: '24/1k Vo Oanh Street',
          workAs: 'full time ',
          strangeNumber: 3,
        },
        {
          id: '2',
          location: '24/1k Vo Oanh Street',
          workAs: 'full time ',
          strangeNumber: 3,
        },
        {
          id: '3',
          location: '24/1k Vo Oanh Street',
          workAs: 'full time ',
          strangeNumber: 3,
        },
      ],
    };
  }

  componentDidUpdate(preProps) {
    const {
      iosActivated,
      androidActivated,
      frontEndActivated,
      backEndActivated,
    } = this.props;
    if (preProps.iosActivated !== iosActivated
        || preProps.androidActivated !== androidActivated
        || preProps.frontEndActivated !== frontEndActivated
        || preProps.backEndActivated !== backEndActivated) {
      this.changeJobtitle();
    }
  }

  changeJobtitle = () => {
    const {
      iosActivated,
      androidActivated,
      frontEndActivated,
      backEndActivated,
    } = this.props;
    if (iosActivated === true) {
      this.setState({
        jobTitle: 'IOs developer',
        direction: 'career/ios/details',
      });
    } else if (androidActivated === true) {
      this.setState({
        jobTitle: 'Android developer',
        direction: '/career/android/details',
      });
    } else if (frontEndActivated === true) {
      this.setState({
        jobTitle: 'Frontend developer',
        direction: '/career/front-end/details',
      });
    } else if (backEndActivated === true) {
      this.setState({
        jobTitle: 'Backend developer',
        direction: '/career/back-end/details',
      });
    }
  }

  render() {
    const {
      openingPosition,
      jobTitle,
      direction,
    } = this.state;
    return (
      <Fragment>
        <div className="Position">
          {openingPosition.map(openingPositionItem => (
            <div className="apply-for" key={openingPositionItem.id}>
              <Link to={direction} {...position}>
                <div className="job-wraper">
                  <div className="job-title">
                    {jobTitle}
                  </div>
                  <div className="line location">
                    <img
                      alt="ship"
                      src="./img/place.png"
                      srcSet="./img/place@2x.png 2x, ./img/place@3x.png 3x,"
                      className="icon"
                    />
                    <div className="definition-of-icon">
                      {openingPositionItem.location}
                    </div>
                  </div>
                  <div className="line time">
                    <img
                      alt="ship"
                      src="./img/time.png"
                      srcSet="./img/time@2x.png 2x, ./img/time@3x.png 3x,"
                      className="icon"
                    />
                    <div className="definition-of-icon">
                      {openingPositionItem.workAs}
                    </div>
                  </div>
                  <div className="line number-i-dont-know">
                    <img
                      alt="ship"
                      src="./img/time-copy.png"
                      srcSet="./img/time-copy@2x.png 2x, ./img/time-copy@3x.png 3x,"
                      className="icon"
                    />
                    <div className="definition-of-icon">
                      {openingPositionItem.strangeNumber}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

position.propTypes = {
  iosActivated: bool.isRequired,
  androidActivated: bool.isRequired,
  frontEndActivated: bool.isRequired,
  backEndActivated: bool.isRequired,
};

export default position;
