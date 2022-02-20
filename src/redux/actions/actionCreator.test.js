import {
  createRobotAction,
  getLoginAction,
  getRobotByIdAction,
  loadAllRobotsAction,
} from "./actionCreator";
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
describe("Given a getRobotByIdAction function", () => {
  describe("When it is called with one robot", () => {
    test("Then it should return an object with the action and the robot", () => {
      const robot = [{ name: "robot1" }];

      const expectedAction = {
        type: actionTypes.getRobotById,
        robot,
      };

      const action = getRobotByIdAction(robot);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a createRobotAction function", () => {
  describe("When it is called with one robot", () => {
    test("Then it should return an object with the action and the robot", () => {
      const robot = [{ name: "robot1" }];

      const expectedAction = {
        type: actionTypes.createRobot,
        robot,
      };

      const action = createRobotAction(robot);

      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given a getLoginAction function", () => {
  describe("When it is called with a token", () => {
    test("Then it should return an object with the action and the token", () => {
      const token = { token: "hello I'm a token" };

      const expectedAction = {
        type: actionTypes.getLogin,
        token,
      };

      const action = getLoginAction(token);

      expect(action).toEqual(expectedAction);
    });
  });
});
