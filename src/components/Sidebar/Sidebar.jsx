import React from 'react';

import object from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

import '../../stylesheets/Sidebar/Sidebar.scss';

const Sidebar = (props) => {
  const { match } = props;

  let linkBack;
  if (match.url === '/news/details') {
    linkBack = '/news';
  } else if (match.url === '/portfolio/details') {
    linkBack = '/portfolio';
  } else if (match.url === '/career/back-end/details') {
    linkBack = '/career';
  } else if (match.url === '/career/ios/details') {
    linkBack = '/career';
  } else if (match.url === '/career/android/details') {
    linkBack = '/career';
  } else if (match.url === '/career/front-end/details') {
    linkBack = '/career';
  }

  return (
    <Link to={linkBack}>
      <div className="sidebar-container">
        <Link to="/">
          <img src="/img/logo.png" alt="logo" />
        </Link>
        <KeyboardBackspace style={{ color: '#ffffff' }} />
      </div>
    </Link>
  );
};

Sidebar.propTypes = {
  match: object.isRequired,
};

export default withRouter(Sidebar);
