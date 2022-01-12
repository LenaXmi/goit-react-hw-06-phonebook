import types from "./phonebook-types";

const addContact = (formData) => ({
  type: types.ADD,
  payload: formData,
});

export default addContact;
