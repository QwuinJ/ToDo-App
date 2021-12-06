import React, { useState } from "react";

const ButtonForm = (props) => {
	const [name, setName] = useState("");
	const handleChange = (e) => {
		setName(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		props.addTask(name);
		setName("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<h2 className="form-header" htmlFor="new-todo-input">
				Add new task:
			</h2>
			<input
				type="text"
				id="new-todo-input"
				className="input"
				name="text"
				autoComplete="off"
				value={name}
				onChange={handleChange}
				placeholder="New task..."
			/>
			<button type="submit" className="submit-button">
				Add
			</button>
		</form>
	);
};

export default ButtonForm;
