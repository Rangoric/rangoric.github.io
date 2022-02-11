import React from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo title="Wilson Gearld Mead III's Personal Site" />
    <h1>Welcome To My Personal Site</h1>
    <p>I am a Professional Full Stack Developer, whatever that happens to mean nowadays.</p>
    <p>But I also like to write, and also love to game
      <ul>
        <li><Link to={"/base-srd/"}>Base SRD</Link></li>
        <li><Link to={"/srd/"}>My SRD</Link></li>
        <li><Link to={"/magic/"}>Magic Decks</Link></li>
        <li><Link to={"/blog/"}>Blog Posts</Link></li>
      </ul>
    </p>
    <p>If you want to know me as a person, you want to read <Link to="/about-me/">About Me</Link><br /></p>
    <p>If you want to work with me, you want my <Link to="/resume/">Resume</Link></p>
  </>
)

export default IndexPage
