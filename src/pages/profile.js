import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import ProfileImg from "../images/profile_200x170.png"

import { Container, Image, ListGroup, Figure } from 'react-bootstrap'
import Style from './profile.module.css'

const ProfilePage = () => (

    <Layout>
      <SEO title="ベンゾジアゼピン情報センター" />
      <Container fluid="md">
      <h1 style={{fontSize: `1.25rem`}}>管理人プロフィール</h1>
        <p>
        非ベンゾのアモバン（ゾピクロン）ユーザーであった。
        2015年後半体調悪化。総合診療科などの診察やさまざまな検査でまったく異常なしであったため、
        食事内容を立て直し上咽頭やお酒などリスク因子について調査しひとつひとつ排除していく。
        断酒によってある程度体調改善。

        また、その過程でベンゾの危険性と、
        非ベンゾもベンゾファミリーのひとつであることを知り減薬を決意。
        減薬過程で中途半端な知識から最強ベンゾのひとつフルニトラゼパム（サイレース・ロヒプノール）に自己判断で置換（最大の失敗）。
        フルニトラゼパムを主治医の指示のもと1か月で減薬、
        生き地獄のような離脱症状を経験する。 
        その後再服薬および増薬（ジアゼパム10mg）が功を奏し”ある程度”安定化。
        マイクロテーパリングにて減薬を始めた（2017年2月）。
        フルニトラゼパムの減薬は終了（2020年1月）。
        現在ジアゼパムを減薬中（2020年5月現在2.2mg残）。
        </p>
        <div>
        <ListGroup horizontal>
            <Link to="/patients-article/8"><ListGroup.Item>管理人のベンゾ減薬記録</ListGroup.Item></Link>
            <ListGroup.Item>管理人の離脱症状詳細（準備中）</ListGroup.Item>
        </ListGroup>
        </div>
        <p></p>
        <Figure style={{margin:`auto`}}>
            <Figure.Image
            width={200}
            src={ProfileImg} roundedCircle 
            /> 
            <Figure.Caption>
                2020年5月10日撮影
            </Figure.Caption>
        </Figure>
        
      </Container>
</Layout>
)

export default ProfilePage


