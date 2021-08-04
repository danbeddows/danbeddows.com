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
  margin-bottom: 9px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: default;
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
  text-decoration-color: var(--coral);
  color: var(--blue);
`;

const Error = styled.div`
  font-size: 13px;
  margin: 10px 0 5px 17px;
  color: #d43f3a;
`;

interface FormInputProps {
  onChange?: (value: string) => void | undefined;
  type: string;
  id: string;
  containerStyle?: {};
  label: string;
  placeholder?: string | undefined;
  isFormSubmitting?: boolean;
  disabled?: boolean;
  className?: string;
  error: string | undefined;
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

    if (onChange) {
      onChange(val as string);
    }
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
          placeholder={placeholder!}
          id={id}
          className={className!}
          onChange={onInputChange}
          value={inputValue}
          disabled={(isFormSubmitting || disabled)!}
        />
      )}

      {/* textarea input */}
      {type == "textarea" && (
        <Textarea
          placeholder={placeholder!}
          id={id}
          className={className!}
          onChange={onInputChange}
          value={inputValue}
          disabled={(isFormSubmitting || disabled)!}
        />
      )}

      {/* submit button */}
      {type == "submit" && (
        <Submit
          label={label}
          isLoading={isFormSubmitting!}
          disabled={(isFormSubmitting || disabled)!}
        />
      )}

      {/* show any error */}
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default FormInput;
