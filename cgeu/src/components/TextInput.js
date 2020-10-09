import React from "react";
import PropTypes from "prop-types";

const TextInput = props => {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={formStyles.formGroup}>
      <input
        type="text"
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        className={formStyles.formControl}
        required
      />
      <label className={formStyles.formPlaceholder} htmlFor={props.id}>
        {props.label}
      </label>
      {props.error && <div className="">{props.error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
};

export default TextInput;
