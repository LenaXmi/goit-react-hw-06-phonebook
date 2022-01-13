import types from "./phonebook-types";

export const addContact = (id, name, number) => ({
  type: types.ADD,
  payload: { id, name, number },
});

export const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});
