import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import LearnMore from "./pages/LearnMore";
import NewsEvents from "./pages/NewsEvents";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import HTMLEmbed from "./components/HtmlEmbed";
import FullPageRedirect from "./components/FullPageRedirect";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<FullPageRedirect htmlFile='/home.html' />} />
      <Route path="/products"  element={<FullPageRedirect htmlFile='/products.html' />} />
      <Route path="/contact-us" element={<FullPageRedirect htmlFile='/contact-us.html' />}  />
      <Route path="/learn-more" element={<FullPageRedirect htmlFile='/learn-more.html' />}  />
      <Route path="/news-events" element={<FullPageRedirect htmlFile='/news-&-events.html' />}  />
      <Route path="/cart" element={<FullPageRedirect htmlFile='/products_olsPage_cart.html' />}  />
      <Route path="/checkout" element={<FullPageRedirect htmlFile='/home.html' />}  />
    </Routes>
  </Router>
);
