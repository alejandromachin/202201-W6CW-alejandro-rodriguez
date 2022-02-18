import { loadAllRobotsAction } from "./actionCreator";
import actionTypes from "./actionTypes";

describe("Given a loadAllRobotsAction function", () => {
  describe("When it is called with an array of robots", () => {
    test("then it should return an object with the action and the robots", () => {
      const robots = [{ name: "robot1" }, { name: "robot2" }];

      const expectedAction = {
        type: actionTypes.loadAllRobots,
        robots,
      };

      const action = loadAllRobotsAction(robots);

      expect(action).toEqual(expectedAction);
    });
  });
});
