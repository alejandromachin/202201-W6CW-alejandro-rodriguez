import actionTypes from "../actions/actionTypes";

const errorReducer = (currentError = "", action = "") => {
  let newToken;
  switch (action.type) {
    case actionTypes.wrongLogin:
      newToken = action.error;

      break;
    case actionTypes.logedIn:
      newToken = "Logged in";

      break;

    default:
      newToken = currentError;
  }
  return newToken;
};

export default errorReducer;
