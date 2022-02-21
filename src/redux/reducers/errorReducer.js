import actionTypes from "../actions/actionTypes";

const errorReducer = (currentError = "", action = "") => {
  let newToken;
  switch (action.type) {
    case actionTypes.wrongLogin:
      newToken = action.error;

      break;

    default:
      newToken = currentError;
  }
  return newToken;
};

export default errorReducer;
