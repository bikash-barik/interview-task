import React from "react";
import Herosection from "../components/Herosection";
import Rooms from "../components/Rooms";
import Sortbox from "../components/Sortbox";
import Footer from "../components/Footer";
import Label from "../components/Label";
import PriceRangeSlider from "../components/PriceRangeSlider";


export default function HomePage() {
  return (
    <div className="w-full">
      <Herosection />
      <Label />
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
  );
}
