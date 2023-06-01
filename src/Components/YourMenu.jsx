import React, { useState, useEffect } from "react";
import moment from "moment";

export const YourMenu = () => {
  const initialStartDate = moment().startOf("isoWeek");
  const [startDate, setStartDate] = useState(initialStartDate);
  const [dates, setDates] = useState([]);
  const weekdays = [
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

    for (let i = 0; i < 7; i++) {
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

  return (
    <div className="weekdays">
      <h1 className="weekdays__title">Додай своє меню на ці дні</h1>
      <div className="weekdays__item">
        {weekdays.map((day, index) => (
          <div
            className={`weekdays__cart ${
              isCurrentDay(index) ? "current__day" : ""
            }`}
            key={day}
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
