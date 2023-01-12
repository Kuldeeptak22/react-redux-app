// This is Our Root reducer where we basically combine all reducer together.
import { combineReducers } from "redux";
import cardItems from "./reducer";

export default combineReducers({
  cardItems,
});
