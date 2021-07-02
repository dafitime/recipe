import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        return <p>{recipe.title}</p>
        console.log(recipe)
      })}
    </div>
  )
}

export default RecipesList
