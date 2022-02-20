import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import robotsReducer from "./robotsReducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
  token: loginReducer,
});

export default rootReducer;
