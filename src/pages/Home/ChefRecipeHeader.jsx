import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChefRecipeHeader = ({chef}) => {
    
    const { chef_img, chef_name, experience, numbers_of_recipes, likes, chef_short_bio } =
    chef;
    
  return (
    <div className="flex justify-around items-center ">
        <div>
            <img src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
        </div>
        <div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {chef_name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {chef_short_bio}
        </p>
        <div className="flex justify-between">
          <p className="text-md text-gray-500 dark:text-gray-400 mr-6">
            {experience} years Experience
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400">
            Total Recipe {numbers_of_recipes}
          </p>
        </div>
        <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
           Favorite {likes}
          </a>
        </div>
      {/* <Card
      className="justify-center"
        horizontal={true}
        imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {chef_name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {chef_short_bio}
        </p>
        <div className="flex justify-between">
          <p className="text-md text-gray-500 dark:text-gray-400 mr-6">
            {experience} years Experience
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400">
            Total Recipe {numbers_of_recipes}
          </p>
        </div>
        <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
           Favorite {likes}
          </a>
      </Card> */}
    </div>
  );
};

export default ChefRecipeHeader;
