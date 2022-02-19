import actionTypes from "../actions/actionTypes";
import { loadAllRobotsThunk } from "./robotsThunk";

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
