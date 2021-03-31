import { lighten } from "polished";
import { FunctionComponent } from "react";
import styled, { css } from "styled-components";

interface BtnProps {
  className?: string;
  type: "button" | "submit" | "reset";
  loading: boolean;
  disabled: boolean;
}

const Btn: FunctionComponent<BtnProps> = ({
  className,
  children,
  type = "button",
  loading = false,
  disabled = false,
}) => (
  <button type={type} className={className} disabled={disabled}>
    {children}
  </button>
);

interface StyledButtonProps {
  type: "button" | "submit" | "reset";
  loading: boolean;
  disabled: boolean;
  className: string;
}

const StyledButton = styled(Btn)`
  height: 49px;
  padding: 0.7rem 1.4rem;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.42;
  letter-spacing: -0.03rem;
  font-family: "Montserrat", Segoe UI, Roboto, Oxygen;
  background: #293462;
  border-style: solid;
  border-width: 2px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 25px;
  transition: background 0.3s;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1rem 0.7rem 1.4rem;
	color: #fff;
	
	i,
  svg {
    transition: margin 0.3s, opacity 0.3s;
    margin: 0 0 0 -6px;
    font-size: 0.85em;
    opacity: 0;
  }

  &:hover:enabled {
    i,
    svg {
      margin: 0 0 0 14px;
      font-size: 0.85em;
      opacity: 0.5;
    }
	}
	
	${(props) =>
    props.loading &&
    css`
      i,
      svg {
        margin: 0 0 0 14px;
        font-size: 0.85em;
        opacity: 0.5;
      }
    `}
	}

  ${(props) =>
    props.type &&
    props.type == "submit" &&
    css`
      background: ${lighten(0.1, "#293462")};
      border-color: #293462;
      color: #fff;
      font-weight: 400;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

      &:hover {
        background: #293462;
        border-color: #293462;
      }

      &:disabled {
        cursor: default;
        border-color: ${lighten(0.5, "#293462")};
        background: ${lighten(0.5, "#293462")};

        &:hover {
          background: ${lighten(0.5, "#293462")};
          border-color: ${lighten(0.5, "#293462")};
        }
      }
    `}
`;

interface ButtonProps {
  type: "button" | "submit" | "reset";
  loading: boolean;
  disabled: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  type = "button",
  loading = false,
  disabled = false,
}) => {
  return (
    <StyledButton type={type} loading={loading} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
