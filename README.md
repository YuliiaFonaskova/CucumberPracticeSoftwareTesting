# WebdriverIO Cucumber Test Automation Framework

This project is a UI test automation framework for the Practice Software Testing application.

## Tech Stack

- JavaScript
- WebdriverIO
- Cucumber
- Gherkin
- Chai
- Page Object Model (POM)
- ESLint
- Prettier
- HTML Reporter
- Spec Reporter
- GitHub Actions

## Project Structure

```
.
├── config
├── features
│   ├── step-definitions
│   ├── support
│   ├── authentication.feature
│   ├── products.feature
│   ├── registration.feature
│   └── shopping-cart.feature
├── pages
├── test-data
├── reports
├── .env.example
├── package.json
├── wdio.conf.js
└── README.md
```

## Automated Scenarios

### Authentication

- Successful login with valid credentials
- Unsuccessful login with invalid credentials

### Registration

- Successful registration
- Registration validation for required fields

### Products

- Search for an existing product
- View product details
- Add a product to favourites

### Shopping Cart

- Add a product to the shopping cart
- Verify the confirmation message
- Verify the cart quantity

## Running Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npm test
```

Run tests by tags:

```bash
npm run test:smoke
npm run test:regression
npm run test:login
npm run test:registration
npm run test:product
npm run test:cart
```

## Code Quality

Check formatting:

```bash
npm run format
```

Fix formatting:

```bash
npm run format:fix
```

Run ESLint:

```bash
npm run lint
```

## Reports

The framework generates:

- Spec Reporter output in the console
- HTML report in the `reports/html-reports` folder

## CI

The project uses GitHub Actions to:

- run ESLint;
- check formatting;
- execute UI tests;
- publish HTML reports as artifacts.

## Author

**Yuliia Fonaskova**

GitHub: https://github.com/YuliiaFonaskova

LinkedIn: https://www.linkedin.com/in/yuliia-fonaskova/
