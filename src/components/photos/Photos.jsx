import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Photos.css'

const Photos = () => {
  const images = [
    { src: "ring.jpeg", description: "Ring Ceremony" },
    { src: "seal.jpeg", description: "Senior year" },
    { src: "ti.jpeg", description: "Summer internship at Texas Instruments" },
    { src: "crawfish.jpeg", description: "Delta Sigma Pi" },
    { src: "basketball.jpeg", description: "TTU Basketball" },
    { src: "gameday.JPG", description: "Football Gameday" },
  ];

  return (
    <div className="carousel-section">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        dynamicHeight={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} className="custom-arrow prev-arrow">
              <i className="fas fa-chevron-left"></i>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} className="custom-arrow next-arrow">
              <i className="fas fa-chevron-right"></i>
            </button>
          )
        }
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={`Slide ${index}`} />
            <p className="legend">{image.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Photos;
