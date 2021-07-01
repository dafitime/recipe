import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        simpleData
        complexData {
          name
          age
        }
      }
      buildTime
    }
  }
`

const FetchData = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/*<h1 > Name : { data.site.siteMetadata.person.name }</h1 >*/}
      <h1>Site: {title}</h1>
    </div>
  )
}

export default FetchData
