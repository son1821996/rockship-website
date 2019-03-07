import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import Sidebar from '../components/Sidebar/Sidebar';
import Navigation from '../components/Navigation/Navigation';
import TopHeaderDetail from '../components/CareerDetail/TopHeaderDetail';
import BottomDetailPage from '../components/CareerDetail/BottomDetailPage';
import JobDetailAndroid from '../components/CareerDetail/JobDetailAndroid';
import JobDetailFrontend from '../components/CareerDetail/JobDetailFrontend';
import JobDetailIOs from '../components/CareerDetail/JobDetailIOs';

import '../stylesheets/CareerDetail/CareerDetail.scss';

class CareerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
    });
  }

  render() {
    const { width } = this.state;
    const { match } = this.props;

    let footer;
    if (match.url === '/career/back-end/details') {
      footer = <BottomDetailPage />;
    } else if (match.url === '/career/ios/details') {
      footer = <JobDetailIOs />;
    } else if (match.url === '/career/android/details') {
      footer = <JobDetailAndroid />;
    } else if (match.url === '/career/front-end/details') {
      footer = <JobDetailFrontend />;
    }

    return (
      <Fragment>
        {width <= 1024 ? <Navigation /> : ''}
        <Sidebar />
        <TopHeaderDetail />
        { footer }
      </Fragment>
    );
  }
}

CareerDetail.propTypes = {
  match: object.isRequired,
};

export default withRouter(CareerDetail);
