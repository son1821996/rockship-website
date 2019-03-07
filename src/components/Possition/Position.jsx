import React, { Component, Fragment } from 'react';
import { bool } from 'prop-types';
import '../../stylesheets/Possition/Position.scss';
import { Link } from 'react-router-dom';

class position extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'career/ios/details',
      openingPosition: [
        {
          id: '1',
          jobTitle: 'Itern IOs developer',
          location: '64/1k Vo Oanh Street,Binh Thanh,HCM city',
          workAs: 'full time ',
          strangeNumber: 1,
        },
        {
          id: '2',
          jobTitle: 'Junior IOs developer',
          location: '64/1k Vo Oanh Street,Binh Thanh,HCM city',
          workAs: 'full time ',
          strangeNumber: 1,
        },
        {
          id: '3',
          jobTitle: 'Senior IOs developer',
          location: '64/1k Vo Oanh Street,Binh Thanh,HCM city',
          workAs: 'full time ',
          strangeNumber: 1,
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
    const { openingPosition } = this.state;
    if (iosActivated === true) {
      openingPosition[0].jobTitle = 'Itern IOs developer';
      openingPosition[1].jobTitle = 'Junior IOs developer';
      openingPosition[2].jobTitle = 'Senior IOs developer';
      this.setState({
        openingPosition,
        direction: 'career/ios/details',
      });
    } else if (androidActivated === true) {
      openingPosition[0].jobTitle = 'Itern Android developer';
      openingPosition[1].jobTitle = 'Junior Android developer';
      openingPosition[2].jobTitle = 'Senior Android developer';
      this.setState({
        openingPosition,
        direction: '/career/android/details',
      });
    } else if (frontEndActivated === true) {
      openingPosition[0].jobTitle = 'Itern Frontend developer';
      openingPosition[1].jobTitle = 'Junior Frontend developer';
      openingPosition[2].jobTitle = 'Senior Frontend developer';
      this.setState({
        openingPosition,
        direction: '/career/front-end/details',
      });
    } else if (backEndActivated === true) {
      openingPosition[0].jobTitle = 'Itern Backend developer';
      openingPosition[1].jobTitle = 'Junior Backend developer';
      openingPosition[2].jobTitle = 'Senior Backend developer';
      this.setState({
        openingPosition,
        direction: '/career/back-end/details',
      });
    }
  }

  render() {
    const {
      openingPosition,
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
                    {openingPositionItem.jobTitle}
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
