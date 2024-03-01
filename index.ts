import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://traversymedia.com");
  // await page.pdf({ path: "example", format: "A4" });

  // const html = await page.content()
  // console.log(html)
  // const title = await page.evaluate(() => document.title);

  const text = await page.evaluate(() => document.body.innerText)
  console.log(text)

  await browser.close();
})();
