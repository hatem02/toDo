import React, { useEffect, useState } from 'react'
import ToDoForm from './ToDoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'

const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    })
    const addTodo = (todo) => {
        const newTodos = [...todos, { id: uuidv4(), task: todo, completed: false }];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos))
    };
    const toggleComplete = (id) => {
        const newTodos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos))
    };
    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos))
    };
    return (
        <div className="TodoWrapper">
            <h1>To Do list</h1>
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <Todo todo={todo} key={index} toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo} />
            ))}

        </div>
    )
}

export default ToDoWrapper
