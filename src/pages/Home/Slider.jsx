import { Carousel } from "flowbite-react";
import React from "react";
import slide1 from '../../assets/news_bg.jpg'
import slide2 from '../../assets/dish_bg.jpg'

const Slider = () => {
  return (
    <div className="h-[calc(100vh-89px)]">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-cover" style={{backgroundImage: `url(${slide1})`}}>
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-cover" style={{backgroundImage: `url(${slide2})`}}>
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-cover" style={{backgroundImage: `url(${slide1})`}}>
          Slide 3
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
