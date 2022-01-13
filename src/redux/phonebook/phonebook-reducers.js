import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import types from "./phonebook-types";
import initialContacts from "../../initialContacts.json";

const contacts = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [payload, ...state];
    case types.DELETE:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
