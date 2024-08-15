"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


 

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    
  };
  
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slide">
          <p>
          "I saw Dr. Nick for my intake and i’ve spoken with Dr. Rachel on a few occasions. 
          They are great and the intake is very in depth. They have a beautiful space that is very serene.
           They focus on functional correction and they have some really cool technology that can assess if 
           you’re staying in fight or flight mode or rest and digest with a heart rate variability monitor. 
           They take a thorough amount of time to assess your posture and then through a machine they will show 
           you where you need their expertise through their EMG machine. One of my most favorite things they offer is an infrared sauna! 
          I recommend to check them out as they offered me insight into my health I was not aware of before!"</p>
          <p className="testAuth">Pete</p>
        </div>
        <div className="slide">
          <p>
          "Dr Nick and Dr Rachel are not average chiropractors. They are miracle workers and life savers who truly care for their patients. They take the time to truly listen what is going on with you mentally and physically. If you are looking for an out of this world chiropractic experience with amazing heart-centered doctors, look no farther than Realm Chiropractic.  If I could give them 10 stars, I would."
          </p>
          <p className="testAuth">Cheryl D</p>
        </div>
        <div className="slide">
          <p>"Dr. Nick and Dr. Rachel are magic!!  They squeezed me in last minute because my bulging disc at L5/S1 was super fired up.  😳 I had been at a 10 of 10 pain level for the weekend. The care and concern is phenomenal. Knowledgeable and professional.   I am so thankful for Realm!!  Highly recommend!! …"
          </p>
          <p className="testAuth">Terri W</p>
        </div>
        <div className="slide">
          <p>"Had a great experience with Dr. Rachel & Dr. Nick at Realm Chiropractic. When I'm back in the area, I will for sure visit again!"
          </p>
          <p className="testAuth">Eddie P</p>
        </div>
        <div className="slide">
          <p>"I have been seeing Dr. Rachel and Dr. Nick since 2017. Their approach is comprehensive in that it provides a period of more frequent adjustments till your body gets to a place that only maintenance adjustments are needed.
        Additionally, I have worked closely with Dr. Rachel on figuring out the best supplements to help me. However, the best part is working with them consistently and following the protocol of visits to improve your body is that you truly become a part of the Realm family.
        Along with providing excellent chiropractic treatment and nutritional advise. Dr. Rachel has worked with me through Yoga, really figuring out what things work best for always improving upon it and constant support for stress and anxiety. I cannot recommend anymore more strongly than Dr. Rachel and Dr. Nick. Their positivity and constant support through health issues and advice when you truly apply it life changing! So grateful to have found a team that truly looks out for me."</p>
          <p className="testAuth">Brian S</p>
        </div>
        <div className="slide">
          <p>"Drs. Nick & Rachel are the most caring and intuitive chiropractors I have ever been to and I've seen a lot over my 62 years of life. Firstly, they are very thorough in their initial assessment of your body and life as a whole.  Be sure they are thinking of your mind, body and spirit as they lay their gifted hands on you.  I have found it best in my life, as an older athlete, to get consistent care and keep tuned up rather than waiting until I have an acute event to go in.  You deserve the best chiropractic care for your body and you will get it at Realm Chiropractic!"</p>
          <p className="testAuth">Linda R</p>
        </div>
        

      </Slider>
    </div>
  );
}
