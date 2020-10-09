import React from "react"
import PropTypes from "prop-types"

const Input = ({ tag: Tag, name, placeholder, label, type, onChange }) => {
  return (
    <div className="form__group">
      <label className="form__label" htmlFor={name}>
        {label}
        <Tag
          className={type !== "file" ? "form__input" : null}
          type={type}
          required
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  tag: PropTypes.string,
}

Input.defaultProps = {
  tag: "input",
  type: "text",
}

export default Input
