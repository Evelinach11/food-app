import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <Link to="/" className="header-link">
          Твоє меню
        </Link>
        <Link to="/recipes" className="header-link">
          Рецепти
        </Link>
        <Link to="/yourrecipes" className="header-link">
          Твої рецепти
        </Link>
      </header>
    </div>
  );
};
