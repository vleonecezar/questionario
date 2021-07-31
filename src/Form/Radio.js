import React from "react";
import "./Radio.css";

const Radio = ({ pergunta, options, id, value, onChange, active }) => {
  if (!active) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            id={id}
            type="radio"
            value={option}
            checked={value === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
