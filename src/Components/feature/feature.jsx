import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './feature.css';

const Features = ({ data, theme }) => {
  return (
    <div id="features" className={`text-center ${theme} feature`}>
      <div className="container">
        <div className="section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {data
            ? data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="feature-item">
                  <div className="feature-icon">
                    <FontAwesomeIcon icon={d.icon} size="3x" />
                  </div>
                  <div className="feature-text">
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default Features;
