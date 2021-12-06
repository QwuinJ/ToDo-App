import ButtonForm from "./Form";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

test("renders learn react link", () => {
	render(<ButtonForm />);
	const linkElement = screen.getByText(/ Add/i);
	expect(linkElement).toBeInTheDocument();
});
