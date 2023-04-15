import { combineReducers } from "@reduxjs/toolkit";
import items from "./slices/ItemsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  itemsReducer: items,
});

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default rootReducer;
