import React from "react";
import {
  getMealsTime,
  addMealsTime,
  getDish,
  addDish,
} from "../services/service";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSelectedDay } from "../store/slices/daySlice";
import moment from "moment";

export const Meals = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showWindow, setShowWindow] = useState(false);
  const [showPopupAddDish, setShowPopupAddDish] = useState(false);
  const [newMeal, setNewMeal] = useState("");
  const [newDish, setNewDish] = useState("");
  const selectedDay = useSelector(selectSelectedDay);
  const selectedDate = selectedDay.date;
  const formattedDate = moment(selectedDate).format("DD.MM");

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const openWindow = () => {
    setShowWindow(true);
  };

  const closeWindow = () => {
    setShowWindow(false);
  };

  const openPopupAddDish = () => {
    setShowPopupAddDish(true);
  };

  const closePopupAddDish = () => {
    setShowPopupAddDish(false);
  };

  const handleInputChange = (event) => {
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
        <p>{formattedDate}</p>
      </div>

      <div className="meals">
        {getMealsTime().map((meal, index) => (
          <h1 className="meal" key={index} onClick={openWindow}>
            {meal}
          </h1>
        ))}

        <div className="meals__add--more" onClick={openPopup}>
          Додати прийом їжі
        </div>
        <div className="meals__add--dish" onClick={openPopupAddDish}>
          Додати страву
        </div>
      </div>
      {showWindow && (
        <div className="meals__window">
          <div className="meals__window--title">Твоя страва</div>
          {getDish().map((dish, index) => (
            <h1 className="dish" key={index}>
              {dish}
            </h1>
          ))}
          <button className="meals__window--close" onClick={closeWindow}>
            Закрити
          </button>
        </div>
      )}
      {showPopupAddDish && (
        <div className="meals__window">
          <div className="meals__window--title">Додай страву</div>
          <h2 className="meals__window--choose">
            До якого прийому їжі ти хочеш додати цю страву?
          </h2>
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
            Додати
          </button>
          <button className="meals__window--close" onClick={closePopupAddDish}>
            Закрити
          </button>
        </div>
      )}
      {showPopup && (
        <div className="meals__popup">
          <h1 className="meals__popup--title">
            Назви свій прийом їжі та додай його
          </h1>
          <input
            className="meals__popup--input"
            type="text"
            placeholder="Введіть назву"
            value={newMeal}
            onChange={handleInputChange}
          />
          <button className="meals__popup--add" onClick={addNewMeal}>
            Додати
          </button>
          <button className="meals__popup--close" onClick={closePopup}>
            Закрити
          </button>
        </div>
      )}
    </div>
  );
};
