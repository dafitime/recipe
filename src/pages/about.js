import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import RecipesList from "../components/RecipesList"

const About = () => {
  return (
    <Layout>
      <Wrapper>
        <main className="page">
          <section className="about-page">
            <article>
              <h2>I'm baby coloring book poke taxidermy</h2>
              <p>
                I'm baby +1 try-hard meggings typewriter. Yuccie butcher
                farm-to-table succulents ramps.
              </p>
              <p>
                Lyft kale chips austin kickstarter, cred semiotics meh tattooed
                mustache readymade XOXO. Helvetica freegan pour-over typewriter
                pok pok selvage asymmetrical DIY banh mi craft beer tote bag.
                Coloring book iceland sartorial tattooed portland craft beer
                prism flannel.
              </p>
              <Link to="/contact" className="btn">
                contact
              </Link>
            </article>
            <div className="image-wrapper">
              <StaticImage
                src="../assets/images/pic2.jpeg"
                alt="Person Pouring Salt in Bowl"
                placeholder="blurred"
                className="example-img"
              />
            </div>
          </section>
          <section className="featured-recipes">
            <h5>Sign List</h5>
            <RecipesList />
          </section>
        </main>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`

const Wrapper = styled.section`
  .image-wrapper {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    margin-left: 20px;
  }

  .section-wrapper {
    margin-top: 5vh;
  }

  .example-img {
    opacity: 1;
    transition: transform 0.5s, filter 0.5s ease-in-out;
    filter: blur(0);
    transform: scale(1);

    :hover {
      filter: blur(2px);

      transform: scale(1.2);
    }
  }
`

export default About
