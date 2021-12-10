import ButtonForm from "../components/Form";
import { render, screen, fireEvent } from "@testing-library/react";

describe("role test block", () => {
	test("renders", () => {
		render(<ButtonForm />);
		const element = screen.getByText(/new task/i);
		expect(element).toBeInTheDocument();
	});
	test("check onClick event", () => {
		render(<ButtonForm />);
		const element = screen.getByPlaceholderText(/new task/i);
		fireEvent.change(element, { target: { value: "watch lord of the rings" } });
		expect(element.value).toBe("watch lord of the rings");
	});
});
