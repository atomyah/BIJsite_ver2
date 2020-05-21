import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Breadcrumb} from 'react-bootstrap'

import { useLocation } from "@reach/router"
import { DiscussionEmbed } from "disqus-react";

const Articlearticle = props => {

 const article = props.data.microcmsArticles // ㊟allMicrocmsArticleでない
 //console.log('◆article.category[0].name ' + article.category[0].name)
 //console.log('◆article.writer.name ' + article.writer.name)

 /* コメント欄機能Disqusの設定 */
 const slug = useLocation()
 const title = article.title
 const disqusShortname = "";
 const disqusConfig = {
  config: { identifier: slug, title },
}

 const categoryName = article.category[0].name // パンくずで使う上位ページの分類名
 let categoryString = ""
 switch (categoryName) {
     case 'patients':  
         categoryString = "患者の方へ"
         break;
     case 'doctors':  
         categoryString = "医師の方へ"
         break;
    case 'medias': 
         categoryString = "メディアの方へ"
         break;        
     default:
         categoryString = ""
 }

 return (
   <Layout>
     <Container fluid="md">
     <SEO title={article.title} 
        description={sumarrize(article.body)}
        image={article.pict.url}  
        lang="ja"
    />
        <Breadcrumb style={{fontSize: `0.65rem`, backgroundColor: `white`}}>
          <Breadcrumb.Item href="/">ホーム</Breadcrumb.Item>
          <Breadcrumb.Item href={`/${categoryName}`}>
            {categoryString}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{article.title}</Breadcrumb.Item>
        </Breadcrumb>
     <div>
       <h1 style={{ fontSize: `1.25rem`}}>{article.title}</h1>
       <span style={{ fontSize: `1.1rem`}}
                dangerouslySetInnerHTML={{
                  __html: `${article.title_origin}`,
                }}
       >
       </span>
       <Row>
         <Col md={8}>
         <span style={{ fontSize: `0.9rem`, color: `gray` }}>著者：{article.writer.name}</span>
         </Col>
         <Col md={4}>
         <span style={{ fontSize: `0.9rem`, color: `gray` }}>投稿：{article.date}</span>
         </Col>
       </Row>     
       <br />
       <p
         dangerouslySetInnerHTML={{
           __html: `${article.body}`,
         }}
       ></p>
       <br />
       <span>著者：{article.writer.name}</span>
       <br />
       <img src={article.writer.image.url} width={160} alt={article.writer.name} />
       <p
         dangerouslySetInnerHTML={{
           __html: `${article.writer.profile}`,
         }}
       ></p>
     </div>
     <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
     </Container>
   </Layout>
 )
}

export default Articlearticle

export const query = graphql`
 query($id: String!) {
   microcmsArticles(id: { eq: $id }) {
     title
     title_origin
     date
     body
     pict {
       url
     }
     body
     category {
       name
     }
     writer {
       name
       profile
       image {
         url
       }
     }
   }
 }
`
let striptags = require('striptags');
function sumarrize(html) {
  const metaDescription = striptags(html).replace(/\r?\n/g, '').trim();
  return metaDescription.length <= 120
    ? metaDescription
    : metaDescription.slice(0, 120) + '...';
}