const fs = require("fs-extra");

class BasePage {
  async open(path) {
    await browser.url(path);

    const currentUrl = await browser.getUrl();
    const title = await browser.getTitle();

    console.log("OPENED PATH:", path);
    console.log("CURRENT URL:", currentUrl);
    console.log("PAGE TITLE:", title);

    fs.ensureDirSync("./reports/screenshots");

    await browser.saveScreenshot(
      `./reports/screenshots/${Date.now()}-page.png`,
    );
  }
}

module.exports = BasePage;