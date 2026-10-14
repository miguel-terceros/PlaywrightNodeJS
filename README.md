# Playwright in Node.js 🎭

Demo repo for the **"Playwright in Node.js Fundamentals" Pluralsight course** — a hands-on playground for learning end-to-end testing with Playwright and TypeScript, from the first script to locators, actions, the test runner, configuration, and networking.

The repo ships with a small demo web app (a mock "Credit Association" bank with savings and loans calculators) and a suite of TypeScript tests written against it, organized by course module.

## ✨ What's inside

- **A demo app** — static savings and loans pages, served locally with Express.
- **Setup & browser support** — a first Playwright script and cross-browser checks.
- **Core concepts** — the test runner, built-in fixtures, and assertions.
- **Locators** — recommended (role, label, test id), generic (CSS/XPath), filters, and misc examples.
- **Actions** — navigation, fill/click, checkboxes, selects, and web-first assertions, plus a coding challenge.
- **Advanced actions** — dialogs, console messages, cookies, browser storage, downloads/uploads, and screenshots.
- **Test runner features** — annotations, `describe` groups, hooks, parametrized tests, and parallel execution.
- **Configuration** — test-level, group-level, advanced, and global config, including setup/teardown projects.
- **Networking** — request/response inspection, traffic monitoring, HTTP authentication, and route interception.

## 🧰 Tech stack

- [Playwright](https://playwright.dev/) (`@playwright/test`)
- TypeScript
- [Express](https://expressjs.com/) — serves the demo app on `localhost:3000`

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) 18+ (tested with Node 24)
- npm

## 🚀 Getting started

1. **Clone the repo**

   ```bash
   git clone https://github.com/miguel-terceros/PlaywrightNodeJS.git
   cd PlaywrightNodeJS
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Playwright browsers**

   ```bash
   npx playwright install
   ```

4. **Run the tests**

   ```bash
   npx playwright test
   ```

   Playwright automatically starts the demo app (`npm start`) on `http://localhost:3000` before the test run, via its built-in `webServer` config.

## 🧪 Available commands

| Command                                               | Description                                         |
| ----------------------------------------------------- | --------------------------------------------------- |
| `npm start`                                           | Runs the demo app standalone (Express, port 3000).  |
| `npx playwright test`                                 | Runs the full Playwright test suite.                |
| `npx playwright test tests/m4-locators`               | Runs the tests of a single module.                  |
| `npx playwright test --project chromium`              | Runs the tests for a single project.                |
| `npx playwright test --ui`                            | Opens the Playwright UI mode for interactive debugging. |
| `npx playwright show-report`                          | Opens the HTML report of the last run.              |
| `npx playwright codegen localhost:3000`               | Launches Playwright Codegen to record new tests.    |

## 🌐 Demo app pages

- `http://localhost:3000/index.html`
- `http://localhost:3000/savings.html`
- `http://localhost:3000/loans.html`

## ⚙️ Configuration highlights

[`playwright.config.ts`](playwright.config.ts) defines:

- `baseURL` set to `http://localhost:3000`, so tests can use relative paths like `page.goto('/savings.html')`.
- Screenshots on failure, traces on first retry, and a `slowMo` of 1s to make runs easy to follow.
- Browser projects: `chromium`, `safari`, and `Mobile Safari` (iPhone 12).
- Purpose-based projects: `Smoke` (`*smoke.test.ts`, no retries) and `Regular` (2 retries).
- Setup/teardown demo: the `setup-cleanup-demo` project depends on `setup`, `admin-auth`, and `populate-db`, with `cleanup` as the global teardown.

## 📁 Project structure

```
├── src/                         # Demo "Credit Association" web app
│   ├── css/  js/                # Styles and page scripts
│   ├── files/                   # Sample files for download/upload tests
│   ├── index.html
│   ├── savings.html
│   └── loans.html
├── tests/
│   ├── m2-setup/                # First script & browser support
│   ├── m3-core-concepts/        # Test runner, fixtures, assertions
│   ├── m4-locators/             # Locator strategies and filters
│   ├── m5-actions/              # Navigation, forms, selects, assertions
│   ├── m6-advanced-actions/     # Dialogs, console, cookies, storage, files, screenshots
│   ├── m7-test-runner/          # Annotations, groups, hooks, parametrized & parallel tests
│   ├── m8-configuration/        # Test, group, advanced & global configuration
│   ├── m9-networking/           # Requests/responses, traffic, HTTP auth, routes
│   ├── global.setup.ts          # Global setup project
│   ├── global.teardown.ts       # Global teardown project
│   ├── admin-auth.setup.ts      # Auth setup dependency
│   └── populate-db.setup.ts     # Data setup dependency
├── server.js                    # Minimal Express server for the demo app
├── playwright.config.ts         # Playwright test runner configuration
└── tsconfig.json                # TypeScript compiler options
```

## 📄 License

Licensed under the [ISC License](https://opensource.org/licenses/ISC).
