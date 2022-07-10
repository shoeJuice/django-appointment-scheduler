import { render, screen } from "@testing-library/react";
import { AuthProvider } from "../context/AuthContext";
import NextLink from "next/link";
import Router, { useRouter } from "next/router";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import Enzyme from "enzyme";

import Nav from "../components/layouts/nav";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => ({ __esModule: true, useRouter: jest.fn() }));

jest.mock(
  "next/link",
  () =>
    // @ts-ignore
    ({ children }) =>
      children
);

describe("Nav", () => {
  it("Renders a Navbar", () => {
    // @ts-ignore
    render(
      <AuthProvider>
        <Nav />
      </AuthProvider>
    );

    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About Us");
    const bookingLink = screen.getByText("Bookings");
    const contactLink = screen.getByText("Contact Us!");

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(bookingLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
