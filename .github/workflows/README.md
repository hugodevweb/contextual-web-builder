# GitHub Actions Workflows Documentation

This directory contains automated CI/CD workflows for testing and coverage reporting.

## 📋 Workflows Overview

### 1. **test.yml** - Main Tests & Coverage
**Triggers:** Every push, pull request, and manual dispatch
**Purpose:** Run comprehensive unit and E2E tests with coverage on every code change

**What it does:**
- ✅ Runs tests on multiple Node.js versions (18.x, 20.x)
- ✅ Builds Vite application
- ✅ Starts preview server on port 4173
- ✅ Executes unit tests with Vitest
- ✅ Executes E2E tests with Playwright
- ✅ Generates coverage reports
- ✅ Uploads coverage artifacts (30-day retention)
- ✅ Posts coverage summary on PRs
- ✅ Captures failure screenshots
- ✅ Validates coverage thresholds

**Matrix Testing:**
```yaml
node-version: [18.x, 20.x]
```

### 2. **coverage-badge.yml** - Coverage Badge Generation
**Triggers:** Push to main/master/Dev-1 branches, manual dispatch
**Purpose:** Generate coverage badges and upload to external services

**What it does:**
- ✅ Runs tests and generates coverage
- ✅ Extracts coverage percentage
- ✅ Creates dynamic coverage badge
- ✅ Uploads to Codecov (optional)
- ✅ Stores long-term reports (90-day retention)

**Requirements:**
- `GIST_SECRET` - GitHub token for badge creation
- `CODECOV_TOKEN` - Optional, for Codecov integration

### 3. **scheduled-tests.yml** - Nightly Automated Tests
**Triggers:** Daily at 2 AM UTC, manual dispatch
**Purpose:** Regular health checks and comprehensive testing

**What it does:**
- ✅ Runs full test suite daily
- ✅ Generates detailed reports
- ✅ Creates test execution summary
- ✅ Uploads comprehensive artifacts (90-day retention)
- ✅ Creates GitHub issue on failure
- ✅ Long-term coverage tracking

## 🚀 Setup Instructions

### Prerequisites

1. **Repository Secrets** (Optional but recommended)
   
   Go to `Settings` → `Secrets and variables` → `Actions` and add:

   | Secret | Description | Required |
   |--------|-------------|----------|
   | `GIST_SECRET` | GitHub token for coverage badge | Optional |
   | `CODECOV_TOKEN` | Codecov upload token | Optional |

2. **Permissions**
   
   Ensure GitHub Actions has proper permissions:
   - Go to `Settings` → `Actions` → `General`
   - Under "Workflow permissions", select:
     - ✅ Read and write permissions
     - ✅ Allow GitHub Actions to create and approve pull requests

### Creating Coverage Badge (Optional)

If you want a coverage badge in your README:

1. **Create a Gist:**
   - Go to https://gist.github.com
   - Create a new gist named `coverage-badge.json`
   - Content: `{}`
   - Make it public
   - Copy the Gist ID from URL

2. **Create GitHub Token:**
   - Go to `Settings` → `Developer settings` → `Personal access tokens` → `Tokens (classic)`
   - Generate new token with `gist` scope
   - Copy the token

3. **Add Secret:**
   - Repository `Settings` → `Secrets` → `New repository secret`
   - Name: `GIST_SECRET`
   - Value: Your token

4. **Update Workflow:**
   Edit `.github/workflows/coverage-badge.yml` and replace the Gist ID:
   ```yaml
   GIST_ID: abc123def456  # Replace with your actual Gist ID
   ```

5. **Add Badge to README:**
   ```markdown
   ![Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/USERNAME/GIST_ID/raw/coverage-badge.json)
   ```

### Setting Up Codecov (Optional)

1. Go to https://codecov.io
2. Sign up with GitHub
3. Add your repository
4. Copy the upload token
5. Add as `CODECOV_TOKEN` secret in your repo

## 📊 Accessing Test Reports

### Viewing Coverage Reports

**After workflow runs:**

1. Go to `Actions` tab in your repository
2. Click on the workflow run
3. Scroll to "Artifacts" section
4. Download coverage report

**Available artifacts:**
- `coverage-report-node-18.x` - Coverage for Node 18.x
- `coverage-report-node-20.x` - Coverage for Node 20.x
- `test-results-node-*` - Full test results
- `failure-screenshots-node-*` - Screenshots on test failure

### PR Coverage Comments

On pull requests, the workflow automatically posts a comment with coverage summary:

```
## 📊 Test Coverage Report

| Metric | Coverage | Status |
|--------|----------|--------|
| Statements | 89.79% | ✅ |
| Branches | 71.42% | ⚠️ |
| Functions | 92.85% | ✅ |
| Lines | 89.79% | ✅ |

**Total Coverage:** 89.79%
```

## 🔧 Customization

### Changing Node.js Versions

Edit `test.yml`:
```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x, 22.x]  # Add/remove versions
```

### Adjusting Coverage Thresholds

Edit `vitest.config.ts` in project root:
```typescript
coverage: {
  thresholds: {
    lines: 80,
    functions: 80,
    branches: 80,
    statements: 80,
  },
}
```

### Changing Schedule

