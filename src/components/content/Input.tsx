import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0 1.15rem;
  height: 49px;
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

interface InputProps {
  className: string;
  id: string;
  value: string;
  placeholder: string;
  onChange: (event: any) => void;
  disabled: boolean;
  type: string;
}

const Input: React.FC<InputProps> = ({
  children,
  className,
  id,
  value,
  placeholder,
  onChange,
  disabled,
  type,
}) => {
  return (
    <StyledInput
      type={type}
      className={className}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    >
      {children}
    </StyledInput>
  );
};

export default Input;
