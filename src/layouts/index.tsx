import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from '../styles/global'
import { Container } from './styles'

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
        <Normalize />
        <GlobalStyle/>
        {children}
      </>
    )}
  />
)

export default Layout
