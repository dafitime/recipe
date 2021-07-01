import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const query = graphql`
  {
    allFile(
      filter: { extension: { ne: "svg" }, relativeDirectory: { eq: "signs" } }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED

            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image
        const pathToImage = getImage(image)
        return (
          <article key={index} className="item">
            <GatsbyImage
              image={pathToImage}
              alt={name}
              className="gallery-img"
            />
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .item {
    margin: 0.5rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }

  display: flex;
  flex-wrap: wrap;
`

export default Gallery
