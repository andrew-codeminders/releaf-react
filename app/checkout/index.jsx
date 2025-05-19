import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";

// Wait until DOM is fully available
function initReactApp() {
  const orderTotal = document.getElementById("order-total");
  if (!orderTotal) {
    console.warn("order-total not found. Retrying...");
    return setTimeout(initReactApp, 400); // retry until available
  }

  // Avoid duplicate mounts
  if (!document.getElementById("checkout-widget-root")){
    throw new Error('Root element "checkout-widget-root" not present in DOM!')
  }

  const container = document.getElementById("checkout-widget-root");

  const root = createRoot(container);
  root.render(<App />);
}

initReactApp();
