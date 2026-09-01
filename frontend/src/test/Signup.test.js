import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock react-router-dom to avoid ESM/CJS issues with react-router v7 in Jest
jest.mock("react-router-dom", () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

import Signup from "../landing_page/signup/Signup";

describe("Signup Component", () => {
  test("renders the Sign Up tab by default", () => {
    render(<Signup />);
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test("renders Name, Email and Password fields for signup", () => {
    render(<Signup />);
    expect(screen.getByPlaceholderText("Achal Tripathi")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("you@example.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("••••••••")).toBeInTheDocument();
  });

  test("shows error alert when form is submitted empty", () => {
    render(<Signup />);
    const submitBtn = screen.getByRole("button", { name: /create account/i });
    fireEvent.click(submitBtn);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  test("switching to Login tab hides Name field", () => {
    render(<Signup />);
    const loginTab = screen.getAllByRole("button", { name: /login/i })[0];
    fireEvent.click(loginTab);
    expect(screen.queryByPlaceholderText("Achal Tripathi")).not.toBeInTheDocument();
  });
});
