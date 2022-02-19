import actionTypes from "./actionTypes";

export const loadAllRobotsAction = (robots) => ({
  type: actionTypes.loadAllRobots,
  robots,
});
