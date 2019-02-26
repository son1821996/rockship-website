import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

class NewsThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          id: 1,
          img: './img/news.jpg',
          title: 'Lorem ipsum dolor sit amet',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tempor arcu ut viverra. Maecenas nec odio sem. Ut feugiat leo nisl, a semper erat convallis sed. Nunc rhoncus posuere elementum. Vivamus lacinia ex felis, ac porttitor lacus vestibulum sed. ',
        },
        {
          id: 2,
          img: './img/news.jpg',
          title: 'Lorem ipsum dolor sit amet',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tempor arcu ut viverra. Maecenas nec odio sem. Ut feugiat leo nisl, a semper erat convallis sed. Nunc rhoncus posuere elementum. Vivamus lacinia ex felis, ac porttitor lacus vestibulum sed. ',
        },
        {
          id: 3,
          img: './img/news.jpg',
          title: 'Lorem ipsum dolor sit amet',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tempor arcu ut viverra. Maecenas nec odio sem. Ut feugiat leo nisl, a semper erat convallis sed. Nunc rhoncus posuere elementum. Vivamus lacinia ex felis, ac porttitor lacus vestibulum sed. ',
        },
        {
          id: 4,
          img: './img/news.jpg',
          title: 'Lorem ipsum dolor sit amet',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tempor arcu ut viverra. Maecenas nec odio sem. Ut feugiat leo nisl, a semper erat convallis sed. Nunc rhoncus posuere elementum. Vivamus lacinia ex felis, ac porttitor lacus vestibulum sed. ',
        },
        {
          id: 5,
          img: './img/news.jpg',
          title: 'Lorem ipsum dolor sit amet',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tempor arcu ut viverra. Maecenas nec odio sem. Ut feugiat leo nisl, a semper erat convallis sed. Nunc rhoncus posuere elementum. Vivamus lacinia ex felis, ac porttitor lacus vestibulum sed. ',
        },
        {
          id: 6,
          img: './img/news.jpg',
          title: 'Lorem ipsum dolor sit amet',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tempor arcu ut viverra. Maecenas nec odio sem. Ut feugiat leo nisl, a semper erat convallis sed. Nunc rhoncus posuere elementum. Vivamus lacinia ex felis, ac porttitor lacus vestibulum sed. ',
        },
      ],
    };
  }

  render() {
    const { news } = this.state;

    return (
      <Fragment>
        {news.map(newsItem => (
          <div className="thumbnail-container" key={newsItem.id}>
            <Link to="/news/details">
              <div className="content-overlay-news">
                <img alt="project-thumbnail" src={newsItem.img} />
              </div>
            </Link>
            <Link to="/news/details">
              <div className="thumbnail-title">
                {newsItem.title}
              </div>
            </Link>
            <div className="short-text">
              {newsItem.shortDescription}
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default NewsThumbnail;
