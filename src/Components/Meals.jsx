import React from "react";
import { getMealsTime, addMealsTime } from "../services/service";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSelectedDay } from "../store/slices/daySlice";
import moment from "moment";

export const Meals = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [newMeal, setNewMeal] = useState("");
  const selectedDay = useSelector(selectSelectedDay);
  const selectedDate = selectedDay.date;
  const formattedDate = moment(selectedDate).format("DD.MM");

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (event) => {
    setNewMeal(event.target.value);
  };

  const addNewMeal = () => {
    addMealsTime(newMeal);
    setNewMeal("");
  };

  return (
    <div>
      <div className="meals__currentdata">
        <p>{selectedDay.day}</p>
        <p>{formattedDate}</p>
      </div>

      <div className="meals">
        <h1 className="breakfast">Сніданок</h1>
        <h1 className="lunch">Обід</h1>
        <h1 className="dinner">Вечеря</h1>
        <div className="meals">
          {getMealsTime().map((meal, index) => (
            <h1 className="new" key={index}>
              {meal}
            </h1>
          ))}
        </div>
        <div className="meals__add--more" onClick={openPopup}>
          Додати прийом їжі
        </div>
      </div>
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
