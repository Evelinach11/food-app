import { Link } from "react-router-dom";
import { getCategories } from "../data-services/categories";
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

export const Recipes = () => {
  const { t } = useTranslation();
  const categories = getCategories();
  return (
    <div>
      <h1 className="recipes__title">{t("categorys")}</h1>
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
