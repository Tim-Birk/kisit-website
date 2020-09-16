import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import MainPage from "../components/mainPage/mainPage"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainPage />
  </Layout>
)

export default IndexPage
