import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faTruck, faCogs, faPaintBrush, faMobileAlt, faHeadset } from '@fortawesome/free-solid-svg-icons';
import './service.css';

const Service = () => {
  const serviceData = [
    { icon: faLaptopCode, name: 'Web Development', text: 'Building responsive and dynamic websites.' },
    { icon: faTruck, name: 'Logistics', text: 'Efficient and reliable transport services.' },
    { icon: faCogs, name: 'Technical Support', text: '24/7 maintenance and support for other comp.' },
    { icon: faPaintBrush, name: 'Graphic Design', text: 'Creative designs that stand out.' },
    { icon: faMobileAlt, name: 'App Development', text: 'Building mobile solutions for your business.' },
    { icon: faHeadset, name: 'Customer Support', text: 'Always available for customer and needs.' }
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {serviceData.map((d, i) => (
            <div key={i} className="col-md-4">
              <FontAwesomeIcon icon={d.icon} size="3x" className="service-icon"/>
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
