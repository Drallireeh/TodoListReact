import React from 'react';
import './TodoList.css';

const Todo = (props) => {
    const title = props.todo.title;
    const done = props.todo.done;
    let classes = [];

    if (done) {
        if (props.editing.edited && props.todo.id === props.editing.id) {
            classes.push("editing");
        }
        classes.push("completed")
    } else if (props.editing.edited && props.todo.id === props.editing.id) {
        classes.push("editing");
    }

    return (
        <li className={classes.join(" ")}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={done} onClick={(e) => props.StateChange(e, props.todo.id)} />
                <label onDoubleClick={(e) => props.EditTodo(e, props.todo.id)} >{title}</label>
                <button className="destroy" onClick={(e) => props.RemoveTodo(e, props.todo.id)}></button>
            </div>
            <input className="edit" defaultValue={props.todo.title} onKeyDown={(e) => props.EditTodoTitle(e)}/>
        </li>
    );
};

export default Todo;
