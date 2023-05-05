import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SingleFood = ({ food }) => {
  const { recipe_name, recipe_img, ingredients, rating } = food;
  return (
    <div className="relative group overflow-hidden ">
      <img class="h-auto max-w-full block rounded-lg" src={recipe_img} alt="" />
      <div className="absolute top-1/2 -right-full group-hover:right-0 px-5 py-3 bg-white group-hover:transition-all duration-500 ease-in-out">
        <h2 className="font-bold text-xl">{recipe_name}</h2>
        <div>
          {ingredients[0]}, {ingredients[1]}, {ingredients[2]}
        </div>
        <div className="flex">
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          <span className="ml-2">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
