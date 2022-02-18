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
});
