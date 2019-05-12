import { graphql } from 'gatsby'
import * as React from 'react'
import Hero from '../components/hero'
import SEO from '../components/seo'
import Layout from '../layouts'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title='Home'/>
        <Hero/>
      </Layout>
    )
  }
}

export default IndexPage
