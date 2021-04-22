import { combineReducers } from "redux";

import { asteroidList } from "./asteroidList";
import { destructionList } from "./destructionList";
import { date } from "./date";

export const reducers = combineReducers({
  asteroidList,
  destructionList,
  date,
});
