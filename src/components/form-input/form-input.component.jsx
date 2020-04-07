import "./form-input.styles.scss";
import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input type="text" className="form-input" onChange={handleChange} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label `}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
