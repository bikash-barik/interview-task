import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAnglesLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import "./product.css";
import roomData from "../Data/room";

const Rooms = () => {
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      // Simulating asynchronous data fetching
      // You can replace this with your actual data fetching logic
      // e.g., using fetch, axios, etc.
      const data = await import("../Data/room");
      setRoom(data.default);
    };

    fetchRoomData();
  }, []);

  if (!room) {
    // Loading state or error handling can be added here
    return <div>Loading...</div>;
  }

  const mainSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    horizontal: true,
    horizontalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const stripSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const mainSliderRef = React.createRef();
  const stripSliderRef = React.createRef();

  const handleMainSliderNext = () => {
    mainSliderRef.current.slickNext();
    stripSliderRef.current.slickNext();
  };

  const handleMainSliderPrev = () => {
    mainSliderRef.current.slickPrev();
    stripSliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="box">
        <div className="product-container">
          <div className="main-slider">
            <Slider ref={mainSliderRef} {...mainSliderSettings}>
              {room.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Room ${index + 1}`} />
                </div>
              ))}
            </Slider>
            <div className=" gap-10">
              <button
                onClick={handleMainSliderNext}
                className="mt-2 ml-20 text-center px-2 py-2 bg-red-600 border border-red-600 text-white text-xl font-bold rounded hover:bg-transparent hover:text-red-600 hover:border-red-600 transition-all duration-75"
              >
                <FaAngleRight />
              </button>
              <button
                onClick={handleMainSliderPrev}
                className="px-2 py-2 ml-20 bg-red-600 border border-red-600 text-white text-xl font-bold rounded hover:bg-transparent hover:text-red-600 hover:border-red-600"
              >
                <FaAngleLeft />
              </button>
            </div>
          </div>
          <div className="strip-slider">
            <Slider ref={stripSliderRef} {...stripSliderSettings}>
              {room.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Room ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="details-container">
          <div className="description">
            <h2>{room.name}</h2>
            <a href="/">View More</a>
          </div>
          <div className="view2">
            <div className="distance">
              {room.description}
              <img src={room.icon} alt=""></img>
              <p>5.9 KM</p>
            </div>
          </div>
          <span className="lorem">{room.description}</span>
          <div className="distance" id="scrn">
            <img src={room.icon} alt=""></img>
            <p>5.9 KM</p>
          </div>
          <div className="rating">
            <img src={room.star} alt="" />
            <span className="spn1">(2987 Rating)</span>
            <span className="spn2">Excellent</span>
          </div>
          <div className="feature">
            <img className="ac" src={room.ac} alt=""></img>
            <img className="tv" src={room.tv} alt=""></img>
            <img className="recliner" src={room.recliner} alt=""></img>
            <img className="wifi" src={room.wifi} alt=""></img>
            <span>+5 More</span>
          </div>
          <div className="price-desc">
            <div className="price">
              <p className="rate">{room.rate}</p>
              <span className="disratre">{room.price}</span>
              <span className="discount">{room.discount}</span>
              <button className="button-2">Book Now</button>
            </div>
            <span className="desc">Per Room Per Night</span>
          </div>
        </div>
      </div>
      <hr className="line-after-card" />
    </>
  );
};

const App = () => {
  // Simulate an array of room data for 6 cards
  const roomsDataArray = Array.from({ length: 6 }, (_, index) => ({
    ...roomData,
    name: `Room ${index + 1}`,
  }));

  return (
    <div>
      {roomsDataArray.map((room, index) => (
        <Rooms key={index} />
      ))}
    </div>
  );
};

export default App;
