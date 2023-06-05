import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedDay } from "../store/slices/daySlice";
import moment from "moment";

export const MealsTime = () => {
  const selectedDay = useSelector(selectSelectedDay);
  const selectedDate = selectedDay.date;
  const formattedDate = moment(selectedDate).format("DD.MM");

  return (
    <div>
      <div className="mealstime__currentdata">
        <p>{selectedDay.day}</p>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};
