import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders the index page", () => {
    render(<Home />);

    const header = screen.getByText("Hello World!");

    expect(header).toBeInTheDocument();
  });
});
