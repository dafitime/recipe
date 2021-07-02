import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Gallery from "../examples/gallery"
import AllRecipes from "../components/AllRecipes"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/pic3.jpg"
            alt="hero image"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>White Sign Company</h1>
              <h4>Sign Fabrication and Architecture</h4>
            </div>
          </div>
        </header>
        <Gallery />
        <AllRecipes />
      </main>
    </Layout>
  )
}
