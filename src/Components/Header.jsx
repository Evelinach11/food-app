import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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

export const Header = () => {
  const [showPopupLang, setShowPopupLang] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const openPopupLang = () => {
    setShowPopupLang(true);
  };

  const closePopupLang = () => {
    setShowPopupLang(false);
  };

  const onChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedLanguage(selectedValue);
  };

  return (
    <div>
      <header className="header">
        <Link to="/yourrecipes" className="header-link">
          {t("yourRecipes")}
        </Link>
        <Link to="/recipes" className="header-link">
          {t("recipes")}
        </Link>
        <Link to="/yourmenu" className="header-link">
          {t("yourMenu")}
        </Link>
        <div className="lang__div">
          {showPopupLang === false ? (
            <img
              src="/functional-icon/arrow-right.png"
              className="lang__icon"
              onClick={openPopupLang}
              alt="Language Icon"
            />
          ) : (
            <div className="lang__popup">
              <select
                onChange={onChange}
                value={selectedLanguage}
                className="lang__select"
              >
                <option value="ua" className="lang__option">
                  Ua
                </option>
                <option value="en" className="lang__option">
                  En
                </option>
              </select>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};
