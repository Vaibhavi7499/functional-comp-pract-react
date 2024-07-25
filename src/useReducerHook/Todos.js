import { useReducer } from "react"
import TodoList from "./TodoList";

export const ACTIONS= {
    ADD_TASK : 'ADD_TASK',
    DELETE_TASK : 'DELETE_TASK',
    RESET_TASK : 'RESET_TASK'
}
const Todos = () => {
    const initialState = []
    const [state, dispatch] = useReducer(reducer, initialState);


    function reducer(state, action) {
        switch(action.type) {
            case ACTIONS.ADD_TASK : 
            return [
                ...state,
                {
                    id: state.length + 1,
                    name : action.payload 
                }
            ]
            

            case ACTIONS.DELETE_TASK :
                return state.filter((ele) => ele.id != action.payload)

                case ACTIONS.RESET_TASK :

                return state = action.payload

            default :
            return state
        }
    }
    return (
        <div>
            <h1> Todo List {state.length}</h1>
            Add New Task : 
            <input type="text" onBlur={(e) => dispatch({type : ACTIONS.ADD_TASK, payload : e.target.value})} />
            <button onClick={() => dispatch({type : ACTIONS.RESET_TASK, payload : initialState})}>Reset</button>
            <hr/>
            <TodoList state={state} dispatch={dispatch}  />
        </div>
    )
}

export default Todos