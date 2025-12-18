import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: [
      "node_modules",
      "dist",
      ".idea",
      ".git",
      ".cache",
      "tests/e2e/**", // Exclude Playwright E2E tests
    ],
    coverage: {
      provider: "v8",
      reporter: ["html", "lcov", "json-summary", "text", "text-summary"],
      reportsDirectory: "./coverage",
      exclude: [
        "node_modules/**",
        "dist/**",
        "**/*.test.{ts,tsx}",
        "**/*.spec.{ts,tsx}",
        "**/__tests__/**",
        "**/*.config.*",
        "**/coverage/**",
        "**/.next/**",
        "**/playwright-report/**",
        "**/test-results/**",
        "tests/**", // Exclude all test files from coverage
      ],
      include: ["src/**/*.{ts,tsx}"],
      // Thresholds are set but won't fail the build
      // Increase these as you add more tests
      thresholds: {
        lines: 0, // Start at 0%, increase as you add tests
        functions: 0,
        branches: 0,
        statements: 0,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

