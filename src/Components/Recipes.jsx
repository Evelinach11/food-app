import { Link } from "react-router-dom";

import { getCategories } from "../data-services/categoties";

export const Recipes = () => {
  const categories = getCategories();
  return (
    <div>
      <h1 className="recipes__title">Категорії</h1>
      {categories.map((category) => (
        <div className="recipes__item" key={category}>
          <Link to={`/category/${category}`} className="recipes__category">
            {category}
          </Link>
        </div>
      ))}
    </div>
  );
};
