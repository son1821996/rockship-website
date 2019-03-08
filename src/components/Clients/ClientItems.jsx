import React, { Component, Fragment } from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


class ClientItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientInfo: [
        {
          id: '01',
          name: 'Pan Hyuk',
          position: 'CEO at meta.us',
          quote: 'Rockship helped us with the development of our frontend for meta.us. I have found them to be flexible and willing to go the extra mile in meeting client needs. We were in the last weeks of getting our product ready to launch and Rockship quickly committed more manpower to help us achieve our goal, even going so far as working on weekends with us.',
        },
        {
          id: '02',
          name: 'Lubosek Hnilo',
          position: 'CEO at meta.us',
          quote: 'Rockship helped us with the development of our frontend for meta.us. I have found them to be flexible and willing to go the extra mile in meeting client needs. We were in the last weeks of getting our product ready to launch and Rockship quickly committed more manpower to help us achieve our goal, even going so far as working on weekends with us.',
        },
      ],
    };
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { clientInfo } = this.state;
    return (
      <Fragment>
        <Carousel
          showThumbs={false}
          showIndicators={false}
          infiniteLoop
          showStatus={false}
          autoPlay
        >
          <div className="clients-quote">
            <div className="quote-item">
              <div className="number">
                01
              </div>
              <p>
              Rockship helped us with the development of our frontend for meta.us.
              I have found them to be flexible and willing to go the
              extra mile in meeting client needs.
              We were in the last weeks of getting our product ready
              to launch and Rockship quickly committed more
              manpower to help us achieve our goal, even going so far
              as working on weekends with us.
              </p>
              <div className="clients-info">
                <img src="/img/potrait.png" alt="clients-img" className="clients-img" />
                <div className="clients-details">
                  <div className="clients-name">
                  Alan Chou
                  </div>
                  <div className="clients-position">
                  CEO at meta.us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
        {/* <div className="clients-quote">
          {clientInfo.map(item => (
            <div>
              <div className="quote-item" key={item.id}>
                <div className="number">
                  {item.id}
                </div>
                <p>
                  {item.quote}
                </p>
                <div className="clients-info">
                  <img src="./img/potrait.jpeg" alt="clients-img" className="clients-img" />
                  <div className="clients-details">
                    <div className="clients-name">
                      {item.name}
                    </div>
                    <div className="clients-position">
                      {item.position}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </Fragment>
    );
  }
}

export default ClientItems;
