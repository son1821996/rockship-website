import React, { Component, Fragment } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navigation from '../components/Navigation/Navigation';
import TopHeaderDetail from '../components/CareerDetail/TopHeaderDetail';
import BottomDetailPage from '../components/CareerDetail/BottomDetailPage';

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
    return (
      <Fragment>
        {width <= 1024 ? <Navigation /> : ''}
        <Sidebar />
        <TopHeaderDetail />
        <BottomDetailPage />
      </Fragment>
    );
  }
}

export default CareerDetail;
