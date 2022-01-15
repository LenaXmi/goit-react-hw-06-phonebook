import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-actions";
import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";
import s from "./Contacts.module.css";

const Contacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={s.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.ContactItem}>
          <p className={s.ContactData}>
            {name}: {number}
          </p>
          <button
            onClick={() => onDeleteContact(id)}
            className={s.ContactDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

// getVisibleContacts(contacts, filter)

// const mapStateToProps = ({ phonebook: { contacts, filter } }) => {
//   return {
//     contacts,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteContact: (id) => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
