import React from "react"
import Link from "gatsby-link"

export default () =>
  <div style={{ color: `blue` }}>
    <h1>Hello Magnum!</h1>
    <p>Proud of my firsty Gatsby website!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <nav>
      <Link to="/page-2/">Link</Link>
    </nav>
    <nav>
      <Link to="/counter/">Counter</Link>
    </nav>
  </div>
