import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

class PortfoliosThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: [
        {
          id: 1,
          img: './img/work.jpg',
          projectName: 'Liveo',
          title: 'Lorem ipsum dolor sit amet',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tempor arcu ut viverra. Maecenas nec odio sem. Ut feugiat leo nisl, a semper erat convallis sed. Nunc rhoncus posuere elementum. Vivamus lacinia ex felis, ac porttitor lacus vestibulum sed. ',
        },
        {
          id: 2,
          img: './img/work.jpg',
          projectName: 'Liveo',
          title: 'Lorem ipsum dolor sit amet',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tempor arcu ut viverra. Maecenas nec odio sem. Ut feugiat leo nisl, a semper erat convallis sed. Nunc rhoncus posuere elementum. Vivamus lacinia ex felis, ac porttitor lacus vestibulum sed. ',
        },
        {
          id: 3,
          img: './img/work.jpg',
          projectName: 'Liveo',
          title: 'Lorem ipsum dolor sit amet',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tempor arcu ut viverra. Maecenas nec odio sem. Ut feugiat leo nisl, a semper erat convallis sed. Nunc rhoncus posuere elementum. Vivamus lacinia ex felis, ac porttitor lacus vestibulum sed. ',
        },
        {
          id: 4,
          img: './img/work.jpg',
          projectName: 'Liveo',
          title: 'Lorem ipsum dolor sit amet',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tempor arcu ut viverra. Maecenas nec odio sem. Ut feugiat leo nisl, a semper erat convallis sed. Nunc rhoncus posuere elementum. Vivamus lacinia ex felis, ac porttitor lacus vestibulum sed. ',
        },
        {
          id: 5,
          img: './img/work.jpg',
          projectName: 'Liveo',
          title: 'Lorem ipsum dolor sit amet',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tempor arcu ut viverra. Maecenas nec odio sem. Ut feugiat leo nisl, a semper erat convallis sed. Nunc rhoncus posuere elementum. Vivamus lacinia ex felis, ac porttitor lacus vestibulum sed. ',
        },
        {
          id: 6,
          img: './img/work.jpg',
          projectName: 'Liveo',
          title: 'Lorem ipsum dolor sit amet',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tempor arcu ut viverra. Maecenas nec odio sem. Ut feugiat leo nisl, a semper erat convallis sed. Nunc rhoncus posuere elementum. Vivamus lacinia ex felis, ac porttitor lacus vestibulum sed. ',
        },
      ],
    };
  }


  render() {
    const { portfolios } = this.state;

    return (
      <Fragment>
        {portfolios.map(portfolioItem => (
          <div className="thumbnail-container" key={portfolioItem.id}>
            <Link to="/portfolio/details">
              <div className="content-overlay-portfolio">
                <img alt="project-thumbnail" src={portfolioItem.img} />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">{portfolioItem.projectName}</h3>
                </div>
              </div>
            </Link>
            <Link to="/portfolio/details">
              <div className="thumbnail-title">
                {portfolioItem.title}
              </div>
            </Link>
            <div className="short-text">
              {portfolioItem.shortDescription}
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default PortfoliosThumbnail;
