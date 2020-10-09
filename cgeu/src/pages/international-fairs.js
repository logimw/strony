import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";
import TradeForm from "../components/FairExibition/TradeForm";
import SEO from "../components/SEO";

const FairsExibition = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Fairs exibition with Cosmo-group"
        description="Description of cosmogroup page"
      />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
        <Banner title="Trade Fair" />
      </StyledHero>
      <TradeForm />
    </Layout>
  );
};

export default FairsExibition;

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "MW4A6981.jpg" }) {
      childImageSharp {
        fluid(quality: 45, maxWidth: 4160) {
          src
        }
      }
    }
  }
`;
