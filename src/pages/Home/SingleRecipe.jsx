import { Card } from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-toast";

const SingleRecipe = ({ recipe }) => {
  const [disabled, setDisabled] = useState(false);
  const { recipe_name, ingredients, cooking_method, rating } = recipe;

  const handleFavorite = () => {
    toast.success(`${recipe_name} added as your favorite!`);
    setDisabled(!disabled);
  };
  return (
    <div>
      <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {recipe_name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="block font-bold">Some Ingredients</span>
          {ingredients && <li>{ingredients[0]}</li>}
          {ingredients && <li>{ingredients[1]}</li>}
          {ingredients && <li>{ingredients[2]}</li>}
          {ingredients && <li>{ingredients[3]}</li>}
          {ingredients && <li>{ingredients[4]}</li>}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Cooking Method : </span>
          {cooking_method && cooking_method}
        </p>
        <div className="flex justify-between">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Ratings : </span>
            {rating}
          </p>
          <button
            onClick={handleFavorite}
            disabled={disabled}
            className={`inline-flex items-center rounded-lg ${disabled ? 'bg-gray-200 hover:bg-gray-200' : 'bg-blue-700 hover:bg-blue-800'} py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            Favorite
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SingleRecipe;
