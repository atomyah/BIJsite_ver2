import React, { useState, useEffect } from "react"
import firebase from "../utils/firebase"
import "../styles/global.css"


const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase
        firebase
          .firestore()
          .collection("items")
          .onSnapshot(snapshot => {
            const data = []
            snapshot.forEach(d => data.push({ // snapshot.doc.mapではだめだった
                id: d.id,
                ...d.data(),
              }));
              console.log('◆data１９行目 ', data);
              setItems(data)
          });
        return () => unsubscribe();
    }, []);

    console.log('■items２５行目 ', items);
    return items;
};

const deleteItem = (id) => {
    firebase
      .firestore()
      .collection("items")
      .doc(id)
      .delete()
}


const ItemList = ({editItem}) => {

    /* useItem() API を listItem変数に格納 */
    const listItem = useItems()
    console.log('■listItem３２行目 ', listItem);
    return (
        
        <table className="tg">
            <tbody>
            <tr>
                <th>名称</th>
                <th>タイプ</th>
                <th>数</th>
                <th>備考</th>
                <th></th>
            </tr>
            </tbody>
            
            {listItem.map(item => (
            <tbody key={item.id}>
            <tr>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.qty}</td>
                <td>{item.description}</td>
                <td>
                    <button onClick={() => editItem(item)}>Edit</button>
                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                </td>
            </tr>
            </tbody>
            ))}
        
        </table>
    )

}

export default ItemList