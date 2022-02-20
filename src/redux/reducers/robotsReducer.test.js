import actionTypes from "../actions/actionTypes";
import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer function", () => {
  describe("When it is called with an empty state and a loadAllRobotsAction action with an array of two robots", () => {
    test("Then it should return the new state with the same two robots", () => {
      const robots = [{ name: "robot1" }, { name: "robot2" }];
      const currentState = [];
      const action = {
        type: actionTypes.loadAllRobots,
        robots,
      };

      const newState = robotsReducer(currentState, action);

      expect(newState).toEqual(robots);
    });
  });

  describe("When it is called with a getRobotByIdAction with a robot", () => {
    test("Then it should return that robot as a new state", () => {
      const robot = { name: "robot1" };

      const action = {
        type: actionTypes.getRobotById,
        robot,
      };
      const newState = robotsReducer(null, action);

      expect(newState).toEqual(robot);
    });
  });

  describe("When it is called with a createRobotAction with a robot", () => {
    test("Then it should return that robot as a part of the new state", () => {
      const currentState = [];
      const robot = { name: "robot1" };
      const expectedNewState = [{ name: "robot1" }];

      const action = {
        type: actionTypes.createRobot,
        robot,
      };
      const newState = robotsReducer(currentState, action);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
