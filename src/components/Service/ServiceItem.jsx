import React, { Component } from 'react';

class ServiceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listService: [
        {
          id: 1,
          icon: './img/service_i1.png',
          title: 'Software customization',
          description: 'Whether you aim to use blockchain to simplify a part of your value chain, or create an ecommerce ecosystem, our engineers know all key tech stacks needed to help you on this way.',
        },
        {
          id: 2,
          icon: './img/service_i2.png',
          title: 'ERP Odoo',
          description: 'The intent of any business for implementing ERP is to transform its business processes. With right implementation, a business enhances productivity, speed up processes and save cost. ',
        },
        {
          id: 3,
          icon: './img/service_i3.png',
          title: 'Standing Team ',
          description: 'A solid team isn’t easy to find, but with Rockship’s IT standing team services you can control every aspect of your development, while finding talent that you may not have access to on your local market. ',
        },
        {
          id: 4,
          icon: './img/service_i4.png',
          title: 'Data processing',
          description: 'Rockship helps you manage your information in a more efficient way, enabling you to make strategic and critical decisions. Data Processing that includes Data Engineering, Data Science and Deployment of ML model to production ',
        },
      ],
    };
  }

  render() {
    const { listService } = this.state;
    return (
      <div className="service-list">
        {listService.map(item => (
          <div className="service-item" key={item.id}>
            <img alt="service-images" src={item.icon} />
            <h1 className="title">
              {item.title}
            </h1>
            <p>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default ServiceItem;
