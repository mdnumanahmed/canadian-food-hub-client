import { Carousel } from "flowbite-react";
import LazyLoad from "react-lazy-load";
import React from "react";
import slide1 from "../../assets/news_bg.jpg";
import slide2 from "../../assets/dish_bg.jpg";
import slide3 from "../../assets/hero.webp";

const Slider = () => {
  return (
    <div className="h-[calc(100vh-89px)]">
      <Carousel>
        <div
          className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-cover"
          style={{ backgroundImage: `url(${slide1})` }}
        >
          <LazyLoad height={762}>
            <img src={slide3} />
          </LazyLoad>
        </div>
        <div
          className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-cover"
          style={{ backgroundImage: `url(${slide2})` }}
        >
          <LazyLoad height={762}>
            <img src={slide1} />
          </LazyLoad>
        </div>
        <div
          className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white bg-cover"
          style={{ backgroundImage: `url(${slide3})` }}
        >
          <LazyLoad height={762}>
            <img src={slide2} />
          </LazyLoad>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
