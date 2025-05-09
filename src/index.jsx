import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import LearnMore from "./pages/LearnMore";
import NewsEvents from "./pages/NewsEvents";
import Cart from "./pages/Cart";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/learn-more" element={<LearnMore />} />
      <Route path="/news-events" element={<NewsEvents />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
);
