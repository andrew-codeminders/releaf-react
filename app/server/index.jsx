import React from "react";
import { createRoot } from "react-dom/client";
import { HustlepayPaymentGateway } from "@hustlepay/payment-gateway";
import "@hustlepay/payment-gateway/dist/index.css";
import "./index.css";

if (!process.env.PUBLIC_KEY)
  throw new Error(`PUBLIC_KEY environment variable is required!`);

if (!process.env.SECRET_KEY)
  throw new Error(`SECRET_KEY environment variable is required!`);

if (!process.env.API_URL)
  throw new Error(`API_URL environment variable is required!`);

if (!process.env.PUBLISHABLE_KEY)
  throw new Error(`PUBLISHABLE_KEY environment variable is required!`);

const rootElement = document.getElementById("checkout-widget-root");
const amount = +rootElement.dataset.amount * 100;

const order = {
  customer_id: -1,
  order_id: 1,
  full_name: "John Doe",
  email: "test@example.com",
  amount: amount,
  order_items: [],
  billing_address_1: "",
  billing_address_2: "",
  redirect_url: "http://localhost:8080/payment-success.html?status=success",
};

const config = {
  pluginUrl: "", // TODO: replace with CDN url in the future, for now we get images from public assets
  publicKey: process.env.PUBLIC_KEY,
  secretKey: process.env.SECRET_KEY,
  stripeConfig: {
    apiUrl: process.env.API_URL,
    publishableKey: process.env.PUBLISHABLE_KEY,
  },
};


const root = createRoot(rootElement);
root.render(<HustlepayPaymentGateway config={config} order={order} />);

