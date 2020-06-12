import React, { useEffect, useState } from 'react'
import firebase from 'gatsby-plugin-firebase'
import { globalHistory as history } from "@reach/router"


const useItems = () => {
      const { location, navigate } = history // doctors-article/10
      console.log('◇',location.pathname)
      const pathname = location.pathname
      //const _location = pathname.replace(/\//g, '') // スラッシュを削除
      const slug = pathname // doctors-article/10

      const [items, setItems] = useState([]);
  
      useEffect(() => {
          const unsubscribe = firebase
          firebase
            .firestore()
            .collection("comments")
            .where("slug","==",slug)
            .orderBy("created", 'desc')
            .onSnapshot(snapshot => {
              const data = []
              snapshot.forEach(d => 
                data.push({ // snapshot.doc.mapではだめだった
                  id: d.id,
                  created: d.data().created.toDate(),
                  ...d.data(),
                }));
                setItems(data)
            });
          return () => unsubscribe();
      }, []);
      console.dir('■Items,',items)
      return items;
};


const ItemList = () => {
      const listItem = useItems()
  
      return (
  
          <table className="tg">
              <tbody>
              <tr>
                  <th>なまえ</th>
                  <th>分類</th>
                  <th>コメント</th>
                  <th>スラグ</th>
                  <th>作成日</th>
              </tr>
              </tbody>
  
              {listItem.map(item => (
              <tbody key={item.id}>
              <tr>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.comment}</td>
                  <td>{item.slug}</td>
                  <td>{new Date(item.created.seconds * 1000).toLocaleDateString("ja-JP")} {new Date(item.created.seconds * 1000).toLocaleTimeString("ja-JP")}</td>
                  <td>
                      <button>Edit</button>
                      <button>Delete</button>
                  </td>
              </tr>
              </tbody>
              ))}
  
          </table>
      )
}

export default ItemList
