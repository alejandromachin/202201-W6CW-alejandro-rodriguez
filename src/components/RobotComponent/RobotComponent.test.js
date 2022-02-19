import { render, screen } from "@testing-library/react";
import RobotComponent from "./RobotComponent";

describe("Given a RobotComponent", () => {
  describe("When it is rendered with a robot", () => {
    test("Then it should show the name of the robot", () => {
      const robot = {
        name: "Robomach",
      };

      render(<RobotComponent robot={robot} />);

      const expectedRobot = screen.getByRole("heading");

      expect(expectedRobot).toBeInTheDocument();
    });
  });
});
