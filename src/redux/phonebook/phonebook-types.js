const types = {
  ADD: "contact/add",
  FIND: "contact/find",
  DELETE: "contact/delete",
  CHANGE_FILTER: "contact/changeFilter",
};
export default types;

// const changeFilter = (e) => {
//     const { value } = e.currentTarget;

//     setFilter(value);
//   };

//   const findContact = () => {
//     const normalizeContacts = filter.toLowerCase();

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizeContacts)
//     );
//   };

//   const deleteContact = (contactId) => {
//     setContacts(contacts.filter((contact) => contact.id !== contactId));
//   };
