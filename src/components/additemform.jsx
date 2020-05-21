import React, { useState } from "react"
import firebase from "firebase"

const AddItemForm = () => {

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [qty, setQty] = useState(null)
    const [description, setDescription] = useState("")

const onSubmit = e => { // eはevent
    /* 
    preventDefaultでページがリロードされるのを防ぐ
    */
    e.preventDefault()
    firebase
        .firestore()
        .collection("items")
        .add({
            name,
            type,
            qty,
            description,
        })
        //.then でフォームクリア
        .then(() => setName(""), setType(""), setQty(''), setDescription(""))
}

    return (
      <form onSubmit={onSubmit}>
        <input placeholder="Name"
          value={name}
          name="name"
          /*  e.currentTarget.value にインプットされた値が入る */
          onChange={e => setName(e.currentTarget.value)}
          type="text"
        />
        <input placeholder="Type"
          value={type}
          name="type"
          onChange={e => setType(e.currentTarget.value)}
          type="text"
        />
        <input placeholder="Qty"
          value={qty}
          name="qty"
          onChange={e => setQty(e.currentTarget.value)}
          type="number"
        />
        <input placeholder="Description"
          value={description}
          name="description"
          onChange={e => setDescription(e.currentTarget.value)}
          type="text"
        />
        <button>Submit</button>
      </form>
    )

 }
export default AddItemForm