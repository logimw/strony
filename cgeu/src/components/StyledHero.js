import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const StyledHero = ({ img, className, children }) => {
  return (
    <BackgroundImage className={className} fluid={img}>
      {children}
    </BackgroundImage>
  );
};

// const BackgroundImage = styled.div`

// `;

export default styled(StyledHero)`
  background-position: center;
  background-size: cover;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  height: 69vh;
  @media screen and (max-width: 1200px) {
    height: 30vh;
  }
  @media screen and (max-width: 800px) {
    height: 25vh;
  }
`;
