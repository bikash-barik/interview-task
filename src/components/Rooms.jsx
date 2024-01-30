import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import roomData from "../data/room";

const Rooms = () => {
    const [room, setRoom] = useState(null);

    useEffect(() => {
      const fetchRoomData = async () => {
        const data = await import('../data/room');
        setRoom(data.default);
      };
  
      fetchRoomData();
    }, []);
  
    if (!room) {
      // Loading state or error handling can be added here
      return <div>Loading...</div>;
    }
  
    const settings = {
    //   dots: true,
      infinite: true,
      speed: 50,
      slidesToShow: 1,
      slidesToScroll: 1,
      horizontal: true,
      horizontalSwiping: true,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <div className="product-container">
        <div className="main-slider">
          <Slider {...settings}>
            {room.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Room ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="details-container">
          <h2>{room.name}</h2>
          <p>{room.description}</p>
          <ul>
            <li>Capacity: {room.capacity}</li>
            <li>Size: {room.size}</li>
            <li>Price: ${room.price} per night</li>
          </ul>
        </div>
      </div>
  );
};

export default Rooms;
