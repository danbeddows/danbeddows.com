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
  font-weight: 400;
  font-size: 0.9rem;
  cursor: default;
  font-family: "wotfard", Roboto, Oxygen, Ubuntu, Droid Sans, Helvetica Neue,
    sans-serif;
`;

const Error = styled.div`
  font-size: 14px;
  margin: 5px 0 5px 17px;
  color: #d43f3a;
`;

interface FormInputProps {
  onChange: (value: string) => void;
  type: string;
  id: string;
  containerStyle: {};
  label: string;
  placeholder: string;
  isFormSubmitting: boolean;
  disabled: boolean;
  className: string;
  error: string;
}

const FormInput = ({
  onChange,
  type,
  id,
  containerStyle,
  label,
  placeholder,
  isFormSubmitting,
  disabled,
  className,
  error,
}: FormInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (val: string) => {
    setInputValue(val);
    onChange(val);
  };

  return (
    <Container style={containerStyle ? containerStyle : {}}>
      {/* form input label - only display for type 'text' or textarea */}
      {(type == "text" || type == "textarea") && (
        <Label htmlFor={id}>{label}</Label>
      )}

      {/* text input */}
      {type == "text" && (
        <TextInput
          placeholder={placeholder}
          id={id}
          className={className}
          onChange={onInputChange}
          value={inputValue}
          disabled={isFormSubmitting || disabled}
        />
      )}

      {/* textarea input */}
      {type == "textarea" && (
        <Textarea
          placeholder={placeholder}
          id={id}
          className={className}
          onChange={onInputChange}
          value={inputValue}
          disabled={isFormSubmitting || disabled}
        />
      )}

      {/* submit button */}
      {type == "submit" && (
        <Submit
          label={label}
          isLoading={isFormSubmitting}
          disabled={isFormSubmitting || disabled}
        />
      )}

      {/* show any error */}
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default FormInput;
