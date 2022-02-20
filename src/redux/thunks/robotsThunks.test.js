import actionTypes from "../actions/actionTypes";
import { getRobotByIdThunk, loadAllRobotsThunk } from "./robotsThunk";

describe("Given a loadAllRobotsThunk function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch function with the loadAllRobotsAction", async () => {
      const dispatch = jest.fn();
      const robots = [
        { id: 1, name: "robot1" },
        { id: 2, name: "robot2" },
      ];
      const action = {
        type: actionTypes.loadAllRobots,
        robots: robots,
      };
      await loadAllRobotsThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given a getRobotByIdThunk inner function", () => {
  describe("When it is called", () => {
    test("Then it should call the dispatch function with the getRobotByidAction", async () => {
      const dispatch = jest.fn();
      const robot = { id: 1, name: "robot1" };
      const action = {
        type: actionTypes.getRobotById,
        robot,
      };
      const thunkFunction = getRobotByIdThunk(robot.id);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});
