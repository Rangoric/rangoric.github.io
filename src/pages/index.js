import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Wilson Gearld Mead III's Personal Site" />
    <h1>Welcome To My Personal Site</h1>
    <p>I am a Professional Full Stack Developer, whatever that happens to mean nowadays.</p>
    <p>But I also like to write, and also love to game.</p>
    <p>If you want to know me as a person, you want to read <Link to="/about-me/">About Me</Link><br/></p>
    <p>If you want to work with me, you want my <Link to="/resume/">Resume</Link></p>
  </>
)

export default IndexPage
