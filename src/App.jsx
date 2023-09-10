import { useState } from "react";
import Form from "./Form";
import List from "./List";
let i = 1;
const App = () => {
  const [data, setData] = useState([]);

  // save Todo logic
  const saveTodo = (expance, amount) => {
    if (expance !== "" && amount !== "") {
      const x = {
        id: i,
        expance: expance,
        amount: amount,
      };
      setData([x, ...data]);
      i++;
    } else {
      alert("Enter Expance and Amount");
    }
  };

  // delete Todo logic

  const deleteTodo = (item) => {
    setData(
      data.filter((index) => {
        if (index.id !== item.id) {
          return index;
        }
      })
    );
  };

  // edit logic here
  const [editData, setEditData] = useState({
    text: {},
    is_edit: false,
  });

  const editTodo = (text) => {
    setEditData({
      text: text,
      is_edit: true,
    });
  };

  // update logic
  const update = (old_id, expance, amount) => {
    setData(
      data.map((item) => {
        if (item.id === old_id) {
          return {
            ...item,
            expance: expance,
            amount: amount,
          };
        } else {
          return {
            ...item,
          };
        }
      })
    );
    setEditData({
      text: {},
      is_edit: false,
    });
  };

  return (
    <>
      <h1>expance manager</h1>
      <Form saveTodo={saveTodo} editData={editData} update={update} />
      <List data={data} deleteTodo={deleteTodo} editTodo={editTodo} />
    </>
  );
};
export default App;
