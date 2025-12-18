import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "@/App";

// Note: App component already has BrowserRouter, so we can't wrap it with MemoryRouter
// We test routing separately in NotFound.test.tsx and other component tests
describe("App", () => {
  it("should render the app without crashing", () => {
    // App has its own BrowserRouter, so we render it directly
    const { container } = render(<App />);
    
    // App should render without throwing
    expect(container).toBeInTheDocument();
  });
});

