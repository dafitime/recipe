import React from "react"
import { Link } from "gatsby"
import Layout from "./components/Layout"


export default function Home() {
  return (
    
     <Layout>
      <h1>Hello World!</h1>
      <div>
        <Link to="/about">about</Link>
      </div>
      <div>
        <Link to="/company/history">History</Link>
      </div>
      </Layout>
    
  )
}