import { connect } from "react-redux";
import { changeFilter } from "../../redux/phonebook/phonebook-actions";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <input
        className={s.Input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.currentTarget.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
