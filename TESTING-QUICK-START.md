# 🚀 Quick Start Guide - Testing & Coverage

## Prerequisites

1. Build your Vite app: `npm run build`
2. Start preview server: `npm run preview` (runs on `http://localhost:4173`)

Or run them separately for testing.

## Run Tests

### Unit Tests (Vitest)

```bash
npm test                    # Run unit tests (no coverage)
npm run test:ui            # Run tests with UI (interactive)
npm run test:coverage      # Run tests with coverage
```

### E2E Tests (Playwright)

```bash
npm run test:e2e           # Run all E2E tests (headless)
npm run test:e2e:headed    # Run with visible browser
```

### Combined Coverage

```bash
npm run test:coverage      # Run unit tests with coverage
npm run test:coverage:report  # Generate detailed coverage reports
```

Then view the HTML report:
```bash
# On Windows
start coverage/index.html

# On macOS
open coverage/index.html

# On Linux
xdg-open coverage/index.html
```

## Coverage Results

After running `npm run test:coverage`, you'll see:

```
-----------------|---------|----------|---------|---------|
File             | % Stmts | % Branch | % Funcs | % Lines |
-----------------|---------|----------|---------|---------|
All files        |   34.37 |    26.31 |   40.62 |   34.37 |
 src/            |   89.79 |    71.42 |   92.85 |   89.79 |
-----------------|---------|----------|---------|---------|
```

### Understanding Metrics

- **% Stmts** - Percentage of statements executed
- **% Branch** - Percentage of if/else branches tested  
- **% Funcs** - Percentage of functions called
- **% Lines** - Percentage of code lines executed

## Test Suite Overview

### Unit Tests (Vitest)
- Fast unit tests for components and utilities
- Located in `src/__tests__/`
- Use `@testing-library/react` for component testing

### E2E Tests (Playwright)
- End-to-end browser tests
- Located in `tests/e2e/`
- Test user interactions and workflows

## Common Commands

```bash
# Development
npm run dev                # Start Vite dev server (port 8080)
npm run build              # Build for production
npm run preview            # Preview production build (port 4173)

# Unit Testing
npm test                   # Run unit tests (no coverage)
npm run test:ui            # Run tests with interactive UI
npm run test:coverage      # Run with coverage

# E2E Testing
npm run test:e2e           # Run E2E tests (headless)
npm run test:e2e:headed    # Run E2E tests with visible browser

# Coverage
npm run test:coverage      # Run with coverage
npm run test:coverage:report  # Generate detailed reports
```

## File Structure

```
src/
├── __tests__/            # Unit tests
│   ├── example.test.tsx  # Example unit test
│   └── ...               # Your test files

tests/
├── e2e/                  # E2E tests
│   ├── example.spec.ts   # Example E2E test
│   └── ...               # Your E2E test files

coverage/                 # Generated coverage reports
├── index.html           # Main HTML report (open in browser)
└── lcov-report/         # Detailed LCOV reports

vitest.config.ts         # Vitest configuration
playwright.config.ts     # Playwright configuration
```

## Coverage Goals

| Metric      | Goal  |
|-------------|-------|
| Statements  | 80%   |
| Branches    | 80%   |
| Functions   | 80%   |
| Lines       | 80%   |

Configured in `vitest.config.ts`.

## Tips

### For Better Coverage

1. Write unit tests for components in `src/__tests__/`
2. Test business logic and utilities
3. Cover edge cases and error scenarios
4. Test user interactions with E2E tests

### For Debugging

1. Use `npm run test:ui` for interactive test debugging
2. Use `npm run test:e2e:headed` to see browser actions
3. Check `coverage/index.html` for missed lines
4. Review uncovered line numbers in terminal output
5. Use `console.log()` in tests for debugging

### Writing Unit Tests

```typescript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyComponent from "./MyComponent";

describe("MyComponent", () => {
  it("should render correctly", () => {
    render(<MyComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
```

### Writing E2E Tests

```typescript
import { test, expect } from "@playwright/test";

test("homepage loads", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Your App/);
  
  // Interact with page
  await page.click("text=Button");
  await expect(page.locator(".result")).toBeVisible();
});
```

## Troubleshooting

**Tests timeout?**
```bash
# Increase timeout in vitest.config.ts or playwright.config.ts
# For Vitest: test.timeout = 60000
# For Playwright: timeout: 60000 in config
```

**Preview server not running?**
```bash
# Build and start preview server
npm run build
npm run preview

# In another terminal, run tests
npm run test:e2e
```

**Coverage not showing?**
```bash
# Clear coverage and retry
rm -rf coverage
npm run test:coverage
```

**Playwright browsers not installed?**
```bash
npx playwright install chromium
```

**Vitest not finding modules?**
- Check `vitest.config.ts` for correct path aliases
- Ensure `@` alias matches your `vite.config.ts`

## Running Tests in CI

The GitHub Actions workflows handle:
- Installing dependencies
- Building the app
- Starting preview server
- Running all tests
- Generating coverage reports
- Uploading artifacts

## Documentation

- **CI/CD Setup**: [CI-CD-SETUP.md](CI-CD-SETUP.md)
- **GitHub Actions Summary**: [GITHUB-ACTIONS-SUMMARY.md](GITHUB-ACTIONS-SUMMARY.md)
- **Vitest Docs**: https://vitest.dev/
- **Playwright Docs**: https://playwright.dev/
- **Testing Library Docs**: https://testing-library.com/

## Quick Example

```bash
# Terminal 1: Build and start preview server
npm run build
npm run preview

# Terminal 2: Run tests with coverage
npm run test:coverage

# View coverage report
start coverage/index.html  # Windows
open coverage/index.html   # macOS
xdg-open coverage/index.html  # Linux
```

---

**Need help?** Check [CI-CD-SETUP.md](CI-CD-SETUP.md) for detailed setup instructions.

