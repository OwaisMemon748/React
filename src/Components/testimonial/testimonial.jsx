import React from "react";
import './testimonial.css';

// Importing images
import img01 from '../../assets/01.jpg';
import img02 from '../../assets/02.jpg';
import img03 from '../../assets/03.jpg';
import img04 from '../../assets/04.jpg';
import img05 from '../../assets/05.jpg';
import img06 from '../../assets/06.jpg';

const Testimonial = () => {
  const testimonials = [
    { img: img01, text: 'Amazing service, exceeded expectations!', name: 'Client 1' },
    { img: img02, text: 'Great experience, will come back!', name: 'Client 2' },
    { img: img03, text: 'Highly recommend, fantastic support.', name: 'Client 3' },
    { img: img04, text: 'Could not be more satisfied with the result.', name: 'Client 4' },
    { img: img05, text: 'Top-notch service and excellent quality.', name: 'Client 5' },
    { img: img06, text: 'Wonderful work, very happy with the results.', name: 'Client 6' },
  ];

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        {/* Duplicate the set of testimonials for a seamless loop */}
        <div className="testimonial-slider">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial.img} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
                <div className="testimonial-meta">- {testimonial.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
