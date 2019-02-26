import React, { Component, Fragment } from 'react';

import NewsThumbnail from '../components/News/NewsThumbnail';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

import '../stylesheets/SubPage.scss';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          description: 'Liveo is a platform for celebrities to engage with their fans effectively. With Liveo, fan have access to exclusive contents of the stars.',
          responsibility: 'Backend/API, Architecture, iOS',
          tech: 'Python, Swift, Nginx, Stella',
        },
      ],
    };
  }

  render() {
    const { projects } = this.state;
    return (
      <Fragment>
        <Navigation />
        <section className="page-section">
          <div className="page-header">
            <div className="header-left" style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                className="dash"
                style={{
                  backgroundColor: '#ffffff', height: '4px', width: '57px',
                }}
              />
              <div className="title">
                news
              </div>
            </div>
            {projects.map(project => (
              <div className="project-description" key={project.id}>
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
            ))}
          </div>
          <div className="list-item">
            <NewsThumbnail />
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}

export default PortfolioContainer;
