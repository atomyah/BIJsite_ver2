import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>ページが見つかりません</h1>
    <p><Link to="/" alt="ベンゾジアゼピン情報センター">ホームへ移動</Link></p>
  </Layout>
)

export default NotFoundPage
