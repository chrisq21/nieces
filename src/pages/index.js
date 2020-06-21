import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div
        style={{ maxWidth: `300px`, marginBottom: `1.45rem`, margin: "0 auto" }}
      >
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
