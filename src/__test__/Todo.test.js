import ToDo from "../components/Todo";
import { render, screen } from "@testing-library/react";

describe("todo list test", () => {
	test("renders learn react link", () => {
		render(<ToDo />);
		const linkElement = screen.getByText(/Delete/i);
		expect(linkElement).toBeInTheDocument();
	});
	test("delete to do", () => {
		render(<ToDo />);
		const but = screen.getByText(/delete/i);
		expect(but).toBeInTheDocument;
	});
});
