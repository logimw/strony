import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const SubSection = () => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "subbanner.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              src
            }
          }
        }
      }
    `
  );

  const imageData = desktop.childImageSharp.fluid;

  return (
    <StyledBanner>
      <BackgroundImage fluid={imageData} />
    </StyledBanner>
  );
};

const StyledBanner = styled.section`
  div {
    height: 65vh;
    @media screen and (max-width: 1200px) {
      height: 39vh;
    }
    @media screen and (max-width: 800px) {
      height: 25vh;
    }
    @media screen and (max-width: 400px) {
      height: 12vh;
    }
  }
`;

export default SubSection;
