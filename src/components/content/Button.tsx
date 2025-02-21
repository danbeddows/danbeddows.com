import { cssVar, lighten } from "polished";
import styled, { css } from "styled-components";

interface BtnProps {
  children: React.ReactNode;
  className?: string;
  type: "button" | "submit" | "reset";
  loading: boolean;
  disabled: boolean;
}

const Btn = ({
  className,
  children,
  type = "button",
  loading = false,
  disabled = false,
}: BtnProps) => (
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
  line-height: 1.42;
  background: var(--dark-blue);
  border-style: solid;
  border-width: 2px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 14px;
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
      margin: 0 0 0 10px;
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
      background: ${lighten(0.1, String(cssVar("--dark-blue")))};
      border-color: var(--dark-blue);
      color: #fff;
      font-weight: 400;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

      &:hover {
        background: var(--dark-blue);
        border-color: var(--dark-blue);
      }

      &:disabled {
        cursor: default;
        border-color: ${lighten(0.5, String(cssVar("--dark-blue")))};
        background: ${lighten(0.5, String(cssVar("--dark-blue")))};

        &:hover {
          background: ${lighten(0.5, String(cssVar("--dark-blue")))};
          border-color: ${lighten(0.5, String(cssVar("--dark-blue")))};
        }
      }
    `}
`;

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  type = "button",
  loading = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton type={type} loading={loading} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
