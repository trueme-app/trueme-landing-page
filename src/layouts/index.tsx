import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Header from '../components/header'
import { GlobalStyle } from '../styles/global'
import { Container, Main } from './styles'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    // tslint:disable-next-line jsx-no-lambda
    render={data => (
      <>
        <GlobalStyle/>
        <Header/>
        <Main>{children}</Main>
      </>
    )}
  />
)

export default Layout
