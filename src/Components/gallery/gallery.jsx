import React from "react";
import img1Large from "../../assets/01-large.jpg"; 
import img1Small from "../../assets/01-small.jpg";
import img2Large from "../../assets/02-large.jpg";
import img2Small from "../../assets/02-small.jpg";
import img3Large from "../../assets/03-large.jpg";
import img3Small from "../../assets/03-small.jpg";
import img4Large from "../../assets/04-large.jpg";
import img4Small from "../../assets/04-small.jpg";
import img5Large from "../../assets/05-large.jpg";
import img5Small from "../../assets/05-small.jpg";
import img6Large from "../../assets/06-large.jpg";
import img6Small from "../../assets/06-small.jpg";
import img7Large from "../../assets/07-large.jpg";
import img7Small from "../../assets/07-small.jpg";
import img8Large from "../../assets/08-large.jpg";
import img8Small from "../../assets/08-small.jpg";
import img9Large from "../../assets/09-large.jpg";
import img9Small from "../../assets/09-small.jpg";
import './gallery.css';

const Gallery = (props) => {
  const images = [
    { title: "", largeImage: img1Large, smallImage: img1Small },
    { title: "", largeImage: img2Large, smallImage: img2Small },
    { title: "", largeImage: img3Large, smallImage: img3Small },
    { title: "", largeImage: img4Large, smallImage: img4Small },
    { title: "", largeImage: img5Large, smallImage: img5Small },
    { title: "", largeImage: img6Large, smallImage: img6Small },
    { title: "", largeImage: img7Large, smallImage: img7Small },
    { title: "", largeImage: img8Large, smallImage: img8Small },
    { title: "", largeImage: img9Large, smallImage: img9Small },
  ];

  return (
    <div id="gallery" className={`gallery-section ${props.theme}`}>
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
        </div>
        <div className="gallery-items">
          {images.map((d, i) => (
            <div key={`${d.title}-${i}`} className="gallery-item">
              <a href={d.largeImage} target="_blank" rel="noreferrer">
                <img src={d.smallImage} alt={d.title} />
              </a>
              <h4>{d.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
