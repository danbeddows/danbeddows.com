import { faLink } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import slugify from "slugify";
import styled from "styled-components";

const TitleContainer = styled.h2`
  margin: 1.3rem -40px;
  line-height: 1;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.03rem;
  color: #ff5757;
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    a {
      opacity: 1;
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

const Title: FunctionComponent = ({ children }) => {
  const slug = slugify(children?.toString()!, {
    lower: true,
  });

  return (
    <TitleContainer>
      <StyledLink href={"#" + slug} id={slug}>
        <FontAwesomeIcon icon={faLink} />
      </StyledLink>
      {children}
    </TitleContainer>
  );
};

export default Title;
