import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { YourMenu } from "../Components/YourMenu";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("YourMenu", () => {
  let mockDispatch;
  let mockNavigate;

  beforeEach(() => {
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      useNavigate: () => mockNavigate,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders weekdays correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <YourMenu />
      </MemoryRouter>
    );

    expect(getByText("Понеділок")).toBeDefined();
    expect(getByText("Вівторок")).toBeDefined();
    expect(getByText("Середа")).toBeDefined();
    expect(getByText("Четвер")).toBeDefined();
    expect(getByText("П'ятниця")).toBeDefined();
    expect(getByText("Субота")).toBeDefined();
    expect(getByText("Неділя")).toBeDefined();
  });
});
