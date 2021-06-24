import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()}
        <span>SimplyRecipes</span> Built with <a href="gatsbyjs.com">Gatbsy</a>
      </p>
    </footer>
  )
}

export default Footer
