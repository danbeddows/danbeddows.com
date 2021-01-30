import React, { useState } from "react";
import styled from "styled-components";
import Submit from "./Submit";
import Textarea from "./Textarea";
import TextInput from "./TextInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  display: inline-block;
  font-size: 14px;
  margin-left: 17px;
  margin-bottom: 7px;
  font-weight: 500;
  font-size: 15px;
  cursor: default;
`;

const Error = styled.div`
  font-size: 14px;
  margin: 5px 0 5px 17px;
  color: #d43f3a;
`;

const FormInput = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (val) => {
    setInputValue(val);
    props.onChange(val);
  };

  return (
    <Container style={props.containerStyle ? props.containerStyle : {}}>
      {/* form input label - only display for type 'text' or textarea */}
      {(props.type == "text" || props.type == "textarea") && (
        <Label htmlFor={props.id}>{props.label}</Label>
      )}

      {/* text input */}
      {props.type == "text" && (
        <TextInput
          placeholder={props.placeholder}
          id={props.id}
          className={props.className}
          onChange={onInputChange}
          value={inputValue}
          disabled={props.isFormSubmitting || props.disabled}
        />
      )}

      {/* textarea input */}
      {props.type == "textarea" && (
        <Textarea
          placeholder={props.placeholder}
          id={props.id}
          className={props.className}
          onChange={onInputChange}
          value={inputValue}
          disabled={props.isFormSubmitting || props.disabled}
        />
      )}

      {/* submit button */}
      {props.type == "submit" && (
        <Submit
          label={props.label}
          isLoading={props.isFormSubmitting}
          disabled={props.isFormSubmitting || props.disabled}
        />
      )}

      {/* show any error */}
      {props.error && <Error>{props.error}</Error>}
    </Container>
  );
};

export default FormInput;
