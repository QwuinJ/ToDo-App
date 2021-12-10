import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import ToDo from "./components/Todo";
import ButtonForm from "./components/Form";

const App = () => {
	const [tasks, setTasks] = useState([]);
	const addTask = (name) => {
		const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
		setTasks([...tasks, newTask]);
	};
	const toggleTask = (id) => {
		const updatedTasks = tasks.map((task) => {
			if (id === task.id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(updatedTasks);
	};
	const deleteTask = (id) => {
		const remainingTasks = tasks.filter((task) => id !== task.id);
		setTasks(remainingTasks);
	};
	const taskList = tasks.map((task) => (
		<ToDo
			id={task.id}
			name={task.name}
			completed={task.completed}
			key={task.id}
			deleteTask={deleteTask}
			toggleTask={toggleTask}
		/>
	));
	const Heading = () => {
		const headingText = `${taskList.length} tasks remaining`;
		return <h1 className="header">{headingText}</h1>;
	};
	return (
		<div className="main-container">
			<Heading />
			<ul className="todo-list">{taskList}</ul>
			<ButtonForm addTask={addTask} />
		</div>
	);
};

export default App;
