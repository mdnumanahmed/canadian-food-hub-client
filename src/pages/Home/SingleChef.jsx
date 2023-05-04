import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SingleChef = ({ chef }) => {
  const { id, chef_img, chef_name, experience, numbers_of_recipes, likes } =
    chef;
  return (
    <Card>
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 h-28 w-28 rounded-md shadow-lg"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {chef_name}
        </h5>
        <div className="flex justify-between">
          <p className="text-md text-gray-500 dark:text-gray-400 mr-6">
            {experience} years Experience
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400">
            Total Recipe {numbers_of_recipes}
          </p>
        </div>
        <div className="mt-4 flex space-x-5 lg:mt-6">
          <Link
            to={`/chef/${id}`}
            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Recipe
          </Link>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
           Favorite {likes}
          </a>
        </div>
      </div>
    </Card>
  );
};

export default SingleChef;
