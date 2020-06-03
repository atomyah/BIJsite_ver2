import React from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
//import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Search from './search'


const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <style type="text/css">
    {`
    .input-empty {
      display:none
    }
    .input-value {
      border: 1px solid black;
    }
    `}
    </style>

      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          marginTop: 20,
          maxWidth: 1024,
          //border: `solid 1px #000`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
             {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
