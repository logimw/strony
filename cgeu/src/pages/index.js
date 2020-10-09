import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import About from "../components/Home/About";
import Values from "../components/Home/Values";
import Export from "../components/Home/Export";
import Certificates from "../components/Home/Certificates";
import StyledHero from "../components/StyledHero";
import StyledSubSection from "../components/Home/SubSection";
import { graphql } from "gatsby";
import SEO from "../components/SEO";

export default ({ data }) => (
  <Layout>
    <SEO title="Cosmo-group" description="Description of cosmogroup" />
    <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
      <Banner />
    </StyledHero>
    <About />
    <StyledSubSection />
    <Values />
    <Export />
    <Certificates />
  </Layout>
);

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "baner_new.png" }) {
      childImageSharp {
        fluid(quality: 45, maxWidth: 4160) {
          src
        }
      }
    }
  }
`;
