"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Data from "@/app/data.json"


export default function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,

  };
  const testData = Data.testimonials;


  return (

    <div className="slider">

      <Slider {...settings}>
        {
          testData.map((item, index) => (
            <div key={index} className="slide">
              <p>&quot;{item.text}&quot;</p>
              <p className="testAuth">{item.author}</p>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}
