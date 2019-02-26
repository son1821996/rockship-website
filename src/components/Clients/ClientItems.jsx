import React, { Component } from 'react';

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
    const { clientInfo } = this.state;
    return (
      <div className="clients-quote">
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
      </div>
    );
  }
}

export default ClientItems;
