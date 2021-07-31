import { faLink } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import slugify from "slugify";
import styled from "styled-components";

interface TitleProps {
  hideLink?: boolean;
}

const TitleContainer = styled.h2<TitleProps>`
  line-height: 1;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.03rem;
  color: #ff5757;
  position: relative;
  display: flex;
  align-items: center;

  /**
	 * Show the :hover link on desktop
	 */
  @media screen and (min-width: 768px) {
    &:hover {
      a {
        opacity: 1;
      }
    }

    /**
		 * If hideLink==true, adjust margin to 0
		 */
    margin: 1.3rem ${(props) => (!props.hideLink ? "-40px" : "0")};
  }

  /**
	 * Hide :hover link on mobile
	 */
  @media screen and (max-width: 768px) {
    margin: 1.3rem 0;

    a {
      display: none;
    }
  }
`;

const StyledLink = styled.a`
  display: block;
  width: 26px;
  margin-right: 13px;
  font-size: 14px;
  color: #ff5757;
  text-decoration: none;
  opacity: 0;
  transition: opacity 0.15s;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
`;

const Title: FunctionComponent<TitleProps> = ({ children, hideLink }) => {
  const slug = slugify(children?.toString()!, {
    lower: true,
  });

  hideLink = hideLink !== undefined;

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
