import { render, screen } from "@testing-library/react";
import App from "../App";

describe("app test block", () => {
	test("renders heading", () => {
		render(<App />);
		const header = screen.getByText(/tasks remaining/i);
		expect(header).toBeInTheDocument();
	});
	test("");
});
