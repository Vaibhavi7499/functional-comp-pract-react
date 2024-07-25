import React from "react";
import { ACTIONS } from "./Todos";
const TodoList = ({state, dispatch}) => {
  return (
    <>
      {state.map((ele) => (
        <li key={ele.id}>
          {ele.name}
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_TASK, payload: ele.id })
            }
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default TodoList;
