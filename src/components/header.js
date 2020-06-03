import React from "react"
import { Link } from "gatsby"
//import PropTypes from "prop-types"
import HeaderPatients from './headerPatients'
import HeaderDoctors from './headerDoctors'
import HeaderMedias from './headerMedias'

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faComments,faCamera,faUserMd,faHeart,faBookMedical } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <>
    <style type="text/css">
    {`
    .bg-teal {
      background-color: #5a818c;
      color: white;
    }
    #nav-dropdown {
      color: white;
      background-color: #5a818c;
    }
    .dropdown-menu { 
      font-size: 0.9rem;
      background-color: #5a818c; 
    }
    .nav-link {
      color: #fff;
      cursor: default;
      background-color: #5a818c;
  }
    .nav-link:hover {
      color: #000;
      cursor: default;
      background-color: #5a818c; 
  }
    `}
    </style>
    <header className="bg-teal">
      <Container>
        <Navbar expand="md" variant="dark">
        <Navbar.Brand href="/" style={{fontSize:`0.9rem`}}><FontAwesomeIcon icon={faHome} /> ベンゾジアゼピン情報センター</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto" style={{fontSize: `0.9rem`}}>    
              <NavDropdown as="li" title={<span><FontAwesomeIcon icon={faBookMedical} /> 一般情報</span>} id="nav-dropdown">              
                  <NavDropdown.Item className="nav-link">
                    <Link to="/basics" className="nav-link">
                      <FontAwesomeIcon icon={faBookMedical} /> 一般情報トップ
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="nav-link">
                    <Link to="/introduction" className="nav-link">
                      ベンゾジアゼピン概要
                    </Link>
                  
                    <Link to="/introductioneng" className="nav-link">
                      summary of benzodiazepine
                    </Link>
                  
                    <Link to="/basics/benzohistory" className="nav-link">
                      ベンゾジアゼピンの歴史
                    </Link>
                  
                    <Link to="/basics/benzowords" className="nav-link">
                      ベンゾジアゼピン用語集
                    </Link>
                  
                    <Link to="/basics/withdrawalsymptoms" className="nav-link">
                      ベンゾジアゼピン離脱症状一覧 - Withdrawal symptoms
                    </Link>
                  
                    <Link to="/basics/benzolist" className="nav-link">
                      ベンゾ一覧 - ジアゼパム換算表
                    </Link>
                  
                    <Link to="/basics/benzolisteng" className="nav-link">
                      Benzodiazepines List and Equivalents
                    </Link>
                  </NavDropdown.Item>                
              </NavDropdown>
              <NavDropdown as="li" title={<span><FontAwesomeIcon icon={faHeart} /> 患者の方へ</span>} id="nav-dropdown">              
                  <NavDropdown.Item className="nav-link">
                    <Link to="/patients" className="nav-link">
                      <FontAwesomeIcon icon={faHeart} /> 患者の方へトップ
                    </Link>
                  </NavDropdown.Item>
                  <HeaderPatients />
              </NavDropdown>
              <NavDropdown as="li" title={<span><FontAwesomeIcon icon={faUserMd} /> 医師の方へ</span>} id="nav-dropdown">              
                  <NavDropdown.Item className="nav-link">
                    <Link to="/doctors" className="nav-link">
                      <FontAwesomeIcon icon={faUserMd} /> 医師の方へトップ
                    </Link>
                  </NavDropdown.Item>
                  <HeaderDoctors />
              </NavDropdown>
              <NavDropdown as="li" title={<span><FontAwesomeIcon icon={faCamera} /> メディアの方へ</span>} id="nav-dropdown">              
                  <NavDropdown.Item className="nav-link">
                    <Link to="/medias" className="nav-link">
                      <FontAwesomeIcon icon={faCamera} /> メディアの方へトップ
                    </Link>
                  </NavDropdown.Item>
                  <HeaderMedias />
              </NavDropdown>
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
}

function getHeaderMenuDoctors(data) {
  const HeaderMenuDoctorsArray = [];
  data.allHeaderMenuDoctorsJson.edges.forEach(item =>
    HeaderMenuDoctorsArray.push(
      <Link to={item.node.link} className="nav-link">
        {item.node.title}
      </Link>
      )
  );
  return HeaderMenuDoctorsArray;
}


export default Header