import React from "react";
import "./ZoomImage.css"; // Make sure to create this CSS file

const ImageContentSection = ({ imageUrl, text }) => {
  return (
    <>
      <div className="zoom-image-container">
        <div className="image-wrapper">
          <img src={imageUrl} alt="Zoomed Image" className="zoom-image" />
          <div className="overlay"></div>
          <div className="text-overlay">
            <p className="text">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageContentSection;
