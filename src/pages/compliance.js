import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SolutionsLayout from "../components/detailPage/solutionsLayout"
import Solutions from "../utils/solutions"

const Page = () => {
  const solution = Solutions[5]

  return (
    <Layout>
      <SEO title={solution.title} />
      <SolutionsLayout solution={solution} />
    </Layout>
  )
}

export default Page
