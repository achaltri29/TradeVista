import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock react-router-dom to avoid ESM/CJS issues with react-router v7 in Jest
jest.mock("react-router-dom", () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

import Navbar from "../landing_page/Navbar";

describe("Navbar Component", () => {
  test("renders the logo image", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "media/images/logo.svg");
  });

  test("renders all navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("Signup")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Product")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
  });

  test("Signup link points to /signup", () => {
    render(<Navbar />);
    const signupLink = screen.getByText("Signup").closest("a");
    expect(signupLink).toHaveAttribute("href", "/signup");
  });
});
