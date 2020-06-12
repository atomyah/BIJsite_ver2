import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Container } from 'react-bootstrap'
import Comment from '../components/Comment'
import Post from '../components/Comment/post'

const TestPage = () => (

    <Layout>
      <Container fluid="md">
      <h1>テスト</h1>
        <Comment />
        <Post />
      </Container>
    </Layout>
)

export default TestPage