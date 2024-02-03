import React from "react";
import ZoomImage from "./ImageContentSection"; // Adjust the path accordingly
import Room from "../assets/Room.png";
import GalleryHead from "./GalleryHead";
import Footer from "./Footer";


const ImageGrid = () => {
  // An array of image URLs
  const imageUrls = [
    "https://gracious-panini-f06fc2.netlify.app/static/media/Gallery1.da448af8.png",
    "https://gracious-panini-f06fc2.netlify.app/static/media/Gallery2.e9175190.png",
    "https://gracious-panini-f06fc2.netlify.app/static/media/Gallery3.a35f2d5b.png",
    "https://gracious-panini-f06fc2.netlify.app/static/media/Gallery4.8f4313ba.png",
    "https://gracious-panini-f06fc2.netlify.app/static/media/Gallery5.7afe2e59.png",
    "https://gracious-panini-f06fc2.netlify.app/static/media/Gallery6.47391084.png",
    "https://gracious-panini-f06fc2.netlify.app/static/media/Gallery7.cb8ffaaf.png",
    "https://gracious-panini-f06fc2.netlify.app/static/media/Gallery8.170e9a9e.png",
    "https://gracious-panini-f06fc2.netlify.app/static/media/Gallery9.305773d0.png",
  ];

  return (
    <>
     <GalleryHead/>
      <div className="image-grid">
        {imageUrls.map((imageUrl, index) => (
          <ZoomImage
            key={index}
            imageUrl={imageUrl}
            text={`Image ${index + 1}`}
          />
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default ImageGrid;
