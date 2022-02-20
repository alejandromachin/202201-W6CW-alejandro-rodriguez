import { screen } from "@testing-library/react";
import renderWithProviders from "../../setupTests";
import CreateRobotForm from "./CreateRobotForm";
import userEvents from "@testing-library/user-event";

describe("Given a CreateRobotForm component", () => {
  describe("When it is instantiated", () => {
    test("Then it should show 2 textbox inputs and a button with the text add to submit", () => {
      const expectedNumberOfInputs = 2;

      renderWithProviders(<CreateRobotForm />);

      const inputs = screen.getAllByRole("textbox").length;
      const submitButton = screen.getByRole("button", { name: /add/i });
      userEvents.type(inputs);

      expect(inputs).toBe(expectedNumberOfInputs);
      expect(submitButton).toBeInTheDocument();
    });
  });
  describe("When it is clicked on the submit button", () => {
    test("Then it should call the action on submit", () => {
      renderWithProviders(<CreateRobotForm />);

      const submitButton = screen.getByRole("button", { name: /add/i });

      userEvents.click(submitButton);
    });
  });
});
