import actionTypes from "../actions/actionTypes";

const loginReducer = (currentToken = {}, action = {}) => {
  let newToken;
  switch (action.type) {
    case actionTypes.getLogin:
      newToken = { ...action.token };
      break;
    case actionTypes.wrongLogin:
      newToken = action.error;

      break;

    default:
      newToken = { ...currentToken };
  }
  return newToken;
};

export default loginReducer;
