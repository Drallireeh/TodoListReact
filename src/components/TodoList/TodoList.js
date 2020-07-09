import React from 'react';
import Todo from "./Todo"
import './Todo.css'

const TodoList = (props) => {
	return (
        <ul className="todo-list">
            {props.todoList.map((todo) => {
				if (props.options === "all") return <Todo key={todo.id} editing={props.editing} todo={todo} StateChange={props.StateChange} RemoveTodo={props.RemoveTodo} EditTodo={props.EditTodo} EditTodoTitle={props.EditTodoTitle}/>
				else if (props.options === "completed" && todo.done === true) return <Todo key={todo.id} editing={props.editing} todo={todo} StateChange={props.StateChange} RemoveTodo={props.RemoveTodo} EditTodo={props.EditTodo} EditTodoTitle={props.EditTodoTitle}/>
				else if (props.options === "active" && todo.done === false) return <Todo key={todo.id} editing={props.editing} todo={todo} StateChange={props.StateChange} RemoveTodo={props.RemoveTodo} EditTodo={props.EditTodo} EditTodoTitle={props.EditTodoTitle}/>
			})}
        </ul>
	);
};

export default TodoList;
