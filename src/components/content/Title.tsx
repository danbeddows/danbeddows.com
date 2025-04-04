import { faLink } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slugify from "slugify";
import styled from "styled-components";

interface TitleProps {
  children: React.ReactNode;
  hideLink?: boolean;
}

const TitleContainer = styled.h2<TitleProps>`
  margin: 0 0 1rem;
  line-height: 1.3;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: -0.03rem;
  color: var(--coral);
  position: relative;
  display: flex;
  align-items: center;
  cursor: default;

  a {
    display: none;
  }

  /**
	 * Show the :hover link on desktop
	 */
  @media (min-width: 769px) {
    a {
      display: flex;
    }

    &:hover {
      a {
        opacity: 1;
      }
    }

    /**
		 * If hideLink==true, adjust margin to 0
		 */
    margin: 1rem ${(props) => (!props.hideLink ? "-40px" : "0")};
  }
`;

const StyledLink = styled.a`
  width: 26px;
  margin-right: 13px;
  font-size: 14px;
  color: var(--coral);
  text-decoration: none;
  opacity: 0;
  transition: opacity 0.15s;
  align-items: center;
  justify-content: center;
  padding: 6px;
  cursor: pointer;
`;

const Title  = ({ children, hideLink = false }: TitleProps) => {
  const slug = slugify((children ?? {}).toString(), {
    lower: true,
  });

  return (
    <TitleContainer hideLink={hideLink}>
      {!hideLink && (
        <StyledLink href={"#" + slug} id={slug}>
          <FontAwesomeIcon icon={faLink} />
        </StyledLink>
      )}
      {children}
    </TitleContainer>
  );
};

export default Title;
