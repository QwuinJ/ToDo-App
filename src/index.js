import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const INITIAL_TASKS = [
	{ id: "todo-0", name: "Coffee", completed: false },
	{ id: "todo-1", name: "Breakfast", completed: false },
	{ id: "todo-2", name: "Code", completed: false },
];

ReactDOM.render(<App tasks={INITIAL_TASKS} />, document.getElementById("root"));

reportWebVitals();
