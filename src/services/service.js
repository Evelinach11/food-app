const mealsTime = ["Перекус"];

export const getMealsTime = () => {
  return mealsTime;
};
export const addMealsTime = (meal) => {
  mealsTime.push(meal);
};
