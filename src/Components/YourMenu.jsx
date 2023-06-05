import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSelectedDay } from "../store/slices/daySlice";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const YourMenu = () => {
  const initialStartDate = moment().startOf("isoWeek");
  const [startDate, setStartDate] = useState(initialStartDate);
  const [dates, setDates] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dayOfWeek = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
    "Неділя",
  ];
  const dateFormat = "DD.MM";

  const updateDates = () => {
    const updatedDates = [];

    for (let i = 0; i < dayOfWeek.length; i++) {
      const newDate = startDate.clone().add(i, "day");
      updatedDates.push(newDate);
    }
    setDates(updatedDates);
  };

  useEffect(() => {
    updateDates();
  }, [startDate]);

  const isCurrentDay = (index) => {
    const currentDate = moment();
    const selectedDate = dates[index];
    return currentDate.isSame(selectedDate, "day");
  };

  const handleNextWeek = () => {
    const nextWeekStartDate = startDate.clone().add(1, "week");
    setStartDate(nextWeekStartDate);
  };

  const handlePrevWeek = () => {
    const prevWeekStartDate = startDate.clone().subtract(1, "week");
    setStartDate(prevWeekStartDate);
  };

  const redirectToOtherComponent = (index) => {
    const selectedDay = dayOfWeek[index];
    const selectedDate = dates[index]?.format(dateFormat);
    dispatch(addSelectedDay({ day: selectedDay, date: selectedDate }));
    navigate("/mealstime");
  };

  return (
    <div className="weekdays">
      <h1 className="weekdays__title">Додай своє меню на ці дні</h1>
      <div className="weekdays__item">
        {dayOfWeek.map((day, index) => (
          <div
            className={`weekdays__cart ${
              isCurrentDay(index) ? "current__day" : ""
            }`}
            key={day}
            onClick={() => redirectToOtherComponent(index)}
          >
            <h3>{day}</h3>
            <p>{dates[index]?.format(dateFormat)}</p>
          </div>
        ))}
      </div>
      <div className="weekdays__btns">
        <button className="weekdays__btn--next" onClick={handlePrevWeek}>
          Попередній тиждень
        </button>
        <button className="weekdays__btn--next" onClick={handleNextWeek}>
          Наступний тиждень
        </button>
      </div>
    </div>
  );
};
