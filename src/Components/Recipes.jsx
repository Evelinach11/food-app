import { Link } from "react-router-dom";

import { getCategories } from "../data-services/categoties";

export const Recipes = () => {
  const categories = getCategories();
  return (
    <div>
      <h1 className="recipes__title">Категорії</h1>
      <ul className="recipes__item">
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${category}`} className="recipes__category">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
