import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './containers/Home';
import ContactContainer from './containers/ContactContainer';
import News from './containers/News';
import PortfolioContainer from './containers/PortfolioContainer';
import PortfolioDetails from './containers/PortfolioDetail';
import NewsDetail from './containers/NewsDetail';
import Career from './containers/Career';
import CareerDetail from './containers/CareerDetail';

// eslint-disable-next-line react/prefer-stateless-function
export default class Routes extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={ContactContainer} />
          <Route exact path="/news" component={News} />
          <Route exact path="/news/details" component={NewsDetail} />
          <Route exact path="/portfolio" component={PortfolioContainer} />
          <Route exact path="/portfolio/details" component={PortfolioDetails} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/career/back-end/details" component={CareerDetail} />
          <Route exact path="/career/ios/details" component={CareerDetail} />
          <Route exact path="/career/android/details" component={CareerDetail} />
          <Route exact path="/career/front-end/details" component={CareerDetail} />
        </Switch>
      </Router>
    );
  }
}
