import styled from "styled-components";

const StyledTextarea = styled.textarea`
  padding: 1rem 1.3rem;
  resize: none;
  font-size: 0.95em;
  font-weight: 400;
  line-height: 1.42;
  letter-spacing: -0.02rem;
  border-radius: 14px;
  border-style: solid;
  border-width: 2px;
  border-color: var(--light-blue);
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &::placeholder {
    color: #a8a8a8;
    font-weight: 400;
    letter-spacing: -0.3px;
  }
`;

interface TextareaProps {
  children: React.ReactNode;
  className: string;
  id: string;
  value: string;
  placeholder: string;
  onChange: (event: any) => void;
  disabled: boolean;
}

const Textarea = ({
  children,
  className,
  id,
  value,
  placeholder,
  onChange,
  disabled,
}: TextareaProps) => {
  return (
    <StyledTextarea
      className={className}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    >
      {children}
    </StyledTextarea>
  );
};

export default Textarea;
