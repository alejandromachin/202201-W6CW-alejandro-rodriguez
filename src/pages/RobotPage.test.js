import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../setupTests";
import RobotPage from "./RobotPage";

describe("Given a RobotPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'ROBOT:'", () => {
      renderWithProviders(
        <BrowserRouter>
          <RobotPage />
        </BrowserRouter>
      );

      const expectedText = screen.getByRole("heading", { name: /robot/i });

      expect(expectedText).toBeInTheDocument();
    });
    test("Then it should call the dispatch function with getRobotByIdThunk", async () => {
      renderWithProviders(
        <BrowserRouter>
          <RobotPage />
        </BrowserRouter>
      );
      const dispatch = jest.fn();
      const getRobotByIdThunk = jest.fn();

      await dispatch(getRobotByIdThunk);

      expect(dispatch).toHaveBeenCalledWith(getRobotByIdThunk);
    });
  });
});
