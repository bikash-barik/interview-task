import React from "react";
import {
    HerosectionHeadingGallery,
    HerosectionSubHeadingGallery,
  } from "../Textfiles/webiste-Content";
  import "./gallery.css"

const GalleryHead = () => {
  return (
    <div className="max-w-7xl md:px-0 px-4">
      <br></br>
      <br></br>
      <p className="headingg">
        {HerosectionSubHeadingGallery}
      </p>
      <h1 className="subheadingg">
        {HerosectionHeadingGallery}
      </h1>
    </div>
  );
};

export default GalleryHead;


