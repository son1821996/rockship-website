import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Navigation/Navigation.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowSidebar: false,
    };
  }

  handleClickToShowSidebar = () => {
    const { isShowSidebar } = this.state;
    this.setState({
      isShowSidebar: !isShowSidebar,
    });
  }

  render() {
    const { isShowSidebar } = this.state;
    return (
      <Fragment>
        <div className="navigation">
          <div className="nav-left" style={{ display: 'flex' }}>
            <Link to="/"><img alt="logo" src="/img/logo.png" className="logo" /></Link>
            <ul className="navigation_list">
              <li className="nav_item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav_item">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav_item">
                <Link to="/news">News</Link>
              </li>
              <li className="nav_item">
                <a href="https://medium.com/rockship">Blog</a>
              </li>
              <li className="nav_item">
                <Link to="/career">Join us</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <Link to="/contact">Come say hi!</Link>
          </div>
        </div>
        <div className="navigation-mobile">
          <div className="nav-mobile-content">
            <div className="nav-left">
              <img
                alt="burger menu"
                src="/img/burger.png"
                srcSet="/img/burger@2x.png 2x, /img/burger@3x.png 3x,"
                onClick={this.handleClickToShowSidebar}
                style={{
                  transform: `${isShowSidebar ? 'translateX(540%)' : 'unset'}`,
                }}
              />
              <ul
                className="navigation_list"
                style={{
                  transform: `${isShowSidebar ? 'translateX(100%)' : 'unset'}`,
                }}
              >
                <li className="nav_item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav_item">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="nav_item">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav_item">
                  <Link to="/news">News</Link>
                </li>
                <li className="nav_item">
                  <a href="https://medium.com/rockship">Blog</a>
                </li>
                <li className="nav_item">
                  <Link to="/">Career</Link>
                </li>
              </ul>
            </div>
            <div className="nav-right" style={{ display: 'flex' }}>
              <Link to="/"><img alt="logo" src="/img/logo.png" className="logo" /></Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Navigation;
