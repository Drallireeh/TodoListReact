import React from 'react';
import './Infos.css'

const Info = (props) => {

	let countDone = 0;
	let countNotDone = 0;
	for (let i = 0; i < props.todoList.length; i++) {
		if (props.todoList[i].done) countDone++;
		else countNotDone++;
	}

	return (
		<footer className="footer">
			<span className="todo-count"><strong>{countNotDone}</strong> item left</span>
			<ul className="filters">
				<li>
					<a onClick={(e) => props.SetOptions(e, "all")} className={props.options === "all" ? "selected" : ""} href="#/">All</a>
				</li>
				<li>
					<a onClick={(e) => props.SetOptions(e, "active")} className={props.options === "active" ? "selected" : ""} href="#/active">Active</a>
				</li>
				<li>
					<a onClick={(e) => props.SetOptions(e, "completed")} className={props.options === "completed" ? "selected" : ""} href="#/completed">Completed</a>
				</li>
			</ul>
			<button className="clear-completed" onClick={(e) => props.RemoveCompletedTodos(e)}>Clear completed ({countDone})</button>
		</footer>
	);
};

export default Info;