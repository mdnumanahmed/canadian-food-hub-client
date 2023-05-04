import { Card } from "flowbite-react";
import React from "react";

const SingleRecipe = ({ recipe }) => {
  const {recipe_name, ingredients, cooking_method, rating} = recipe;
  console.log(recipe);
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
        <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Ratings : </span>
          {rating}
        </p>
      </Card>
    </div>
  );
};

export default SingleRecipe;
