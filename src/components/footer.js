// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'

const Footer = () => (
    <>
    <style type="text/css">
    {`
    .bg-snow {
      background-color: #eeeeee;
      color: black;
      padding: 20;
    }
    `}
    </style>
  <footer className="bg-snow">
    <Container style={{ paddingTop: `1.2rem`, paddingBottom: `0rem` }}>
      <Navbar expand="md">
          <Nav className="ml-auto">
            <div className="twitter">
　              <a href="https://twitter.com/benzoinfojapan?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="true" data-lang="ja"></a>
                {<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>}
            </div>
            　☜お問い合わせはツイッターへ
          </Nav>            
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ml-auto">
                © {new Date().getFullYear()}, ベンゾジアゼピン情報センター 
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </Container>
  </footer>
  </>
)


export default Footer
