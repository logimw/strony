import React from "react";
import styled from "styled-components";

const Title = ({ title, subtitle, type, inForm, color }) => {
  return (
    <TitleWrapper inForm={inForm} color={color}>
      <h4>
        <span className={type}>{title}</span> <span>{subtitle}</span>
      </h4>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  display: flex;
  justify-content: ${props =>
    props.inForm === true ? "flex-start" : "center"};
  margin-bottom: ${props => (props.inForm === true ? "5rem" : null)};
  h4 {
    color: ${props =>
      props.color === "white" ? "var(--mainWhite)" : "var(--primaryColor)"};
    border: 2px solid
      ${props =>
        props.color === "white" ? "var(--mainWhite)" : "var(--primaryColor)"};
    padding: 0.25rem 5rem;
    display: block;
    text-align: center;
    font-weight: normal;
  }
  .title {
    color: var(--mainBlack);
  }
  @media screen and (max-width: 600px) {
    margin-bottom: ${props => (props.inForm === true ? "2rem" : null)};
  }
`;

export default Title;
