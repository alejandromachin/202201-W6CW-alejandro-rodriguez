import actionTypes from "./actionTypes";

export const loadAllRobotsAction = (robots) => ({
  type: actionTypes.loadAllRobots,
  robots,
});

export const getRobotByIdAction = (robot) => ({
  type: actionTypes.getRobotById,
  robot,
});

export const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});
export const getLoginAction = (token) => ({
  type: actionTypes.getLogin,
  token,
});
