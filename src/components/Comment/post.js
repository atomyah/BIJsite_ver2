import React, { useEffect, useState } from 'react'
import firebase from 'gatsby-plugin-firebase'
import { globalHistory as history } from "@reach/router"

import { Form, Button } from 'react-bootstrap'

const Post = () => {
    const { location, navigate } = history // doctors-article/10
    console.log('◇',location.pathname)
    const pathname = location.pathname
    //const _location = pathname.replace(/\//g, '') // スラッシュを削除
    const slug = pathname // doctors-article/10

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [comment, setComment] = useState("")

const onSubmit = e => { // eはevent
    /* 
    preventDefaultでページがリロードされるのを防ぐ
    */
    e.preventDefault()
    firebase
        .firestore()
        .collection("comments")
        .add({
            name: name,
            type: type,
            comment: comment,
            slug: slug,
            created: firebase.firestore.Timestamp.fromDate(new Date())
        })
        //.then でフォームクリア
        .then(() => setName(""), setType(""), setComment(''))
}

    return (
      <form onSubmit={onSubmit}>
        <Form.Group>
            <Form.Control placeholder="お名前"
            value={name}
            name="name"
            onChange={e => setName(e.currentTarget.value)}
            type="text"
            />
        </Form.Group>
        <Form.Group>
        <Form.Control as="select" name="person" onChange={e => setType(e.currentTarget.value)}>
                <option value="未指定">未指定</option>
                <option value="patients">患者・当事者・ご家族</option>
                <option value="doctors">医師・薬剤師・その他医療関係者</option>
                <option value="medias">メディア関係者</option>
        </Form.Control>
        </Form.Group>
        <Form.Group>
        <Form.Control as="textarea" rows="3" placeholder="コメント"
          value={comment}
          name="comment"
          onChange={e => setComment(e.currentTarget.value)}
          type=""
        />
        </Form.Group>
        <Button variant="info" type="submit">書き込み</Button>
      </form>
    )

 }
export default Post