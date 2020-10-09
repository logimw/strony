import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Photos = () => {
  const getData = graphql`
  query ImagesLight1 {
    allFile(filter: { relativeDirectory: { eq: "light1" } }) {
      nodes {
        childImageSharp {
          id
          fluid(maxWidth: 350, maxHeight: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  `

  const data = useStaticQuery(getData)

  return (
    <div className="flex flex-wrap justify-center lg:justify-between pb-4 px-20">
      {data.allFile.nodes.map((image, index) => (
        <Img
        className="inspire-photo"
          title={`Zdjęcie dłoni pokazujące oświetlenie paznokci ${index + 1}`}
          key={image.childImageSharp.id}
          fluid={image.childImageSharp.fluid}
        />
      ))}
    </div>
  )
}

export default Photos
