import { graphql, StaticQuery } from 'gatsby'
import React, { FC } from 'react'
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from '../styles/global'

const Layout: FC = ({ children }) => {
  const renderPage = (data) => (
    <>
      <Normalize />
      <GlobalStyle/>
      {children}
    </>
  )

  return (
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
      render={renderPage}
    />
  )
}

export default Layout
