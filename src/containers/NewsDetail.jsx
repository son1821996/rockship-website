import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

import '../stylesheets/News/NewsDetail.scss';

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acticle: [
        {
          title: 'Rockship ra mắt nền tảng học tập trực tuyến Etown.',
          shortDesc: 'Ngày 24 - 26/8/2018, Rockship đã kết hợp cùng Mạng lưới Khởi nghiệp trẻ Việt Nam VYE cho ra mắt nền tảng học tập và đào tạo trực tuyến mang tên Etown. ',
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
            <img alt="big-img" src="/img/mac.jpg" className="big-img" />
            <div className="news-content">
              <div className="left-content">
                <div className="left-content-title title">
                Propaganda App Tops Apple’s App Store in China
                </div>
                <p>
                Ngày 24 - 26/8/2018, Rockship đã kết hợp cùng Mạng lưới Khởi nghiệp trẻ Việt
                Nam VYE cho ra mắt nền tảng học tập và đào tạo trực tuyến mang tên Etown.
                </p>
                <p>
                Etown được xây dựng dựa trên công nghệ live-streaming mới nhất
                cho phép cải tiến việc dạy và học,
                nâng cao tính tương tác trong các bài học,
                giúp cho học viên sử dụng nền tảng tiếp thu kiến thức một cách dễ dàng và hiệu quả.
                </p>
                <p>
                Một điểm mạnh của Etown đó là chất lượng của các khóa học được
                chú trọng ngay từ ban đầu,
                để trở thành giảng viên và mở các khóa học trên nền tảng,
                các giáo viên sẽ phải đăng ký và chờ xét duyệt từ đội ngũ của Etown.
                Etown cũng hướng tới giáo dục mang tính chất quốc tế
                khi kết hợp cùng với rất nhiều giáo sư,
                giảng viên từ các trung tâm đào
                tạo nổi tiếng trên thế giới.
                </p>
                <p>
                Mong rằng, Etown ra mắt sẽ mở ra một cơ hội mới tiếp cận với giáo dục trực
                tuyến chất lượng cao cho đông đảo học viên tại Việt Nam
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
                        <Link to="news/detail">
                          {item.title}
                        </Link>
                      </div>
                      <Link to="news/detail">
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

export default NewsDetail;
