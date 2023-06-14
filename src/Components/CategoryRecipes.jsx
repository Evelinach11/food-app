import { useState } from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../data-services/recipes";
import {
  getFullImageUrl,
  getBaseImageUrl,
} from "../data-services/host-service";

export const CategoryRecipes = () => {
  const [showRecipe, setShowRecipe] = useState(false);
  const { category } = useParams();
  const filterCategory = recipes.filter(
    (recipe) => recipe.category === category
  );
  const openPopupRecipe = () => {
    setShowRecipe(true);
  };

  const closePopupRecipe = () => {
    setShowRecipe(false);
  };
  console.log(getBaseImageUrl());
  return (
    <div>
      <h2 className="recipe__category">{category}</h2>
      <div>
        {showRecipe === false
          ? filterCategory.map((recipe) => (
              <div
                className="recipe-card"
                onClick={openPopupRecipe}
                key={recipe.id}
              >
                <h2 className="recipe__title">{recipe.title}</h2>
                <img
                  className="recipe__img"
                  src={`${getBaseImageUrl()}${recipe.photo}`}
                  alt={recipe.title}
                />
                <p className="recipe__time">{recipe.time}</p>
              </div>
            ))
          : showRecipe && (
              <div>
                {filterCategory.map((recipe) => (
                  <div key={recipe.id}>
                    <img src={recipe.photo} alt={recipe.title} />
                    {recipe.ingredients.map((ingredient) => (
                      <div className="recipe__ingredients" key={ingredient}>
                        <input className="recipe__checkbox" type="checkbox" />
                        <p className="recipe__ingredient">{ingredient}</p>
                      </div>
                    ))}
                    <button className="recipe__button--start">
                      Почати готувати
                    </button>
                  </div>
                ))}
              </div>
            )}
      </div>
    </div>
  );
};