Edit `scheduled-tests.yml`:
```yaml
schedule:
  - cron: '0 2 * * *'  # Daily at 2 AM UTC
  # - cron: '0 2 * * 1'  # Weekly on Monday
  # - cron: '0 2 1 * *'  # Monthly on 1st
```

### Artifact Retention

Change retention days in workflows:
```yaml
retention-days: 30  # Change to desired number of days
```

## 🐛 Troubleshooting

### Tests Failing in CI but Passing Locally

**Issue:** Tests pass on local machine but fail in GitHub Actions

**Solutions:**
1. Check Node.js version compatibility
2. Ensure all dependencies are in `package.json`
3. Review environment variables
4. Check for timing issues (increase timeouts)
5. Verify preview server starts correctly

**Debug:**
```yaml
- name: Debug
  run: |
    node --version
    npm --version
    npx playwright --version
    curl http://localhost:4173 || echo "Preview server not responding"
```

### Preview Server Not Starting

**Issue:** Vite preview server fails to start in CI

**Solutions:**
1. Check build logs
2. Verify port 4173 is available
3. Increase wait timeout
4. Check build output exists

**Debug:**
```yaml
- name: Debug preview server
  run: |
    npm run build
    ls -la dist/  # Verify build output
    npm run preview &
    sleep 5
    curl http://localhost:4173 || echo "Server not responding"
```

### Coverage Reports Not Generated

**Issue:** No coverage artifacts uploaded

**Solutions:**
1. Ensure tests complete successfully
2. Check Vitest configuration
3. Verify file paths in vitest.config.ts
4. Check coverage directory exists

**Debug:**
```yaml
- name: List coverage files
  run: |
    ls -la coverage/
    cat coverage/coverage-summary.json || echo "No coverage summary found"
```

### Artifacts Not Appearing

**Issue:** Artifacts section is empty

**Solutions:**
1. Check if workflow completed
2. Verify upload-artifact step succeeded
3. Ensure paths are correct

**Example:**
```yaml
- name: Upload coverage reports
  uses: actions/upload-artifact@v4
  with:
    name: coverage-report
    path: coverage/
    if-no-files-found: warn  # Add this for debugging
```

### Playwright Browsers Not Installing

**Issue:** Playwright tests fail due to missing browsers

**Solution:** Already handled in workflow, but if issues persist:
```yaml
- name: Install Playwright browsers
  run: npx playwright install --with-deps chromium
```

### Vitest Coverage Not Working

**Issue:** Coverage not generated or incomplete

**Solutions:**
1. Check `vitest.config.ts` coverage configuration
2. Verify `@vitest/coverage-v8` is installed
3. Check coverage provider is set to "v8"
4. Review include/exclude patterns

## 📈 Workflow Status Badges

Add status badges to your README:

### Test Status
```markdown
![Tests](https://github.com/USERNAME/REPO/actions/workflows/test.yml/badge.svg)
```

### Coverage Badge (if configured)
```markdown
![Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/USERNAME/GIST_ID/raw/coverage-badge.json)
```

### Scheduled Tests
```markdown
![Scheduled Tests](https://github.com/USERNAME/REPO/actions/workflows/scheduled-tests.yml/badge.svg)
```

## 🔐 Security Best Practices

1. **Never commit secrets** - Use GitHub Secrets
2. **Use least privilege** - Token should have minimal scopes
3. **Review third-party actions** - Check action versions
4. **Enable Dependabot** - Keep actions updated
5. **Use GITHUB_TOKEN** - For repo operations when possible

## 📝 Best Practices

### Workflow Optimization

1. **Cache dependencies:**
   ```yaml
   - uses: actions/setup-node@v4
     with:
       cache: 'npm'
   ```

2. **Fail fast on errors:**
   ```yaml
   strategy:
     fail-fast: false  # Continue other jobs if one fails
   ```

3. **Conditional steps:**
   ```yaml
   - name: Optional step
     if: github.event_name == 'pull_request'
   ```

4. **Parallel jobs:**
   ```yaml
   jobs:
     test-unit:
       # Unit tests
     test-e2e:
       # E2E tests
   ```

### Monitoring

- Check workflow runs regularly
- Review failed test patterns
- Monitor coverage trends
- Set up notifications for failures

## 🎯 Next Steps

### Recommended Enhancements

1. **Add performance testing:**
   ```yaml
   - name: Performance tests
     run: npm run test:performance
   ```

2. **Visual regression testing:**
   ```yaml
   - name: Visual tests
     run: npm run test:visual
   ```

3. **Security scanning:**
   ```yaml
   - name: Security audit
     run: npm audit
   ```

4. **Deploy previews:**
   ```yaml
   - name: Deploy preview
     uses: vercel/action@v2
   ```

## 📚 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [Actions Marketplace](https://github.com/marketplace?type=actions)
- [Codecov Documentation](https://docs.codecov.com/)

## 💡 Pro Tips

1. **Use workflow_dispatch** - Test workflows manually
2. **Set up notifications** - Get alerts for failures
3. **Review artifacts** - Download and inspect reports
4. **Monitor trends** - Track coverage over time
5. **Document changes** - Keep this README updated

---

**Last Updated:** December 2025  
**Maintained By:** Development Team

