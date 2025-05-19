import React, { useEffect, useState } from "react";
import { HustlepayPaymentGateway } from "@hustlepay/payment-gateway";
import "@hustlepay/payment-gateway/dist/index.css";
import { toCents } from "./utils";
import { order as orderDetails, config } from "./config";
import NoPayment from "./no-payment";
import { useOrderTotal, useShippingMethodSelected } from "./hooks";

export default function App() {
  const [amount, setAmount] = useState(
    toCents(
      document.getElementById("order-total")?.getAttribute("data-total")
    ) ?? 0
  );
  const [showPayment, setShowPayment] = useState(false);

  useOrderTotal(setAmount);
  useShippingMethodSelected(setShowPayment);

  const order = { ...orderDetails, amount };

  if (!showPayment) return <NoPayment />;

  return <HustlepayPaymentGateway config={config} order={order} />;
}
