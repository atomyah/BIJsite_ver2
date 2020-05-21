import React, { useState } from "react"
import firebase from "../utils/firebase";
import ItemList from '../components/itemlist'
import AddItemForm from '../components/additemform'
import UpdateItem from "../components/updateitem"
import "../styles/global.css"

export default () => {

  /* 初期化するためのカラ変数配列 */
  const initialItemState = [
    { id: null, name: "", type: "", qty: "", description: "" },
  ]
  /* currentItemステート変数をセット */
  const [currentItem, setCurrentItem] = useState(initialItemState)

  /* 編集モードフラッグステート変数をセット */
  const [editing, setEditing] = useState(false)



  /* editモードをtrueにしてcurrentItemにEditボタンを押下したitemを格納　*/
  const editItem = (item) => {
    setEditing(true)
    setCurrentItem({
      id: item.id,
      name: item.name,
      type: item.type,
      qty: item.qty,
      description: item.description,
    })
  }

  /* firestoreのデータを更新 */
  const updateItem = ({ currentItem }, updatedItem) => {
    console.log(
      "Firestoreで更新するデータ:　",
      updatedItem,
      currentItem.id
    );
    //editフラグをfalseに
    setEditing(false)
    firebase
      .firestore()
      .collection("items")
      .doc(currentItem.id)
      .update(updatedItem);
  };

  return (
    <div>
      <h1>Firestore CRUD App </h1>
      <h2>Item List</h2>
      <ItemList editItem={editItem} />
      <h2>Add Item</h2>
      {editing ? <UpdateItem setEditing={setEditing} currentItem={currentItem} updateItem={updateItem} /> : <AddItemForm />}
    </div>
  )
}