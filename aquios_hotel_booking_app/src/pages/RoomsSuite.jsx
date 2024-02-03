import React from 'react'
import Herosection from "../components/Herosection";
import Rooms from "../components/Rooms";
import Sortbox from "../components/Sortbox";
import Footer from "../components/Footer";
import Label from "../components/Label";
import PriceRangeSlider from "../components/PriceRangeSlider";
import RanS from '../components/RanS';

const RoomsSuite = () => {
  return (
    <div className="w-full">
      <Herosection />
      <Label />
      <RanS/>
      <div className="w-full flex">
        <div className="w-30%">
          <PriceRangeSlider/>
          <Sortbox />
        </div>
        <div className="mr-10">
          <Rooms />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RoomsSuite;
