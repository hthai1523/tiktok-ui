import { useStore, actions } from "./Store"
import { useRef } from "react"
// Context
// 1. Create context
// 2. Provider
// 3. Consumer


function App() {

  const [state, dispatch] = useStore()
  const { todos, todoInput } = state
  const inputRef = useRef()

  const handleAdd = () => {
    dispatch(actions.addTodoInput(todoInput))
    dispatch(actions.setTodoInput(''))

    inputRef.current.focus()
  }

  const handleDelete = (index) => {
    dispatch(actions.deleteTodoInput(index))
  }
  return (
    <div style={{padding: 20}}>
        <input 
          ref={inputRef}
          value={todoInput}
          placeholder="Enter todo..."
          onChange={e => {
            dispatch(actions.setTodoInput(e.target.value))
          }}
        />
        <button onClick={handleAdd}>
          Add
        </button>
        <ul>
          {
            todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <span
                  style={{cursor: 'pointer'}}
                  onClick={() => handleDelete(index)}
                >&times; </span>
              </li>
            ))
          }
        </ul>
    </div>

 
  )

}

export default App