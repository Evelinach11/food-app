import React from "react";
import {
  getMealsTime,
  addMealsTime,
  getDish,
  addDish,
} from "../data-services/service";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSelectedDay } from "../store/slices/daySlice";
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

export const Meals = () => {
  const [showPopupAddMeal, setShowPopupAddMeal] = useState(false);
  const [showMenuOnDay, setShowMenuOnDay] = useState(false);
  const [showPopupAddDish, setShowPopupAddDish] = useState(false);
  const [newMeal, setNewMeal] = useState("");
  const [newDish, setNewDish] = useState("");
  const selectedDay = useSelector(selectSelectedDay);
  const selectedDate = selectedDay.date;
  const { t } = useTranslation();

  const openPopupAddMeal = () => {
    setShowPopupAddMeal(true);
  };

  const closePopupAddMeal = () => {
    setShowPopupAddMeal(false);
  };

  const openMenuOnDay = () => {
    setShowMenuOnDay(true);
  };

  const closeMenuOnDay = () => {
    setShowMenuOnDay(false);
  };

  const openPopupAddDish = () => {
    setShowPopupAddDish(true);
  };

  const closePopupAddDish = () => {
    setShowPopupAddDish(false);
  };

  const handleNewMealChange = (event) => {
    setNewMeal(event.target.value);
  };

  const handleNewDishChange = (event) => {
    setNewDish(event.target.value);
  };

  const addNewMeal = () => {
    addMealsTime(newMeal);
    setNewMeal("");
  };
  const addNewDish = () => {
    addDish(newDish);
    setNewDish("");
  };

  return (
    <div>
      <div className="meals__currentdata">
        <p>{selectedDay.day}</p>
        <p>{selectedDate}</p>
      </div>
      <div className="meals">
        {getMealsTime().map((meal, index) => (
          <h1 className="meal" key={index} onClick={openMenuOnDay}>
            {meal}
          </h1>
        ))}
        <div className="meals__add--more" onClick={openPopupAddMeal}>
          {t("addMeal")}
        </div>
        <div className="meals__add--dish" onClick={openPopupAddDish}>
          {t("addDish")}
        </div>
      </div>
      {showMenuOnDay && (
        <div className="meals__window">
          <div className="meals__window--title">{t("yourDish")}</div>
          {getDish().map((dish, index) => (
            <h1 className="dish" key={index}>
              {dish}
            </h1>
          ))}
          <button className="meals__window--close" onClick={closeMenuOnDay}>
            {t("close")}
          </button>
        </div>
      )}
      {showPopupAddDish && (
        <div className="meals__window">
          <div className="meals__window--title"> {t("addDish")}</div>
          <h2 className="meals__window--choose">{t("chooseMeal")}</h2>
          <input
            className="meals__search"
            type="search"
            id="site-search"
            name="q"
            value={newDish}
            onChange={handleNewDishChange}
          ></input>
          <select className="meals__select">
            {getMealsTime().map((meal, index) => (
              <option value="option" className="meal" key={index}>
                {meal}
              </option>
            ))}
          </select>
          <button className="meals__window--add" onClick={addNewDish}>
            {t("add")}
          </button>
          <button className="meals__window--close" onClick={closePopupAddDish}>
            {t("close")}
          </button>
        </div>
      )}
      {showPopupAddMeal && (
        <div className="meals__popup">
          <h1 className="meals__popup--title">{t("nameAddMealTitle")}</h1>
          <input
            className="meals__popup--input"
            type="text"
            placeholder={t("enterName")}
            value={newMeal}
            onChange={handleNewMealChange}
          />
          <button className="meals__popup--add" onClick={addNewMeal}>
            {t("add")}
          </button>
          <button className="meals__popup--close" onClick={closePopupAddMeal}>
            {t("close")}
          </button>
        </div>
      )}
    </div>
  );
};
