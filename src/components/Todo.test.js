import ToDo from "./Todo";
import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
	render(<ToDo />);
	const linkElement = screen.getByText(/Delete/i);
	expect(linkElement).toBeInTheDocument();
});
