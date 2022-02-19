import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../setupTests";
import RobotsPage from "./RobotsPage";

describe("Given a RobotsPage function", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Robots'", () => {
      renderWithProviders(
        <BrowserRouter>
          <RobotsPage />
        </BrowserRouter>
      );

      const expectedText = screen.getByRole("heading", { name: /robots/i });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
