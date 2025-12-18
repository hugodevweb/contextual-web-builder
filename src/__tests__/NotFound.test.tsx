import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import NotFound from "@/pages/NotFound";

describe("NotFound", () => {
  it("should render 404 message", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Oops! Page not found")).toBeInTheDocument();
  });

  it("should render link to home", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    
    const homeLink = screen.getByText("Return to Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("should log error when component mounts", () => {
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    
    render(
      <MemoryRouter initialEntries={["/non-existent"]}>
        <NotFound />
      </MemoryRouter>
    );
    
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "404 Error: User attempted to access non-existent route:",
      "/non-existent"
    );
    
    consoleErrorSpy.mockRestore();
  });
});

