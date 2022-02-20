import actionTypes from "../actions/actionTypes";
import loginReducer from "./loginReducer";

describe("Given a loginReducer function", () => {
  describe("When it is called with an empty currentToken and the getLoginAction", () => {
    test("Then it should return the token as a new state", () => {
      const currentToken = {};
      const token = { token: "I'm a tokensito" };

      const action = {
        type: actionTypes.getLogin,
        token,
      };

      const expectedNewToken = loginReducer(currentToken, action);

      expect(expectedNewToken).toEqual(token);
    });
  });
});
