import { useState, useEffect, memo, useMemo, useRef, useReducer } from "react";

import reducer, {initialState} from "./reducer"
import {addJob, deleteJob, setJob} from "./actions"
import logger from "./logger"
function App() {
  const [state, dispatch] = useReducer(logger(reducer), initialState);

  const { job, jobs } = state;
  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''))

    inputRef.current.focus()
  }


  return (
    <div style={{ padding: '32px', color: 'red' }}>
      <h3>To do</h3>
      <input 
        ref = {inputRef}
        placeholder="Enter todo..."
        value={job}
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {
          jobs.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <span onClick={() => dispatch(deleteJob(index))}>
                  &times;
                </span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )

}
export default App;