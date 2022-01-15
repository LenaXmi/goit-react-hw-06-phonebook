import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contact/add", (id, name, number) => ({
  payload: { id, name, number },
}));

export const deleteContact = createAction("contact/delete");

export const changeFilter = createAction("contact/changeFilter");

//Vanilla redux
// export const addContact = (id, name, number) => ({
//   type: types.ADD,
//   payload: { id, name, number },
// });

// export const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// export const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
