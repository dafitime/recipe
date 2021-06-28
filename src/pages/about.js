import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
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
              Coloring book iceland sartorial tattooed portland craft beer prism
              flannel.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
