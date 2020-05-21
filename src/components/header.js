import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import { Container, Navbar, Nav } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments,faCamera,faUserMd,faHeart,faBookMedical } from '@fortawesome/free-solid-svg-icons'

const Header = ({ siteTitle }) => (
  <>
  <style type="text/css">
  {`
  .bg-teal {
    background-color: #5a818c;
    color: white;
  }
  `}
  </style>
  <header className="bg-teal">
    <Container>
      <Navbar expand="md" variant="dark">
      <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto" style={{fontSize: `0.9rem`}}>
            <Nav.Item as="li">
              <Link to="/basics" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faBookMedical} /> 一般情報
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/patients" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faHeart} /> 患者の方へ
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/doctors" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faUserMd} /> 医師の方へ
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/medias" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faCamera} /> メディアの方へ
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <a href="https://benzofaq.com" target="_blank" rel="noreferrer noopener" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faComments} /> 質問フォーラム
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container> 
  </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
