import actionTypes from "./actionTypes";

export const loadAllRobotsAction = (robots) => ({
  type: actionTypes.loadAllRobots,
  robots,
});

export const getRobotByIdAction = (robot) => ({
  type: actionTypes.getRobotById,
  robot,
});
