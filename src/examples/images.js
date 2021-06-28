import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h1>constrained / default</h1>
        <StaticImage
          src={"../assets/images/pic1.jpg"}
          alt="food"
          height={400}
          placeholder="tracedSVG"
          className="example-img"
          layout="constrained"
          as="section"
        />
      </article>
      <article>
        <h1>fixed</h1>
        <StaticImage
          src={"../assets/images/pic1.jpg"}
          alt="food"
          height={400}
          placeholder="blurred"
          className="example-img"
          layout="fixed"
          as="div"
        />
      </article>
      <h1>full width</h1>
      <article>
        <StaticImage
          src={"../assets/images/pic1.jpg"}
          alt="food"
          height={400}
          placeholder="dominantColor"
          className="example-img"
          layout="fullWidth"
          as="article"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  box-shadow: 10px 0 0 1px;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default Images
