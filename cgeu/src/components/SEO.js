import React from "react";
import favicon from "../images/favicon.png";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        icon
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData);
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    author,
  } = site.siteMetadata;
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <link rel="icon" href={favicon} />
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      {/* facebook cards */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:creator" content={author} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
      <meta property="og:title" content={siteTitle} />
    </Helmet>
  );
};

export default SEO;
