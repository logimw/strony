import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        author
        siteUrl
        image
        icon
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData)
  const { siteTitle, siteDescription, siteUrl, image, icon } = site.siteMetadata
  return (
    <div>
      <Helmet htmlAttributes={{ lang: "pl" }} title={`${title} | ${siteTitle}`}>
        <link rel="icon" href={`${siteUrl}/${icon}`} />
        <meta charSet="utf-8" />
        <link rel="canonical" href={siteUrl} />
        <meta name="description" content={description || siteDescription} />
        <meta content="image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:card" content={`${siteUrl}/${image}`} />
        <meta name="twitter:title" content={siteTitle} />
        <meta
          name="twitter:description"
          content={description || siteDescription}
        />

        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={`${siteUrl}${image}`} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
      </Helmet>
    </div>
  )
}

export default SEO
