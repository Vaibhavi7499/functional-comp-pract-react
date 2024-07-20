import axios from "axios";
import React, { useEffect, useState } from "react";
import { Todo_API_URL } from "./API";
import { useNavigate } from "react-router-dom";
import style from "./userForm.module.css";

function TodoList() {
  let [todolist, setTodolist] = useState([]);
  const navigate = useNavigate();

  function getTodos() {
    axios
      .get(Todo_API_URL)
      .then((res) => {
        setTodolist(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  let deleteItem = (id) => {
    axios({
      url: Todo_API_URL + "/" + id,
      method: "DELETE",
    }).then((res) => {
      getTodos();
    });
  };

  let updateItem = (obj) => {
    navigate("/todo/" + obj.id);
  };

  useEffect(() => {
    getTodos();
  }, []);

  
  return (
    <div>
      <table className="table mt-5 ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Todo Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todolist.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => updateItem(e)}
                >
                  update
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteItem(e.id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.centerDiv}>
      </div>
    </div>
  );
}
export default TodoList;
