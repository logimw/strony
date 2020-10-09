import React from "react";
import Layout from "../components/Layout";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import Form from "../components/Contact/Form";
import SEO from "../components/SEO";

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Contact to Cosmo-group"
        description="Description of cosmogroup"
      />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
        <Banner title="Contact" />
      </StyledHero>
      <Form />
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "MW4A69640.jpg" }) {
      childImageSharp {
        fluid(quality: 45, maxWidth: 4160) {
          src
        }
      }
    }
  }
`;
