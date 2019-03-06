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
import Liveo from './containers/Portfolio/Liveo';
import Iura from './containers/Portfolio/Iura';
import Peniex from './containers/Portfolio/Peniex';
import NewsDetail from './containers/News/NewsDetail';
import NewsDetail2 from './containers/News/NewsDetail2';
import NewsDetail3 from './containers/News/NewsDetail3';
import Career from './containers/Career';
import CareerDetail from './containers/CareerDetail';
import ApplicationPage from './containers/ApplicationPage';

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
          <Route exact path="/news/details/1" component={NewsDetail} />
          <Route exact path="/news/details/2" component={NewsDetail2} />
          <Route exact path="/news/details/3" component={NewsDetail3} />
          <Route exact path="/portfolio" component={PortfolioContainer} />
          <Route exact path="/portfolio/liveo" component={Liveo} />
          <Route exact path="/portfolio/iura" component={Iura} />
          <Route exact path="/portfolio/peniex" component={Peniex} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/career/back-end/details" component={CareerDetail} />
          <Route exact path="/career/ios/details" component={CareerDetail} />
          <Route exact path="/career/android/details" component={CareerDetail} />
          <Route exact path="/career/front-end/details" component={CareerDetail} />
          <Route exact path="/career/apply-page" component={ApplicationPage} />
        </Switch>
      </Router>
    );
  }
}
