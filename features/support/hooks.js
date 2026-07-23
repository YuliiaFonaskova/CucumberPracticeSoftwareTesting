const { Before } = require("@wdio/cucumber-framework");

Before(async () => {
  await browser.deleteCookies();
});
