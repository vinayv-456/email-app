import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { emailDetailsReducer } from "./emailBody/reducers";
import { emailsListReducer } from "./emailsList/reducers";

const emailsListDataConfig = {
  key: "emailsListData",
  storage,
  whitelist: ["filters"],
};

export const rootReducer = combineReducers({
  emailsListData: persistReducer(emailsListDataConfig, emailsListReducer),
  emailBody: emailDetailsReducer,
});
