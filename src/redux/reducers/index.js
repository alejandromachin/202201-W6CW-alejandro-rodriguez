import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import loginReducer from "./loginReducer";
import robotsReducer from "./robotsReducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
  token: loginReducer,
  error: errorReducer,
});

export default rootReducer;
