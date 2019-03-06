import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

class PortfoliosThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: [
        {
          id: 1,
          img: '/img/livio-01.png',
          projectName: 'liveo',
          title: 'liveo',
          shortDescription: 'Liveo is a platform for celebrities to engage with their fans effectively. With Liveo, fan have access to exclusive contents of the stars. ',
        },
        {
          id: 2,
          img: '/img/iura-thumb.png',
          projectName: 'iura',
          title: 'iura',
          shortDescription: 'IURA is an application that allows users to connect with lawyers to get legal advice and answers for their problems. IURA integrates a customer relationship management system (CRM) which is a great tool for lawyers to build and maintain relationships with their clients. ',
        },
        {
          id: 3,
          img: '/img/heimdall.png',
          projectName: 'heimdall',
          title: 'heimdall',
          shortDescription: 'Heimdall is an ultimate tool developed for online and offline merchants to charge end user. ',
        },
        {
          id: 4,
          img: './img/peniex.png',
          projectName: 'peniex',
          title: 'peniex',
          shortDescription: 'Peniex is provide mechanism and flow for the user to deposit the coins and advertise to buy or sell on our platform. If the order matches, the buy side will do the direct bank transfer to the seller and the seller will confirm the transaction and the crypto currency will be transferred to the other client on-chains. ',
        },
        {
          id: 5,
          img: './img/binumi.png',
          projectName: 'bitnumi',
          title: 'bitnumi',
          shortDescription: 'Binumi is a new way to make amazing videos in seconds! Combine your own video moments with millions of professional video, image and music clips. Select from thousands of story ideas, choose a template and then personalize your video. And share your stories with family and friends. ',
        },
        {
          id: 6,
          img: './img/fitnfix.png',
          projectName: 'fitnfix',
          title: 'fitnfix',
          shortDescription: 'It’s a fun way to Discover high quality trainers and fitness activities with just one tap. Customized and Relevant activities are tailored for you based on your interests and goals. Working out has never been so much fun when you can “socialize” about it as well.',
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
            <Link to={`portfolio/${portfolioItem.title}`}>
              <div className="content-overlay-portfolio">
                <img alt="project-thumbnail" src={portfolioItem.img} />
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">{portfolioItem.projectName}</h3>
                </div>
              </div>
            </Link>
            <Link to={`portfolio/${portfolioItem.title}`}>
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
