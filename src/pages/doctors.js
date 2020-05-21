import React from "react"
import { graphql, Link　} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Card } from 'react-bootstrap'

const PatientsPage = ({ data }) => (
 <Layout>
   <Container fluid="md">
    <SEO title="医師の方へ" />
    <h1 style={{ fontSize: '1.25rem'}}>医師の方へ</h1>
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>

        {data.allMicrocmsArticles.edges.map(edge => {
          const articles = edge.node
          const category = edge.node.category[0].name
          
          console.log('◆categoryは　' + category)
          console.log('◆numは　' + edge.node.num)
          //console.log('◆articles.idは　' + articles.id)
          //console.log('◆リンク先は　' + `/doctors-article/${articles.id}`)

          //if (category === 'doctors') {      //カテゴリーが医師用の場合表示
            return (
              <React.Fragment key={articles.id}>
                <Card style={{  width: '18rem', fontSize: '0.9rem' }}>
                  <Card.Body>
                    <Link to={`/doctors-article/${articles.num}`}><Card.Img variant="top" src={articles.pict.url} /></Link>
                    <Card.Title>{articles.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{articles.date}</Card.Subtitle>
                    <Card.Text>
                      {articles.feature}
                    </Card.Text>
                    <Link to={`/doctors-article/${articles.num}`}>続きを読む</Link>
                  </Card.Body>
                </Card>
            </React.Fragment>
            )
          }
//        }
        )}
    </div>
   </Container>
 </Layout>
)

export const query = graphql`
 {
    allMicrocmsArticles(
      filter: { category: {elemMatch:  {name: { eq: "doctors"}}} }
      sort: { fields: [num], order: ASC }
   ) {
     edges {
       node {
         id
         num
         title
         title_origin
         category {
           id
           name
         }
         pict {
           url
         }
         body
         feature
       }
     }
   }
 }
`

export default PatientsPage