import React from "react";
import About_image from '../../assets/about.png';
import './about.css'; // Import the CSS file for About Us styling

const About = ({ theme, data }) => {
  return (
    <div id="about" className={theme}>
      <div className="about-container">
        <div className="about-image">
          <img src={About_image} alt="About" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
         <p>
         Welcome to MyStore, your premier destination for discovering top-quality
          products and exceptional service. At MyStore, we pride ourselves on 
          curating a diverse selection of goods that cater to your every need, 
          from the latest gadgets to everyday essentials. Our dedicated team is
           committed to providing a seamless shopping experience, combining convenience 
           with personalized customer care. Whether you're searching for unique finds or
            everyday favorites, MyStore is here to ensure you find exactly what you're 
            looking for with ease and satisfaction. Join us on our journey to redefine 
            online shopping, where quality, value, and customer satisfaction are always our top priorities.


         </p>
        </div>
      </div>
    </div>
  );
};

export default About;
