const ToDo = (props) => {
	return (
		<div className="todo-container">
			<div className="check-boxes">
				<input
					id={props.id}
					type="checkbox"
					defaultChecked={props.completed}
					onChange={() => props.toggleTask(props.id)}
				/>
				<label className="todo-label" htmlFor={props.id}>
					{props.name}
				</label>
				<li className="to-do-item"></li>
			</div>
			<div className="buttons">
				<button
					type="button"
					className="delete-button"
					onClick={() => props.deleteTask(props.id)}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default ToDo;
