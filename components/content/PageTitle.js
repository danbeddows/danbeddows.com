import styled from "styled-components";

const Title = styled.h1`
  margin: 0 0 -1rem;
  line-height: 1.15;
  font-weight: 700;
  color: #293462;
  font-family: "Montserrat", Roboto, Oxygen, Ubuntu, Droid Sans, Helvetica Neue,
    sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;

    max-width: 66%;
  }

  @media screen and (min-width: 769px) {
    font-size: 3rem;
  }
`;

const PageTitle = (props) => {
  return <Title>{props.children}</Title>;
};

export default PageTitle;
