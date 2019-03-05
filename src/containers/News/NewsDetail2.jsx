import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';

import '../../stylesheets/News/NewsDetail.scss';

class NewsDetail2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acticle: [
        {
          id: 2,
          title: 'Giáng sinh an lành cùng Rockship ',
          shortDesc: 'Giáng sinh là dịp đặc biệt để mọi người cùng ngồi lại, nhìn về một năm đã qua và chia sẻ với nhau những thành quả mà mình đã đạt được.',
          publishedDate: 'Feb 20 2019',
        },
      ],
      // relatedArticle: [
      //   {
      //     id: 1,
      //     title: 'The Reason We Haven’t Found Planet Nine',
      //     img: '/img/article.jpg',
      //   },
      //   {
      //     id: 2,
      //     title: 'The Reason We Haven’t Found Planet Nine',
      //     img: '/img/article2.jpeg',
      //   },
      //   {
      //     id: 3,
      //     title: 'The Reason We Haven’t Found Planet Nine',
      //     img: '/img/article3.jpg',
      //   },
      // ],
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
    const { acticle, width } = this.state;
    return (
      <Fragment>
        {width <= 1024 ? <Navigation /> : ''}
        <section className="news-detail-container">
          <Sidebar />
          <div className="news-detail-section">
            <div className="logo-section">
              <img
                alt="news-logo"
                src="/img/news-logo.png"
                srcSet="/img/news-logo@2x.png 2x, /img/news-logo@3x.png 3x,"
              />
              <Link to="/news">
                <span>NEWS</span>
              </Link>
            </div>
            <div className="dash" style={{ backgroundColor: '#000000', height: '4px', width: '57px' }} />
            <div className="article-header">
              <div className="news-title">
                {acticle[0].title}
              </div>
              <div className="date">
                {acticle[0].publishedDate}
              </div>
            </div>
            <div className="short-description">
              {acticle[0].shortDesc}
            </div>
            {/* <img alt="big-img" src="/img/news2-bg.png" className="big-img" /> */}
            <div className="news-content">
              <div className="left-content">
                <div className="left-content-title title">
                Giáng sinh là dịp đặc biệt để mọi người cùng ngồi lại,
                nhìn về một năm đã qua và chia sẻ với nhau những thành quả mà mình đã đạt được.

                </div>
                <p>
                Giáng sinh là dịp đặc biệt để mọi người cùng ngồi lại,
                nhìn về một năm đã qua và chia sẻ với nhau những thành quả mà mình đã đạt được.
                </p>
                <p>
                Năm 2018 là một chặng đường dài nhiều chông gai nhưng cũng đầy
                trái ngọt đối với Rockship.
                Công ty đã mở rộng từ vỏn vẹn chỉ vài ba người ở thời điểm mới thành lập
                vào cuối năm 2017 tới hơn 20 người,
                đã hoàn thành nhiều dự án từ nhỏ tới lớn đáp ứng được yêu cầu cao của khách hàng
                và đã tự mình phát triển các sản phẩm đáp ứng nhu cầu của thị trường.
                </p>
                <p>
                Một lời chúc an lành và hạnh phúc gửi tới tất cả đồng nghiệp,
                các khách hàng thương mến đã đồng hành cùng Rockship trong một năm vừa qua
                </p>
              </div>
              {/* <div className="right-content">
                <div className="right-content-title title">
                Related Article
                </div>
                <div className="related-article-list">
                  {relatedArticle.map(item => (
                    <div className="related-article-item" key={item.id}>
                      <div className="related-article-title">
                        <Link to={`news/detail/${item.id}`}>
                          {item.title}
                        </Link>
                      </div>
                      <Link to={`news/detail/${item.id}`}>
                        <img className="related-article-img" src={item.img} alt="img" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>

    );
  }
}

export default NewsDetail2;
