import React from "react";

const Form = (props) => {
  const handleFormSubmit = () => {};

  console.log(props.children);

  return (
    <form onSubmit={handleFormSubmit}>
      {props.children.map((child, index) => {
        return child;
      })}
    </form>
  );
};

export default Form;
