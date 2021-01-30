import React, { useEffect, useState } from "react";

const Textarea = (props) => {
  const [inputValue, setInputValue] = useState(props.value ? props.value : "");

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value]);

  return (
    <textarea
      placeholder={props.placeholder}
      id={props.id}
      className={props.className}
      value={inputValue}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      disabled={props.disabled}
    ></textarea>
  );
};

export default Textarea;
