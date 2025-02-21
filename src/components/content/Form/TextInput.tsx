import Input from "src/components/content/Input";
import React from "react";

interface TextInputProps {
  value: string;
  placeholder: string;
  id: string;
  className: string;
  onChange: (event: any) => void;
  disabled: boolean;
}

const TextInput = ({
  value = "",
  placeholder,
  id,
  className,
  onChange,
  disabled,
}: TextInputProps) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      id={id}
      className={className}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      disabled={disabled}
    />
  );
};

export default TextInput;
