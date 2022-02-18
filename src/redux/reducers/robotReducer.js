import actionTypes from "../actions/actionTypes";

const robotReducer = (currentRobots = [], action = {}) => {
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

export default robotReducer;
