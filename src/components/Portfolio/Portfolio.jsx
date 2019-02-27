import React, { Component } from 'react';

import '../../stylesheets/Portfolio/Portfolio.scss';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 1,
          img: './img/work.png',
          title: 'Liveo Streaming App',
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
      <section className="work-section">
        <div className="work-container">
          {projects.map(project => (
            <div className="work-content">
              <div className="project-img">
                <img alt="project-img" src={project.img} />
              </div>
              <div className="project-details">
                <div className="dash" style={{ backgroundColor: '#ffffff', height: '4px', width: '60px' }} />
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
        </div>
      </section>
    );
  }
}

export default Work;
