import React, { Component, Fragment } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navigation from '../components/Navigation/Navigation';
import ApplicationForm from '../components/ApplicationPage/ApplicationForm';

import '../stylesheets/ApplicationPage/ApplicationPage.scss';

class ApplicationPage extends Component {
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
      <div className="career">
        <Fragment>
          {width <= 1024 ? <Navigation /> : ''}
          <Sidebar />
          <ApplicationForm />
        </Fragment>
      </div>
    );
  }
}

export default ApplicationPage;
