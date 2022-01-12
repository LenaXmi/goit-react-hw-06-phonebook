import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import types from "./phonebook-types";
import initialContacts from "../../initialContacts.json";

const contacts = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [payload, ...state];
    case types.DELETE:

    default:
      return state;
  }
};

const filter = (state = "", action) => {
  return state;
};

export default combineReducers({
  contacts,
  filter,
});
