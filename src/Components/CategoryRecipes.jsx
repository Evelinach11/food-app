import { useState } from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../data-services/recipes";
import { getBaseImageUrl } from "../data-services/host-service";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import translationEn from "../localization/en";
import translationUa from "../localization/ua";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    ua: { translation: translationUa },
  },
  lng: "ua",
  fallbackLang: "ua",
  interpolation: { escapeValue: "false" },
});

export const CategoryRecipes = () => {
  const [showRecipe, setShowRecipe] = useState(false);
  const { category } = useParams();
  const { t } = useTranslation();

  const filterCategory = recipes.filter(
    (recipe) => recipe.category === category
  );
  const openPopupRecipe = () => {
    setShowRecipe(true);
  };

  const closePopupRecipe = () => {
    setShowRecipe(false);
  };

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
                    <div className="recipe-card">
                      <h2 className="recipe__title">{recipe.title}</h2>
                      <img
                        className="recipe__img"
                        src={`${getBaseImageUrl()}${recipe.photo}`}
                        alt={recipe.title}
                      />
                      <p className="recipe__time">{recipe.time}</p>
                    </div>
                    {/* {recipe.ingredients.map((ingredient) => (
                      <div className="recipe__ingredients" key={ingredient}>
                        <input className="recipe__checkbox" type="checkbox" />
                        <p className="recipe__ingredient">{ingredient}</p>
                      </div>
                    ))} */}
                    <button className="recipe__button--start">
                      {t("startCooking")}
                    </button>
                    <button
                      className="recipe__button--start"
                      onClick={closePopupRecipe}
                    >
                      {t("close")}
                    </button>
                  </div>
                ))}
              </div>
            )}
      </div>
    </div>
  );
};
