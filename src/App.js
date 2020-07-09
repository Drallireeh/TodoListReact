import React, { useState } from 'react';
import './App.css';
import TodoList from "./components/TodoList/TodoList"
import Info from "./components/Infos/Infos"
import uniqid from "uniqid"

function App() {
	const [todoList, setTodoList] = useState([
		{ id: uniqid(), title: "todo 1", done: false }, { id: uniqid(), title: "todo 2", done: true }, { id: uniqid(), title: "todo 3", done: false }
	]);

	const [editing, setEditing] = useState({edited: false, id: null});

	const [options, setOptions] = useState("all")

	const StateChange = (e, todoId) => {
		setTodoList(
			todoList.map((todo) => {
				if (todo.id === todoId) {
					todo.done = !todo.done;
				}
				return todo;
			})
		);
	};

	const ChangeAllState = (e) => {
		setTodoList(todoList.map((todo) => {
			todo.done = e.target.checked;
			return todo;
		}));
	}

	const AddTodo = (e) => {
		if (e.key === "Enter" && e.target.value.trim() !== "") {
			setTodoList([{ id: uniqid(), title: e.target.value, done: false }, ...todoList])
			e.target.value = "";
		}
	}

	const RemoveTodo = (e, todoId) => {
		e.preventDefault();
		setTodoList(todoList.filter((todo) => todo.id !== todoId))
	}

	const RemoveCompletedTodos = (e) => {
		e.preventDefault();
		setTodoList(todoList.filter((todo) => todo.done === false))
	}

	const EditTodo = (e, todoId) => {
		setEditing({edited: true, id: todoId})
	}

	const EditTodoTitle = (e) => {
		if (e.key === "Enter" && e.target.value.trim() !== "") {
			setTodoList(todoList.map((todo) => {
				if (todo.id === editing.id) {
					todo.title = e.target.value.trim();
				}
				return todo;
			}));
			setEditing({edited: false, id: null});
		}
	}

	const SetOptions = (e, options) => {
		setOptions(options);
		console.log(e.target)
		e.target.active = "active";
	}

	return (
		<section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<input
					className="new-todo"
					placeholder="What needs to be done?"
					autoFocus
					onKeyPress={(e) => AddTodo(e)}
				/>
			</header>
			<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" onClick={(e) => ChangeAllState(e)}/>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<TodoList options={options} editing={editing} todoList={todoList} StateChange={StateChange} RemoveTodo={RemoveTodo} EditTodo={EditTodo} EditTodoTitle={EditTodoTitle}/>
			</section>
			<Info options={options} todoList={todoList} SetOptions={SetOptions} RemoveCompletedTodos={RemoveCompletedTodos}/>
		</section>
	);
}

export default App;
