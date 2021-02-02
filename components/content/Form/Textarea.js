import StyledTextarea from "components/content/Textarea";
import React, { useEffect, useState } from "react";

const Textarea = (props) => {
  const [inputValue, setInputValue] = useState(props.value ? props.value : "");

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value]);

  return (
    <StyledTextarea
      placeholder={props.placeholder}
      id={props.id}
      className={props.className}
      value={inputValue}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      disabled={props.disabled}
    ></StyledTextarea>
  );
};

export default Textarea;
