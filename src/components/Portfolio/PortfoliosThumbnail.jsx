import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

class PortfoliosThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: [
        {
          id: 1,
          img: '/img/liveo-thumb.png',
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
          img: '/img/icon.png',
          projectName: 'ico',
          title: 'ico',
          shortDescription: 'ICO is a new format of raising funds for technology ventures. ICO will provide the people who believe in the technology to get early access to the product the venture intends to sell. Most of the tokens sold via ICO are usually utility tokens whereas end users can use it for the future service the company sets up. ',
        },
        {
          id: 4,
          img: '/img/heimdall.png',
          projectName: 'heimdall',
          title: 'heimdall',
          shortDescription: 'Heimdall is an ultimate tool developed for online and offline merchants to charge end user. ',
        },
        {
          id: 5,
          img: './img/peniex.png',
          projectName: 'peniex',
          title: 'peniex',
          shortDescription: 'Peniex is provide mechanism and flow for the user to deposit the coins and advertise to buy or sell on our platform. If the order matches, the buy side will do the direct bank transfer to the seller and the seller will confirm the transaction and the crypto currency will be transferred to the other client on-chains. ',
        },
        {
          id: 6,
          img: '/img/work.jpg',
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
