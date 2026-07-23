require("dotenv").config();

const fs = require("fs-extra");

const outputDir = "./reports/html-reports/";
const isCI = Boolean(process.env.CI);

exports.config = {
  runner: "local",

  specs: ["./features/**/*.feature"],

  maxInstances: 1,

  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          ...(isCI ? ["--headless=new", "--no-sandbox", "--disable-dev-shm-usage"] : []),
          "--disable-save-password-bubble",
          "--disable-features=PasswordManagerOnboarding",
        ],
        prefs: {
          credentials_enable_service: false,
          "profile.password_manager_enabled": false,
          "profile.default_content_setting_values.notifications": 2,
        },
      },
    },
  ],

  logLevel: "info",

  bail: 0,

  baseUrl: "https://practicesoftwaretesting.com/",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "cucumber",

  reporters: [
    "spec",
    [
      "html-nice",
      {
        outputDir,
        filename: "report.html",
        reportTitle: "WDIO Test Report",
        linkScreenshots: true,
        showInBrowser: false,
        collapseTests: false,
        useOnAfterCommandForScreenshot: false,
      },
    ],
  ],

  cucumberOpts: {
    require: ["./features/step-definitions/**/*.js", "./features/support/**/*.js"],
    timeout: 60000,
  },

  onPrepare() {
    fs.emptyDirSync(outputDir);
  },
};
