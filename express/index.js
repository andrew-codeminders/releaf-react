require('dotenv').config();

const express = require("express");
const puppeteer = require("puppeteer");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

const targetUrl =
  "https://b7a9054f-29d9-46b1-af0f-ee155b4016fd.mysimplestore.com/checkout";
const baseUrl = process.env.BASE_URL;

// const headers = {
//   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//   // NOTE: cookies controll the checkout session, we have to find a way to pass them
//   'Cookie': 'cookie_terms_accepted=true; _tccl_visitor=0227d211-6876-4ba5-85c7-f87dba976d10; _ga=GA1.1.895578352.1746003121; __stripe_mid=f24628ac-ba04-4fa0-8d76-0384b23fda9837c51d; _tccl_visit=41a368bc-a20d-4b84-8b8d-3612db957a18; __stripe_sid=2532b3c9-cd98-4a65-812d-4dfbc2f621e29ce7d7; _nemo_session=SWRqMjdsOXJkbVNlem9PNkhLbk5zTUNqR1pCQ0JRUGYyeXRydU90Z0txN0FiZk9WYkZvR3EvY1d6MmxmbDVSMWk3akVwL0U2NjQ5blVWRUJGUEE2RkVDQ2hFS1dOVHJDQjR4SGlibVFvWlVDMSttTGY5bnRyZkNIbWxzS2ZGSk1BTzZ2cjFldU9FRUhHcjFHL1g2T0YxV0xsRVA4OWgyTllPZVNzUldSV3lkc2xtckU4L1NXdFVPazdvTVBrdUcyS01jeXdIZElqd0pGR1gzMVNWS01seGc2eWpRQXd0MEVjeEdzVVRlMUp6ZTNiQk5tRzM0VjRTK1lqZStaT1J6bTVadjZnelE1ZExLbDI3R1BPZFRTeFFXVFpFZWxjWDFPak9YQTM4Q1p3RjRWRTVMTi9KcnB6ZVh3OWxSNCt3SlYtLW8yc0dXQURSek5PNXQxZGRXVVpia3c9PQ%3D%3D--6edd82ff7af4139c9c2f32ee297eae04f08e6747; _scc_session=pc=8&C_TOUCH=2025-05-16T09:13:27.232Z; _ga_BF2FDR6KMM=GS2.1.s1747384886$o9$g1$t1747386807$j0$l0$h0',
// }

// Function to launch Puppeteer and inject content into the page
async function getPageWithInjection(cookie) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setExtraHTTPHeaders({
    Accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    Cookie: "cookie_terms_accepted=true; _tccl_visitor=0227d211-6876-4ba5-85c7-f87dba976d10; _ga=GA1.1.895578352.1746003121; __stripe_mid=f24628ac-ba04-4fa0-8d76-0384b23fda9837c51d; _tccl_visit=41a368bc-a20d-4b84-8b8d-3612db957a18; __stripe_sid=2532b3c9-cd98-4a65-812d-4dfbc2f621e29ce7d7; _nemo_session=SWRqMjdsOXJkbVNlem9PNkhLbk5zTUNqR1pCQ0JRUGYyeXRydU90Z0txN0FiZk9WYkZvR3EvY1d6MmxmbDVSMWk3akVwL0U2NjQ5blVWRUJGUEE2RkVDQ2hFS1dOVHJDQjR4SGlibVFvWlVDMSttTGY5bnRyZkNIbWxzS2ZGSk1BTzZ2cjFldU9FRUhHcjFHL1g2T0YxV0xsRVA4OWgyTllPZVNzUldSV3lkc2xtckU4L1NXdFVPazdvTVBrdUcyS01jeXdIZElqd0pGR1gzMVNWS01seGc2eWpRQXd0MEVjeEdzVVRlMUp6ZTNiQk5tRzM0VjRTK1lqZStaT1J6bTVadjZnelE1ZExLbDI3R1BPZFRTeFFXVFpFZWxjWDFPak9YQTM4Q1p3RjRWRTVMTi9KcnB6ZVh3OWxSNCt3SlYtLW8yc0dXQURSek5PNXQxZGRXVVpia3c9PQ%3D%3D--6edd82ff7af4139c9c2f32ee297eae04f08e6747; _scc_session=pc=8&C_TOUCH=2025-05-16T09:13:27.232Z; _ga_BF2FDR6KMM=GS2.1.s1747384886$o9$g1$t1747386807$j0$l0$h0",
    // 'Cookie': cookie
  });
  // Go to the target URL
  await page.goto(targetUrl, { waitUntil: "networkidle2" });
  
  await page.waitForSelector('#order-total', {
    visible: true,
    timeout: 5000
  })

  // Inject custom content into the page (e.g., add a div to the body)
  await page.evaluate((baseUrl) => {
    const base = document.createElement("base");
    base.href = location.origin;
    document.head.prepend(base);

    document
      .getElementById("order-confirmation")
      .insertAdjacentHTML(
        "beforeend",
        '<div class="box"><div id="payment-section"><h5 class="no-margin-top-desktop">Payment</h5></div></div>'
      );

    const checkoutRoot = document.createElement("div");
    checkoutRoot.id = "checkout-widget-root";
    document.getElementById('payment-section').appendChild(checkoutRoot);

    const script = document.createElement("script");
    script.src = baseUrl + "/dist/checkout.js"; // We need to explicitly set the origin because of the base element
    document.body.appendChild(script);
  }, baseUrl);

  const modifiedContent = await page.content();

  await browser.close();

  return modifiedContent;
}

// Proxy route to handle requests
app.get("/checkout", async (req, res) => {
  try {
    const modifiedHtml = await getPageWithInjection(req.headers.cookie);
    res.set("Content-Type", "text/html");
    res.send(modifiedHtml);
  } catch (err) {
    console.error(`Error loading ${targetUrl}:`, err);
    res.status(500).send("Error proxying the page: " + err.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Puppeteer proxy server running at http://localhost:${PORT}`);
});
