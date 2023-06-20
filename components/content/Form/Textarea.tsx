import StyledTextarea from "components/content/Textarea";
import React, { useEffect, useState } from "react";

interface TextareaProps {
  value: string;
  placeholder: string;
  id: string;
  className: string;
  onChange: (event: any) => void;
  disabled: boolean;
}

const Textarea = ({
  value = "",
  placeholder,
  id,
  className,
  onChange,
  disabled,
}: TextareaProps) => {
  return (
    <StyledTextarea
      placeholder={placeholder}
      id={id}
      className={className}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      disabled={disabled}
    ></StyledTextarea>
  );
};

export default Textarea;
