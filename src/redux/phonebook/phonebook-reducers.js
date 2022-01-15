import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact } from "./phonebook-actions";
import { deleteContact } from "./phonebook-actions";
import { changeFilter } from "./phonebook-actions";
import initialContacts from "../../initialContacts.json";

const contacts = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});

//Vanilla redux
// const contacts = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [payload, ...state];
//     case types.DELETE:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
