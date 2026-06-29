# WebdriverIO Practice Software Testing

UI automation framework created with WebdriverIO for the Practice Software Testing application.

## Tech Stack

* JavaScript (ES6)
* WebdriverIO
* Mocha
* Chai
* Page Object Model (POM)
* Node.js
* npm

## Project Structure

```text
├── pages
│   ├── loginpage.js
│   ├── mainpage.js
│   ├── productpage.js
│   └── registrationpage.js
├── test
│   ├── loginpage.test.js
│   ├── mainpage.test.js
│   ├── productpage.test.js
│   └── registrationpage.test.js
├── package.json
└── README.md
```

## Automated Scenarios

### Authentication

* User signs in successfully
* User signs in unsuccessfully

### Registration

* User signs up successfully
* User signs up unsuccessfully

### Product Functionality

* User searches for an exact product
* User sorts products
* User views product details
* User adds a product to favourites
* User adds a product to the shopping cart
* User sees updated cart counter

## Design Pattern

This project follows the **Page Object Model (POM)** design pattern to improve test maintainability and reusability.

## Installation

```bash
npm install
```

## Run Tests

```bash
npm test
```

or

```bash
npx wdio run wdio.conf.js
```

## Author

Yuliia Fonaskova

GitHub: https://github.com/YuliiaFonaskova
LinkedIn: https://www.linkedin.com/in/yuliia-fonaskova/
