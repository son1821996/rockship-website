import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

import '../stylesheets/News/NewsDetail.scss';

class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acticle: [
        {
          title: 'Liveo is a platform for celebrities to engage with their fans effectively. With Liveo, fan have access to exclusive contents of the stars.',
          shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales est non magna ultrices interdum nec a tellus. Praesent rutrum scelerisque metus. Pellentesque suscipit porttitor luctus. Sed nisi dolor, mattis nec finibus in, sollicitudin et ligula',
          publishedDate: 'Feb 20 2019',
        },
      ],
      relatedArticle: [
        {
          id: 1,
          title: 'The Reason We Haven’t Found Planet Nine',
          img: '../img/article.jpg',
        },
        {
          id: 2,
          title: 'The Reason We Haven’t Found Planet Nine',
          img: '../img/article2.jpeg',
        },
        {
          id: 3,
          title: 'The Reason We Haven’t Found Planet Nine',
          img: '../img/article3.jpg',
        },
      ],
    };
  }

  render() {
    const { acticle, relatedArticle } = this.state;
    return (
      <Fragment>
        <section className="news-detail-container">
          <Sidebar />
          <div className="news-detail-section">
            <div className="logo-section">
              <img
                alt="news-logo"
                src="../img/news-logo.png"
                srcSet="../img/news-logo@2x.png 2x, ../img/news-logo@3x.png 3x,"
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
            <img alt="big-img" src="../img/mac.jpg" className="big-img" />
            <div className="news-content">
              <div className="left-content">
                <div className="left-content-title title">
                Propaganda App Tops Apple’s App Store in China
                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut euismod nec odio facilisis gravida. Donec at rhoncus leo.
                Donec pharetra fermentum justo, id consectetur elit.
                Nullam porttitor volutpat ultricies.
                tincidunt neque sapien, eu mattis enim accumsan pharetra.
                Ut tempus, eros at ultrices finibus, augue dolor tempus lacus, sit amet
                </p>
                <p>
                Phasellus sapien ligula, pellentesque ut ex in, malesuada dapibus eros.
                Nam in hendrerit purus, at congue massa. Fusce rutrum enim et ullamcorper placerat.
                Donec urna urna, fermentum vitae gravida nec, efficitur eget massa.
                Duis lobortis aliquam tempor.
                Donec posuere velit ac magna venenatis, mattis faucibus nunc dictum.
                Sed cursus dapibus nisl, ac suscipit tortor pulvinar eget.
                Phasellus est diam, tempor id mi sed, vestibulum tempus turpis.
                Integer id diam eu lorem facilisis varius. Proin placerat eget dui vel tincidunt.
                Nam iaculis vitae tellus at egestas. Proin scelerisque, ante at eleifend lacinia,
                tellus odio molestie nulla, et imperdiet magna mauris vel nisi.
                Nulla aliquam odio ut justo auctor eleifend. Nulla suscipit,
                sapien non interdum mollis,
                odio orci dictum nisi, et hendrerit lorem lacus vitae leo.
                </p>
                <p>
                Phasellus sapien ligula, pellentesque ut ex in, malesuada dapibus eros.
                Nam in hendrerit purus, at congue massa. Fusce rutrum enim et ullamcorper placerat.
                Donec urna urna, fermentum vitae gravida nec, efficitur eget massa.
                Duis lobortis aliquam tempor.
                Donec posuere velit ac magna venenatis, mattis faucibus nunc dictum.
                Sed cursus dapibus nisl, ac suscipit tortor pulvinar eget.
                Phasellus est diam, tempor id mi sed, vestibulum tempus turpis.
                Integer id diam eu lorem facilisis varius. Proin placerat eget dui vel tincidunt.
                Nam iaculis vitae tellus at egestas. Proin scelerisque, ante at eleifend lacinia,
                tellus odio molestie nulla, et imperdiet magna mauris vel nisi.
                Nulla aliquam odio ut justo auctor eleifend. Nulla suscipit,
                sapien non interdum mollis,
                odio orci dictum nisi, et hendrerit lorem lacus vitae leo.
                </p>
                <p>
                Phasellus sapien ligula, pellentesque ut ex in, malesuada dapibus eros.
                Nam in hendrerit purus, at congue massa. Fusce rutrum enim et ullamcorper placerat.
                Donec urna urna, fermentum vitae gravida nec, efficitur eget massa.
                Duis lobortis aliquam tempor.
                Donec posuere velit ac magna venenatis, mattis faucibus nunc dictum.
                Sed cursus dapibus nisl, ac suscipit tortor pulvinar eget.
                Phasellus est diam, tempor id mi sed, vestibulum tempus turpis.
                Integer id diam eu lorem facilisis varius. Proin placerat eget dui vel tincidunt.
                Nam iaculis vitae tellus at egestas. Proin scelerisque, ante at eleifend lacinia,
                tellus odio molestie nulla, et imperdiet magna mauris vel nisi.
                Nulla aliquam odio ut justo auctor eleifend. Nulla suscipit,
                sapien non interdum mollis,
                odio orci dictum nisi, et hendrerit lorem lacus vitae leo.
                </p>
                <p>
                Phasellus sapien ligula, pellentesque ut ex in, malesuada dapibus eros.
                Nam in hendrerit purus, at congue massa. Fusce rutrum enim et ullamcorper placerat.
                Donec urna urna, fermentum vitae gravida nec, efficitur eget massa.
                Duis lobortis aliquam tempor.
                Donec posuere velit ac magna venenatis, mattis faucibus nunc dictum.
                Sed cursus dapibus nisl, ac suscipit tortor pulvinar eget.
                Phasellus est diam, tempor id mi sed, vestibulum tempus turpis.
                Integer id diam eu lorem facilisis varius. Proin placerat eget dui vel tincidunt.
                Nam iaculis vitae tellus at egestas. Proin scelerisque, ante at eleifend lacinia,
                tellus odio molestie nulla, et imperdiet magna mauris vel nisi.
                Nulla aliquam odio ut justo auctor eleifend. Nulla suscipit,
                sapien non interdum mollis,
                odio orci dictum nisi, et hendrerit lorem lacus vitae leo.
                </p>
                <p>
                Duis nulla velit, feugiat sed faucibus id, cursus in felis.
                Praesent quis quam quam. Mauris at leo lorem.
                Praesent nec tortor et libero vestibulum consequat. Aliquam erat volutpat.
                Aliquam arcu ligula, congue a nunc ac, vulputate faucibus ante.
                Quisque quis ligula sit amet sem viverra pharetra.
                Vivamus placerat nisl quis nisi pulvinar, vel cursus lectus varius.
                Aliquam tempor metus dui, ac porttitor libero cursus in.
                </p>
              </div>
              <div className="right-content">
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
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>

    );
  }
}

export default NewsDetail;
