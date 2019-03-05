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
          id: 3,
          title: 'Rockship Company Trip 2018',
          shortDesc: 'Đến hẹn lại lên, sau một năm làm việc cống hiến và nỗ lực, Rockship lại tổ chức company trip dành cho tất cả các thành viên trong công ty.',
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
            {/* <img alt="big-img" src="/img/news3.jpg" className="big-img" /> */}
            <div className="news-content">
              <div className="left-content">
                <div className="left-content-title title">
                Đến hẹn lại lên, sau một năm làm việc cống hiến và nỗ lực,
                Rockship lại tổ chức company trip dành cho tất cả các thành viên trong công ty.

                </div>
                <p>
                Đến hẹn lại lên, sau một năm làm việc cống hiến và nỗ lực,
                Rockship lại tổ chức company trip dành cho tất cả các thành viên trong công ty.
                </p>
                <p>
                Cân bằng giữa công việc và cuộc sống vẫn luôn là điều mà Rockship
                muốn truyền tải tới các thành viên, chỉ khi tinh thần thoải mái,
                mọi người trong team hiểu nhau thì làm việc mới hiệu quả.
                Chính vì vậy, mỗi năm 2 lần, công ty sẽ tổ chức các hoạt
                động vui chơi ngoài trời, hội trại,
                team building để
                nâng cao chất lượng đời sống tinh thần và làm thắt chặt
                tình đoàn kết của mọi thành viên.
                </p>
                <p>
                Năm nay, đảo Bình Ba ở Khánh Hòa được lựa chọn làm điểm tập kết
                cho đoàn quân Rockship bởi vẻ đẹp của biển xanh, mây trắng, nắng vàng.
                Mọi người đã có những giây phút bên nhau thật vui vẻ.
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
