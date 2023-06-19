import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
const { getByText, getByPlaceholderText } = screen;
import { useSelector } from "react-redux";
import { Meals } from "../Components/Meals";
import { getMealsTime } from "../services/service";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("../services/service", () => ({
  getMealsTime: jest.fn(),
  addMealsTime: jest.fn(),
}));

describe("Meals", () => {
  beforeEach(() => {
    useSelector.mockReturnValue({ day: "Понеділок", date: "2023-06-06" });
    getMealsTime.mockReturnValue(["Сніданок", "Обід"]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the selected day and date", () => {
    const { getByText } = render(<Meals />);
    expect(getByText("Понеділок")).toBeDefined();
    expect(getByText("06.06")).toBeDefined();
  });
});
