import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"

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
            <StaticImage
              src="../assets/images/pic2.jpeg"
              alt="Person Pouring Salt in Bowl"
              className="example-img"
              placeholder="blurred"
            />
          </section>
        </main>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  .example-img {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    border-radius: 5px;

    .exmaple-img:hover {
      position: absolute;
      text-align: center;
      padding-left: 1em;
      padding-right: 1em;
      width: 100%;
      top: 50%;
      left: 50%;
      opacity: 0;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      -webkit-transition: all 0.3s ease-in-out 0s;
      -moz-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }
  }
`

export default About
