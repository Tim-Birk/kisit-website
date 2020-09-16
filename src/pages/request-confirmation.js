import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import RequestConfirmation from "../components/demoForm/requestConfirmation"


const Page = () => {
  return (
    <Layout>
      <SEO title={'Demo Request Confirmation'} />
      <RequestConfirmation />
    </Layout>
  )
}

export default Page
