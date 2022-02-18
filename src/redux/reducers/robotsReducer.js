import actionTypes from "../actions/actionTypes";

const robotsReducer = (currentRobots = [], action = {}) => {
  let newRobots;
  switch (action.type) {
    case actionTypes.loadAllRobots:
      newRobots = [...action.robots];
      break;

    default:
      newRobots = [...currentRobots];
  }
  return newRobots;
};

export default robotsReducer;
