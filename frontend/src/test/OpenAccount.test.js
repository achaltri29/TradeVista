import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OpenAccount from "../landing_page/OpenAccount";

describe("OpenAccount Component", () => {
  test("renders the CTA heading", () => {
    render(<OpenAccount />);
    const heading = screen.getByRole("heading", { name: /open a zerodha account/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders the Sign Up Now button", () => {
    render(<OpenAccount />);
    const btn = screen.getByRole("button", { name: /sign up now/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("btn-primary");
  });
});
