import { useParams } from "react-router-dom";
import { recipes } from "../data-services/recipes";

export const CategoryRecipes = () => {
  const { category } = useParams();
  const filterCategory = recipes.filter(
    (recipe) => recipe.category === category
  );

  return (
    <div>
      <h2>{category}</h2>
      <div>
        <h1>Рецепти</h1>
        {filterCategory.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>Категорія: {recipe.category}</p>
            <img src={recipe.photo} alt={recipe.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
