// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-solid-svg-icons'

import Twitter_Logo_Blue from '../images/Twitter_Logo_Blue.svg'


const Footer = () => (
    <>
    <style type="text/css">
    {`
    .bg-snow {
      background-color: #eeeeee;
      color: black;
      padding: 20;
    }
    .box img {
      _vertical-align: middle; /* 画像を垂直に */
    `}
    </style>
  <footer className="bg-snow">
    <Container style={{ paddingTop: `1.2rem`, paddingBottom: `0rem` }}>
      <Navbar expand="md">
          <Nav className="ml-auto">
            {/* ロードが遅くなるのでフォローボタンの埋め込みはやめた
            <div className="twitter">
　              <a href="https://twitter.com/benzoinfojapan?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="true" data-lang="ja"></a>
                {<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>}
            </div>
            */}
              <div className="box">
            　<img src={Twitter_Logo_Blue} width={30} alt={'Twitter'} />
              <a href="https://twitter.com/benzoinfojapan" target="_blank" rel="noreferrer noopener">@benzoinfojapan</a>　☜お問い合わせはツイッターへ
              </div>
          </Nav>
      </Navbar>
      <Navbar>      
          <Nav className="ml-auto">
                © {new Date().getFullYear()}, ベンゾジアゼピン情報センター 
          </Nav>
      </Navbar>
    </Container>
  </footer>
  </>
)


export default Footer
