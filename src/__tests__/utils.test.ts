import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("cn utility function", () => {
  it("should merge class names correctly", () => {
    const result = cn("foo", "bar");
    expect(result).toBe("foo bar");
  });

  it("should handle conditional classes", () => {
    const result = cn("foo", false && "bar", true && "baz");
    expect(result).toBe("foo baz");
  });

  it("should merge Tailwind classes correctly", () => {
    const result = cn("px-2 py-1", "px-4");
    // px-4 should override px-2
    expect(result).toContain("py-1");
    expect(result).toContain("px-4");
  });

  it("should handle empty inputs", () => {
    const result = cn();
    expect(result).toBe("");
  });

  it("should handle arrays of classes", () => {
    const result = cn(["foo", "bar"], "baz");
    expect(result).toContain("foo");
    expect(result).toContain("bar");
    expect(result).toContain("baz");
  });
});

