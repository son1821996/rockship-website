import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

class NewsThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          id: 1,
          img: '/img/Color.png',
          title: 'Rockship ra mắt nền tảng học tập trực tuyến Etown',
          shortDescription: 'Ngày 24 - 26/8/2018, Rockship đã kết hợp cùng Mạng lưới Khởi nghiệp trẻ Việt Nam VYE cho ra mắt nền tảng học tập và đào tạo trực tuyến mang tên Etown. ',
        },
        {
          id: 2,
          img: '/img/news2.png',
          title: 'Giáng sinh an lành cùng Rockship ',
          shortDescription: 'Giáng sinh là dịp đặc biệt để mọi người cùng ngồi lại, nhìn về một năm đã qua và chia sẻ với nhau những thành quả mà mình đã đạt được.',
        },
        {
          id: 3,
          img: '/img/news3.jpg',
          title: 'Rockship Company Trip 2018',
          shortDescription: 'Đến hẹn lại lên, sau một năm làm việc cống hiến và nỗ lực, Rockship lại tổ chức company trip dành cho tất cả các thành viên trong công ty.',
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
            <Link to={`/news/details/${newsItem.id}`}>
              <div className="content-overlay-news">
                <img alt="project-thumbnail" src={newsItem.img} />
              </div>
            </Link>
            <Link to={`/news/details/${newsItem.id}`}>
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
