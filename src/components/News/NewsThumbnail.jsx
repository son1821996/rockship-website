import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

class NewsThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          id: 1,
          img: '/img/logo3.png',
          title: 'Rockship ra mắt nền tảng học tập trực tuyến Etown',
          shortDescription: 'Ngày 24 - 26/8/2018, Rockship đã kết hợp cùng Mạng lưới Khởi nghiệp trẻ Việt Nam VYE cho ra mắt nền tảng học tập và đào tạo trực tuyến mang tên Etown. ',
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
