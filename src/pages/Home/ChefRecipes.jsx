import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefRecipeHeader from "./ChefRecipeHeader";
import SingleRecipe from "./SingleRecipe";

const ChefRecipes = () => {
  const {selectedChef, recipeByChef} = useLoaderData();
  console.log(recipeByChef);
  
  
  return (
    <section>
      <div>
        <ChefRecipeHeader selectedChef={selectedChef}/>
      </div>
      <div className="py-20">
        <div className="chef-area container mx-auto">
          <div className="sec-title text-center mb-8">
            <h4 className="text-xl font-bold">Popular Recipe</h4>
            <h1 className="text-4xl font-bold">
              Some Delicious Recipe By <span className="font-bold text-blue-700">{selectedChef?.chef_name}</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
            recipeByChef.map((recipe) => (
              <SingleRecipe key={recipe.id} recipe={recipe} />
            ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecipes;
