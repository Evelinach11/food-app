import { Link } from "react-router-dom";
export const Recipes = () => {
  const categorys = [
    "Перші страви",
    "Салати",
    "Гарніри",
    "Риба",
    "М`ясні страви",
    "Десерти",
    "Напої",
    "Соуси та заправки",
  ];
  return (
    <div>
      <h1 className="recipes__title">Категорії</h1>
      <ul className="recipes__item">
        {categorys.map((category) => (
          <Link key={category} to="/category" className="recipes__category">
            {category}
          </Link>
        ))}
      </ul>
    </div>
  );
};
