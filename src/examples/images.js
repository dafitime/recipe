import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <StaticImage
        className="image-content-2"
        src={"../assets/images/big.jpg"}
        alt="food"
        placeholder="blurred"
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

export default Images
