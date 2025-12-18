import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { NavLink } from "@/components/NavLink";

describe("NavLink", () => {
  it("should render a link with correct href", () => {
    render(
      <MemoryRouter>
        <NavLink to="/about">About</NavLink>
      </MemoryRouter>
    );
    
    const link = screen.getByRole("link", { name: "About" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about");
  });

  it("should apply custom className", () => {
    render(
      <MemoryRouter>
        <NavLink to="/" className="custom-class">Home</NavLink>
      </MemoryRouter>
    );
    
    const link = screen.getByRole("link");
    expect(link).toHaveClass("custom-class");
  });

  it("should apply activeClassName when link is active", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavLink to="/" activeClassName="active-link">Home</NavLink>
      </MemoryRouter>
    );
    
    const link = screen.getByRole("link");
    expect(link).toHaveClass("active-link");
  });
});

