import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "@/components/ProductCard";

describe("ProductCard", () => {
  const defaultProps = {
    image: "/test-image.jpg",
    title: "Test Product",
    category: "Test Category",
    price: 29.99,
  };

  it("should render product information correctly", () => {
    render(<ProductCard {...defaultProps} />);
    
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Category")).toBeInTheDocument();
    expect(screen.getByText("29.99€")).toBeInTheDocument();
  });

  it("should display original price when provided", () => {
    render(<ProductCard {...defaultProps} originalPrice={39.99} />);
    
    expect(screen.getByText("39.99€")).toBeInTheDocument();
    expect(screen.getByText("Promo")).toBeInTheDocument();
  });

  it("should not display promo badge when originalPrice is not provided", () => {
    render(<ProductCard {...defaultProps} />);
    
    expect(screen.queryByText("Promo")).not.toBeInTheDocument();
  });

  it("should render product image with correct alt text", () => {
    render(<ProductCard {...defaultProps} />);
    
    const image = screen.getByAltText("Test Product");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/test-image.jpg");
  });

  it("should format price correctly", () => {
    render(<ProductCard {...defaultProps} price={19.5} />);
    
    expect(screen.getByText("19.50€")).toBeInTheDocument();
  });
});

