import React, { Component, Fragment } from 'react';
import Routes from './routes';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes />
      </Fragment>
    );
  }
}

export default App;
