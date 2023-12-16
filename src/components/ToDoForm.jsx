import React, { useState } from 'react'
const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }
  return (
    <form className="TodoForm" onSubmit={handlesubmit}>
      <input placeholder='task' className='todo-input'
        value={value}
        onChange={(e) => { setValue(e.target.value) }}></input>
      <button type='submit' className='todo-btn'  >add</button>

    </form>
  )
}

export default ToDoForm
