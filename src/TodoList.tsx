import React, { useState } from 'react';
import './App.css';
//import Todotable from './Todotable';
import { Todo } from './interfaces'


export default function TodoList() {

    const Todos: Todo[] = [];

    const [todo, setTodo] = useState<Todo>({} as Todo);
    const [todos, setTodos] = useState(Todos);

    const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, [event.target.id]: event.target.value});
    };
    
    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    };

    const removeTodo = (index: number) => {
        setTodos(todos.filter((todo, i) => i !== index))
    }

    return (
        <>
            <form onSubmit={addTodo}>
                <label htmlFor="description">Description: </label>
                <input type="text" id="description" value={todo.description} onChange={inputChanged} />
                <label htmlFor="date">Date</label>
                <input type="text" id="date" value={todo.date} onChange={inputChanged} />
                <label htmlFor="priority">Priority</label>
                <input type="text" id="priority" value={todo.priority} onChange={inputChanged} />
                <input type="submit" value="Add" />
            </form>
            
            {/* <Todotable props={Todos} /> */}

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(({description, date, priority}: Todo, index: number) =>
                            <tr key={index}>
                                <td>{description}</td>
                                <td>{date}</td>
                                <td>{priority}</td>
                                <td><button onClick={() => removeTodo(index)}>Del</button></td>
                            </tr>   
                        )}
                    </tbody>
                </table>
            </div>

        </> 
    );
};