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
          img: '/img/binumi.png',
          title: 'Binumi',
          description: 'Binumi is a new way to make amazing videos in seconds! Combine your own video moments with millions of professional video, image and music clips. Select from thousands of story ideas, choose a template and then personalize your video. And share your stories with family and friends. ',
          responsibility: 'Video processing.',
          tech: 'iOS',
        },
        {
          id: 4,
          img: '/img/fitnfix.png',
          title: 'FITNFIX',
          description: 'It’s a fun way to Discover high quality trainers and fitness activities with just one tap. Customized and Relevant activities are tailored for you based on your interests and goals. Working out has never been so much fun when you can “socialize” about it as well.',
          responsibility: 'Backend/API, Architecture, iOS.',
          tech: 'Objective-C, Python, MySQL & Redis, Messaging',
        },
        {
          id: 5,
          img: '/img/echo.jpg',
          title: 'Echo',
          description: 'ECHO is to allow you to post pictures/videos or do live streaming to accumulate Wave$/gifts which will translate into money when they cash out. They are also able to recruit subscribers which will give them a monthly/periodic income. Vice versa, users are able to use the app to send wave$ and gifts to their idols/stars.',
          responsibility: 'Backend/API, Architecture, iOS.',
          tech: 'API integration',
        },
        {
          id: 6,
          img: '/img/shotnote.jpg',
          title: 'SHOTNOTE',
          description: 'SHOT NOTE allows you to just shoot your handwritten notes with your camera, and the page will automatically adjust to fit perfectly on your screen. Store notes in the app, send them via e-mail or upload to Evernote to access them at will.',
          responsibility: 'Backend/API, Architecture, iOS.',
          tech: 'Image processing, API integration.',
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
