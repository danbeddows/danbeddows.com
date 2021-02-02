import styled from "styled-components";

const StyledTextarea = styled.textarea`
  padding: 1rem 1.3rem;
  resize: none;
  font-size: 0.95em;
  font-weight: 400;
  line-height: 1.42;
  letter-spacing: -0.03rem;
  font-family: "Montserrat", Segoe UI, Roboto, Oxygen;
  border-radius: 25px;
  border-style: solid;
  border-width: 0px;
  border-color: rgba(50, 50, 93, 0.25);
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &::placeholder {
    color: #999;
  }

  &:focus {
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`;

const Textarea = ({
  children,
  className,
  id,
  value,
  placeholder,
  onChange,
  disabled,
}) => {
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
