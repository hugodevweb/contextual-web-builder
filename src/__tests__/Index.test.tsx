import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "@/pages/Index";

// Mock all the component dependencies
vi.mock("@/components/Navbar", () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>,
}));

vi.mock("@/components/HeroSection", () => ({
  default: () => <section data-testid="hero-section">Hero Section</section>,
}));

vi.mock("@/components/ProductsSection", () => ({
  default: () => <section data-testid="products-section">Products Section</section>,
}));

vi.mock("@/components/FanzineSection", () => ({
  default: () => <section data-testid="fanzine-section">Fanzine Section</section>,
}));

vi.mock("@/components/CommunitySection", () => ({
  default: () => <section data-testid="community-section">Community Section</section>,
}));

vi.mock("@/components/NewsletterSection", () => ({
  default: () => <section data-testid="newsletter-section">Newsletter Section</section>,
}));

vi.mock("@/components/Footer", () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}));

describe("Index", () => {
  it("should render all main sections", () => {
    render(<Index />);
    
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("products-section")).toBeInTheDocument();
    expect(screen.getByTestId("fanzine-section")).toBeInTheDocument();
    expect(screen.getByTestId("community-section")).toBeInTheDocument();
    expect(screen.getByTestId("newsletter-section")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});

