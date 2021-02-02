import StyledInput from "components/content/Input";
import React, { useEffect, useState } from "react";

const TextInput = (props) => {
  const [inputValue, setInputValue] = useState(props.value ? props.value : "");

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value]);

  return (
    <StyledInput
      type="text"
      placeholder={props.placeholder}
      id={props.id}
      className={props.className}
      value={inputValue}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      disabled={props.disabled}
    />
  );
};

export default TextInput;
