import React, { Component, Fragment } from 'react';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../stylesheets/Portfolio/Portfolio.scss';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          img: '/img/work.png',
          title: 'Liveo Streaming App',
          description: 'Liveo is a platform for celebrities to engage with their fans effectively. With Liveo, fan have access to exclusive contents of the stars.',
          responsibility: 'Backend/API, Architecture, iOS',
          tech: 'Python, Swift, Nginx, Stella',
        },
        {
          id: 2,
          img: '/img/iura.png',
          title: 'IURA',
          description: 'IURA is an application that allows users to connect with lawyers to get legal advice and answers for their problems. IURA integrates a customer relationship management system (CRM) which is a great tool for lawyers to build and maintain relationships with their clients.',
          responsibility: 'Backend/API, Architecture, iOS',
          tech: 'Python, Swift, Java',
        },
        {
          id: 3,
          img: '/img/work.png',
          title: 'Heimdall',
          description: 'Heimdall is an ultimate tool developed for online and offline merchants to charge end user. ',
          responsibility: 'iOS, Android, Admin Dashboard, backend development, landing website',
          tech: 'Golang, ReactJS, Docker, CI/CD',
        },
        {
          id: 4,
          img: '/img/work.png',
          title: 'PENIEX',
          description: 'Peniex is provide mechanism and flow for the user to deposit the coins and advertise to buy or sell on our platform. If the order matches, the buy side will do the direct bank transfer to the seller and the seller will confirm the transaction and the crypto currency will be transferred to the other client on-chains. ',
          responsibility: 'iOS, Android, Admin Dashboard, backend development, landing website',
          tech: 'Docker, MongoDB',
        },
      ],
    };
  }

  render() {
    const { projects } = this.state;
    return (
      <Fragment>
        <section className="work-section">
          <div className="work-container">
            <Carousel
              showThumbs={false}
              showIndicators={false}
              infiniteLoop
              showStatus={false}
              transitionTime={500}
              // autoPlay
            >
              {projects.map(project => (
                <div className="work-content" key={project.id}>
                  <div className="project-img">
                    <img alt="project-img" src={project.img} />
                  </div>
                  <div className="project-details">
                    <div
                      className="dash"
                      style={{
                        backgroundColor: '#ffffff', height: '4px', width: '60px', marginLeft: '1px',
                      }}
                    />
                    <div className="section-title">
                      Work
                    </div>
                    <div className="project-name">
                      {project.title}
                    </div>
                    <div className="project-description">
                      {project.description}
                    </div>
                    <div className="description-item">
                      <span>Responsibility: </span>
                      {project.responsibility}
                    </div>
                    <div className="description-item">
                      <span>
                    Technology:&nbsp;
                      </span>
                      {project.tech}
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Work;
