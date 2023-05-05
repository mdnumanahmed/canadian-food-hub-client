import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import { useLoaderData, useParams } from "react-router-dom";

const ChefRecipeHeader = ({selectedChef}) => {
  const {
    chef_img,
    chef_name,
    experience,
    numbers_of_recipes,
    likes,
    chef_short_bio,
  } = selectedChef;

  return (
    <div className="flex justify-around items-center ">
      <div>
        <LazyLoad height={200}>
        <img src={chef_img} alt="" />
        </LazyLoad>
      </div>
      <div className="px-8">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {chef_name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 my-5 ">
         <span className="font-bold">Description : </span> {chef_short_bio}
        </p>
        <div className="">
          <p className="text-md text-gray-500 dark:text-gray-400 mr-6">
            {experience} years Experienced
          </p>
          <p className="text-md my-3 text-gray-500 dark:text-gray-400">
            Total Recipe {numbers_of_recipes}
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 mt-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Favorite {likes}
        </a>
      </div>
      
    </div>
  );
};

export default ChefRecipeHeader;
