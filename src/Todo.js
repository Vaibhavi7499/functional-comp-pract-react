import React, { useEffect, useState } from "react";
import style from "./userForm.module.css";
import axios from "axios";
import { Todo_API_URL } from "./API";
import { useNavigate, useParams } from "react-router-dom";
function Todo() {
  let [todo, setTodo] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  function getInputValue(e) {
    setTodo(e.target.value);
  }

  useEffect(() => {
    if (params.id) {
      axios.get(Todo_API_URL + "/" + params.id).then((res) => {
setTodo(res.data.name)
    });
    }
  }, [params.id]);

  let addTodo = () => {
    if (params.id) {
      axios({
        url: Todo_API_URL + "/" + params.id,
        method: "PUT",
        data: {
           name:todo
        },
      }).then((r)=>{
        navigate("/todolist")
      });
    }else{
        
        axios({
          url: Todo_API_URL,
          method: "POST",
          data: {
            name: todo,
          },
        })
          .then((res) => {
            navigate("/todolist");
          })
          .catch((err) => {
            console.warn(err);
          });
    }
  };
  return (
    <div className={style.centerDiv}>
      <h2>{params.id ? "Update" : "Add"} Fruit Todo</h2>
      <div>
        <label className="mt-3">Enter todo:</label>
        <input
          type="text"
          value={todo}
          onChange={(e) => getInputValue(e)}
        />{" "}
        <button className="btn btn-success" onClick={addTodo}>{params.id ? "Update" : "Add"} 
        </button>
      </div>
    </div>
  );
}
export default Todo;
